// var american_football = [
//   {source: "", target: "</m.01xljnx>", img:"images/analytics.png"},
//   {source: "</m.01xljnx>", predicate: "</type.object.id>", target: "/american_football"},
//   {source: "</m.01xljnx>", predicate: "</common.topic.description>", target: "American Football types pertain to the sport of Football..."},
//   {source: "/american_football", predicate: "</type.domain.types>", target: "/american_football/football_coach"},
//   {source: "/american_football", predicate: "</type.domain.types>", target: "/american_football/football_coach_position"},
//   {source: "/american_football", predicate: "</type.domain.types>", target: "/american_football/football_conference"},
//   {source: "/american_football", predicate: "</type.domain.types>", target: "/american_football/football_division"},
// ];

if(typeof(String.prototype.trim) === "undefined") {
  String.prototype.trim = function() {
    return String(this).replace(/^\s+|\s+$/g, '');
  };
}

function logIt() {
  input = document.getElementById('textBox').value.split('\n');
  console.log(input)
}



function draw2() {
  // Erase any exisitng
  d3.selectAll("g > *").remove();
  input = document.getElementById('textBox').value.split('\n');

  var links = [];
  for (var i = 0; i < input.length; i++) {
    // Split each triple by:
    triple = input[i].split(';');
    triple_data = {source: triple[0].trim(), predicate: triple[1].trim(), target: triple[2].trim()}
    console.log(triple_data);
    links.push(JSON.parse(JSON.stringify(triple_data)));
  }
  // console.log(links);

  var nodes = {};
  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, img: link.img});
  });
  // delete empty node
  // delete nodes[""]
  // console.log(nodes)
  // workaround to let subclusters be unlinked
  for (var i = 0; i < links.length; i++) {
    if (links[i].source.name == "") {
      links.splice(i, 1);
    }
  }
  // Define graph parameters
  var width = 1200;
      height = 500;
  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(100) //150
      // .linkStrength(0.1)
      // .charge(-1500)
      .charge(-800)
      .on("tick", tick)
      .start();
  var svg = d3.select("#visualization")
      .attr("width", width)
      .attr("height", height);
  // Add a border around the visualization box
  var borderPath = svg.append("rect")
          .attr("x", 0)
          .attr("y", 0)
          .attr("height", height)
          .attr("width", width)
          .style("stroke", "black")
          .style("fill", "none")
          .style("stroke-width", 1);

  // Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
      .data(["end"])  // .data(["loves"])
    .enter().append("marker")  // the arrowhead
      .attr("id", function(d) { return d; })
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 22)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
    .append("path")
      .attr("d", "M0,-5L10,0L0,5");
  // Paths
  var path = svg.append("g").selectAll("path")
      .data(force.links())
    .enter().append("path")
      .attr("class", function(d) { return "link " + d.predicate; })  
      .attr("marker-end", function(d) { return "url(#end)" }) //+ d.predicate; });
  var pathLabels = svg.append("g").selectAll("pathLabels")
      .data(force.links())
    .enter().append("text")
      .attr("class", "link-label")
      .text(function(d) { return d.predicate.replace("<", "")
                                            .replace(">", "")
                                            .replace(/\./g, "/"); })
      .attr("x", function(d) { return (d.source.x + (d.target.x - d.source.x) * 0.5); })
      .attr("y", function(d) { return (d.source.y + (d.target.y - d.source.y) * 0.5); })
      .attr("dy", ".25em")
      .attr("text-anchor", "middle");

  var circle = svg.append("g").selectAll("circle")
      .data(force.nodes())
      .enter().append("image")
      .attr("xlink:href", function(d) { 
        if (d.img) {
          return d.img;
        } 
        // If it follows a mid or schema format
        if (d.name.indexOf('/') == 0 && d.name.indexOf('<') == -1 ) {
          return "images/analytics.png";
        } else { 
          return "images/circle.png";
        }})
      .attr("x", -12)  // about * -0.5 of width/height
      .attr("y", -12)
      .attr("width", 24)
      .attr("height", 24)
      .call(force.drag);
  var text = svg.append("g").selectAll("text")
      .data(force.nodes())
    .enter().append("text")
      .attr("x", -20)
      .attr("y", -16) //".31em")
      .text(function(d) { return d.name; })
      .call(wrap, 300);

  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
          words = text.text().slice(0,50).split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1, // ems
          x = text.attr("x"),
          y = text.attr("y"),
          // dy = parseFloat(text.attr("dy")),
          dy = text.attr("dy") ? text.attr("dy") : 0; //<-- null check
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }

  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", linkArc);
    circle.attr("transform", transform);
    text.attr("transform", transform);  // The text labels for each node
    pathLabels
        .attr("x", function(d) {
            return ((d.source.x + d.target.x)/2);
        })
        .attr("y", function(d) {
            return ((d.source.y + d.target.y)/2);
        });
  };
  function linkArc(d) {
    var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        // The original code for the elliptical arcs - maybe re-use one day
        // dr = Math.sqrt(dx * dx + dy * dy);
        dr = 0;
    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
  };
  function transform(d) {
    return "translate(" + d.x + "," + d.y + ")";
  };
};
