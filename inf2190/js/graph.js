var tues = [
  {source: "", target: "L1-G1", img:"images/analytics.png"},
  {source: "L1-G1", target: "Namir Ahmed", type: "main"},
  {source: "L1-G1", target: "Ali Montazeri", type: "main"},
  {source: "L1-G1", target: "Nasom Ikoko", type: "main"},

  {source: "", target: "L1-G2", img:"images/analytics.png"},1
  {source: "L1-G2", target: "Patrick Smyth", type: "main"},
  {source: "L1-G2", target: "Ka Weng Chi", type: "main"},
  {source: "L1-G2", target: "Hussein Rajabali", type: "main"},

  {source: "", target: "L1-G3", img:"images/analytics.png"},
  {source: "L1-G3", target: "Rifat Syed", type: "main"},
  {source: "L1-G3", target: "Kendall Kiddie", type: "main"},
  {source: "L1-G3", target: "Ricky Liu", type: "main"},
  {source: "L1-G3", target: "Kairui Wu", type: "main"},
  
  {source: "", target: "L1-G4", img:"images/analytics.png"},
  {source: "L1-G4", target: "Michelle Johnstone", type: "main"},
  {source: "L1-G4", target: "Marian Uwadiegwu", type: "main"},
  {source: "L1-G4", target: "Achyuth Suri", type: "main"},
  {source: "L1-G4", target: "Marian Tesfamichael", type: "main"},

  {source: "", target: "L1-G5", img:"images/analytics.png"},
  {source: "L1-G5", target: "Lulu Yang", type: "main"},
  {source: "L1-G5", target: "Ye Zheng", type: "main"},
  {source: "L1-G5", target: "Yiyang Wang", type: "main"},
  {source: "L1-G5", target: "Shafaq Zakir", type: "main"},

  {source: "", target: "L1-G6", img:"images/analytics.png"},
  {source: "L1-G6", target: "Colleen McDonald", type: "main"},
  {source: "L1-G6", target: "Ziang Chen", type: "main"},
  {source: "L1-G6", target: "Ning Wu", type: "main"},

  {source: "", target: "L1-G7", img:"images/analytics.png"},
  {source: "L1-G7", target: "Ye-Eun Kim", type: "main"},
  {source: "L1-G7", target: "Permjit Buadhwal", type: "main"},
  {source: "L1-G7", target: "Zhuoran Jiang", type: "main"},
  {source: "L1-G7", target: "Harrison Sless", type: "main"},

  {source: "", target: "L1-G8", img:"images/analytics.png"},
  {source: "L1-G8", target: "Sara Alnasser", type: "main"},
  {source: "L1-G8", target: "Lin Zhang", type: "main"},
  {source: "L1-G8", target: "Zhixian Chen", type: "main"},
  {source: "L1-G8", target: "Xuning Zhu", type: "main"},
];

var thurs = [
  {source: "", target: "L2-G1", img:"images/analytics.png"},
  {source: "L2-G1", target: "Amy Quackenbush", type: "main"},
  {source: "L2-G1", target: "Amber Shortell", type: "main"},
  {source: "L2-G1", target: "Tendy Su", type: "main"},
  {source: "L2-G1", target: "Charlotte Kidd", type: "main"},

  {source: "", target: "L2-G2", img:"images/analytics.png"},
  {source: "L2-G2", target: "Thais Bittencourt", type: "main"},
  {source: "L2-G2", target: "Hiba Rafih", type: "main"},
  {source: "L2-G2", target: "Harsimran Grewal", type: "main"},
  {source: "L2-G2", target: "Riley McGillis", type: "main"},

  {source: "", target: "L2-G3 (eMHI)", img:"images/analytics.png"},
  {source: "L2-G3 (eMHI)", target: "Marufa Hoque", type: "main"},
  {source: "L2-G3 (eMHI)", target: "Nathan Harrison", type: "main"},
  {source: "L2-G3 (eMHI)", target: "Tanya Agnihotri", type: "main"},
  {source: "L2-G3 (eMHI)", target: "Steven Wong", type: "main"},

  {source: "", target: "L2-G4 (eMHI)", img:"images/analytics.png"},
  {source: "L2-G4 (eMHI)", target: "Ashoke Roy", type: "main"},
  {source: "L2-G4 (eMHI)", target: "Arsalan Karim", type: "main"},
  {source: "L2-G4 (eMHI)", target: "Gursimran Sekhon", type: "main"},

];


function a1() {
  // Remove the existing svg elements
  d3.selectAll("g > *").remove();

  // Return the checked checkboxes
  var checkedValues = [];
  var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for (var i=0; checkedBoxes[i]; ++i) {
      if (checkedBoxes[i].checked) {
           checkedValues.push(checkedBoxes[i].value);
      }
  }
  if (checkedValues) {
    draw(checkedValues);
  }
};


function draw(checks) {
  var checkedValues = checks;
  var links = [];
  // Tried .concat(); and Array.prototype.push.apply(); 
  // but deep copies of the arrays needed after a d3js .remove() call
  if (checkedValues.includes('tues')) {
    var links = links.concat(JSON.parse(JSON.stringify(tues)));
  }
  if (checkedValues.includes('thurs')) {
    var links = links.concat(JSON.parse(JSON.stringify(thurs)));
  }
  var nodes = {};
  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, img: link.img});
  });
  // workaround to let subclusters be unlinked
  for (var i = 0; i < links.length; i++) {
    if (links[i].source.name == "") {
      links.splice(i, 1);
    }
  }
  // Define graph parameters
  var width = 1000,
      height = 600;
  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(70)
      .charge(-250)
      .on("tick", tick)
      .start();
  var svg = d3.select("#visualization")
      .attr("width", width)
      .attr("height", height);
  // // Add a border around the visualization box
  // var borderPath = svg.append("rect")
  //         .attr("x", 0)
  //         .attr("y", 0)
  //         .attr("height", height)
  //         .attr("width", width)
  //         .style("stroke", "blue")
  //         .style("fill", "none")
  //         .style("stroke-width", 1);
  // Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
      .data(["transition", "acquisition"])
    .enter().append("marker")  // the arrowhead
      .attr("id", function(d) { return d; })
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", -1.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
    .append("path")
      .attr("d", "M0,-5L10,0L0,5");
  var path = svg.append("g").selectAll("path")
      .data(force.links())
    .enter().append("path")
      .attr("class", function(d) { return "link " + d.type; })
      .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });
  var circle = svg.append("g").selectAll("circle")
      .data(force.nodes())
      .enter().append("image")
      .attr("xlink:href", function(d) { 
        if (d.img) {
          return d.img;
        } else { 
          return "images/circle.png"
        }})
      .attr("x", -16)
      .attr("y", -16)
      .attr("width", 32)
      .attr("height", 32)
      .call(force.drag);
  var text = svg.append("g").selectAll("text")
      .data(force.nodes())
    .enter().append("text")
      .attr("x", -20)
      .attr("y", -16) //".31em")
      .text(function(d) { return d.name; });

  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", linkArc);
    circle.attr("transform", transform);
    text.attr("transform", transform);  // The text labels for each node
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

// At first display all clusters
draw(['tues', 'thurs']);
