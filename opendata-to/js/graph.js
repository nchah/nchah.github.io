var data_ttc = [
{source:'SEARCH: TTC', predicate:'dataset', target:'TTC Bus Delay Data', hover:'6 MB, 5K rows'},
{source:'SEARCH: TTC', predicate:'dataset', target:'TTC Routes and Schedules - Routes', hover:'9 KB, 198 rows'},
{source:'SEARCH: TTC', predicate:'dataset', target:'TTC Routes and Schedules - Stops', hover:'733 KB, 10K rows'},
{source:'SEARCH: TTC', predicate:'dataset', target:'TTC Routes and Schedules - Trips', hover:'14 MB, 16K rows'},
{source:'SEARCH: TTC', predicate:'dataset', target:'TTC Streetcar Delay Data', hover:'1 MB, 14K rows'},
{source:'SEARCH: TTC', predicate:'dataset', target:'TTC Subway Delay Data', hover:' 21 MB, 1K rows'},

// Remove:
// {source:'TTC Bus Delay Data', predicate:'datasize', target:'5.57 MB'},
// {source:'TTC Routes and Schedules - Routes', predicate:'datasize', target:'9 KB'},
// {source:'TTC Routes and Schedules - Stops', predicate:'datasize', target:'733 KB'},
// {source:'TTC Routes and Schedules - Trips', predicate:'datasize', target:'13.88 MB'},
// {source:'TTC Streetcar Delay Data', predicate:'datasize', target:'1 MB'},
// {source:'TTC Subway Delay Data', predicate:'datasize', target:'21.11 MB'},

// {source:'TTC Bus Delay Data', predicate:'numrecords', target:'5327 Records'},
// {source:'TTC Routes and Schedules - Routes', predicate:'numrecords', target:'198 Records'},
// {source:'TTC Routes and Schedules - Stops', predicate:'numrecords', target:'10630 Records'},
// {source:'TTC Routes and Schedules - Trips', predicate:'numrecords', target:'162735 Records'},
// {source:'TTC Streetcar Delay Data', predicate:'numrecords', target:'14033 Records'},
// {source:'TTC Subway Delay Data', predicate:'numrecords', target:'1165 Records'},

{source:'TTC Bus Delay Data', predicate:'column', target:'Report Date', img:'1Datetime'},
{source:'TTC Bus Delay Data', predicate:'column', target:'Route#', img:'1Number'},
{source:'TTC Bus Delay Data', predicate:'column', target:'Time', img:'1Datetime'},
{source:'TTC Bus Delay Data', predicate:'column', target:'Day', img:'1Text'},
{source:'TTC Bus Delay Data', predicate:'column', target:'Location', img:'1Text'},
{source:'TTC Bus Delay Data', predicate:'column', target:'Incident', img:'1Text'},
{source:'TTC Bus Delay Data', predicate:'column', target:'Min Delay', img:'1Number'},
{source:'TTC Bus Delay Data', predicate:'column', target:'Min Gap', img:'1Number'},
{source:'TTC Bus Delay Data', predicate:'column', target:'Direction', img:'1Text'},
{source:'TTC Bus Delay Data', predicate:'column', target:'Vehicle', img:'1Number'},

{source:'TTC Routes and Schedules - Routes', predicate:'column', target:'route_id', img:'1Number'},
{source:'TTC Routes and Schedules - Routes', predicate:'column', target:'agency_id', img:'0Number'},
{source:'TTC Routes and Schedules - Routes', predicate:'column', target:'route_short_name', img:'0Number'},
{source:'TTC Routes and Schedules - Routes', predicate:'column', target:'route_long_name', img:'0Text'},
{source:'TTC Routes and Schedules - Routes', predicate:'column', target:'route_desc', img:'0Text'},
{source:'TTC Routes and Schedules - Routes', predicate:'column', target:'route_type', img:'0Number'},
{source:'TTC Routes and Schedules - Routes', predicate:'column', target:'route_url', img:'0Text'},
{source:'TTC Routes and Schedules - Routes', predicate:'column', target:'route_color', img:'0Text'},
{source:'TTC Routes and Schedules - Routes', predicate:'column', target:'route_text_color', img:'0Text'},

{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'stop_id', img:'0Number'},
{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'stop_code', img:'0Number'},
{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'stop_name', img:'0Text'},
{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'stop_desc', img:'0Text'},
{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'stop_lat', img:'0Number'},
{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'stop_lon', img:'0Number'},
{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'zone_id', img:'0Text'},
{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'stop_url', img:'0Text'},
{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'location_type', img:'0Text'},
{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'parent_station', img:'0Text'},
{source:'TTC Routes and Schedules - Stops', predicate:'column', target:'wheelchair_boarding', img:'0Number'},

{source:'TTC Routes and Schedules - Trips', predicate:'column', target:'route_id', img:'1Number'},
{source:'TTC Routes and Schedules - Trips', predicate:'column', target:'service_id', img:'0Number'},
{source:'TTC Routes and Schedules - Trips', predicate:'column', target:'trip_id', img:'0Number'},
{source:'TTC Routes and Schedules - Trips', predicate:'column', target:'trip_headsign', img:'0Text'},
{source:'TTC Routes and Schedules - Trips', predicate:'column', target:'trip_short_name', img:'0Text'},
{source:'TTC Routes and Schedules - Trips', predicate:'column', target:'direction_id', img:'0Number'},
{source:'TTC Routes and Schedules - Trips', predicate:'column', target:'block_id', img:'0Number'},
{source:'TTC Routes and Schedules - Trips', predicate:'column', target:'shape_id', img:'0Number'},
{source:'TTC Routes and Schedules - Trips', predicate:'column', target:'wheelchair_accessible', img:'0Number'},

{source:'TTC Streetcar Delay Data', predicate:'column', target:'Report Date', img:'1Datetime'},
{source:'TTC Streetcar Delay Data', predicate:'column', target:'Route', img:'1Number'},
{source:'TTC Streetcar Delay Data', predicate:'column', target:'Time', img:'1Datetime'},
{source:'TTC Streetcar Delay Data', predicate:'column', target:'Day', img:'1Text'},
{source:'TTC Streetcar Delay Data', predicate:'column', target:'Location', img:'1Text'},
{source:'TTC Streetcar Delay Data', predicate:'column', target:'Incident', img:'1Text'},
{source:'TTC Streetcar Delay Data', predicate:'column', target:'Min Delay', img:'1Number'},
{source:'TTC Streetcar Delay Data', predicate:'column', target:'Min Gap', img:'1Number'},
{source:'TTC Streetcar Delay Data', predicate:'column', target:'Direction', img:'1Text'},
{source:'TTC Streetcar Delay Data', predicate:'column', target:'Vehicle', img:'1Number'},

{source:'TTC Subway Delay Data', predicate:'column', target:'Date', img:'1Datetime'},
{source:'TTC Subway Delay Data', predicate:'column', target:'Time', img:'1Datetime'},
{source:'TTC Subway Delay Data', predicate:'column', target:'Day', img:'1Text'},
{source:'TTC Subway Delay Data', predicate:'column', target:'Station', img:'0Text'},
{source:'TTC Subway Delay Data', predicate:'column', target:'Code', img:'0Text'},
{source:'TTC Subway Delay Data', predicate:'column', target:'Min Delay', img:'1Number'},
{source:'TTC Subway Delay Data', predicate:'column', target:'Min Gap', img:'1Number'},
{source:'TTC Subway Delay Data', predicate:'column', target:'Bound', img:'0Text'},
{source:'TTC Subway Delay Data', predicate:'column', target:'Line', img:'0Text'},
{source:'TTC Subway Delay Data', predicate:'column', target:'Vehicle', img:'1Number'},
  ];


function draw2() {
  // Get settings
  // var nodeSize = document.getElementById('nodeSize').value;
  var nodeSize = 24;
  // var labelSize = document.getElementById('labelSize').value;
  var labelSize = 12;
  var input = document.getElementById("searchTerm").value;
  // console.log(nodeSize, labelSize, input);
  
  // Erase any exisitng
  d3.selectAll("g > *").remove();
  
  // console.log(input)

  var links = [];
  if (input.includes('TTC')) {
    var links = links.concat(JSON.parse(JSON.stringify(data_ttc)));
  }
  // var links = data;
  // console.log(links);

  var nodes = {};
  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target,
                                                               img: link.img, 
                                                               hover: link.hover});
  });
  // delete empty node
  delete nodes[""]
  // console.log(nodes)
  // workaround to let subclusters be unlinked
  for (var i = 0; i < links.length; i++) {
    if (links[i].source.name == "") {
      links.splice(i, 1);
    }
  }
  // Define graph parameters
  var width = 1200;
      height = 600;
  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(100) //150
      // .linkStrength(0.1)
      // .charge(-1500)
      // .gravity(0.2)
      .charge(-500)
      .on("tick", tick)
      .start();
  // Adding drag feature
  //let 
  drag = force.drag()
    .on('dragstart', function(d) {
      d3.select(this).classed('fixed', d.fixed = true);
      force.stop();
    });


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
      .data(["dataset"])  // .data(["end"])
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
      // .attr("marker-end", function(d) { return "url(#end)" }) //+ d.predicate; });
      .attr("marker-end", function(d) { return "url(#" + d.predicate; })
  // Path labels
  var pathLabels = svg.append("g").selectAll("pathLabels")
      .data(force.links())
    .enter().append("text")
      .attr("class", "link-label")
      .style("font-size", labelSize)
      .text(function(d) { return d.predicate.replace("dataset", "") // Find certain path labels
                                            .replace("column", "")
                                            .replace("datasize", "")
                                            .replace("numrecords", ""); })
      .attr("x", function(d) { return (d.source.x + (d.target.x - d.source.x) * 0.5); })
      .attr("y", function(d) { return (d.source.y + (d.target.y - d.source.y) * 0.5); })
      .attr("dy", ".25em")
      .attr("text-anchor", "middle");
  // Nodes
  var circle = svg.append("g").selectAll("circle")
      .data(force.nodes())
      .enter().append("image")
      .attr("xlink:href", function(d) { 
        if (d.img) {
          // return d.img;
          // console.log(d.img.toString().includes('Datetime') && d.img.toString()[0] == 1);
          dimg = d.img.toString()
          if (dimg.includes('Datetime') && dimg[0] == 0) {
            return "images/0datetime.png"; } 
          if (dimg.includes('Number') && dimg[0] == 0) {
            return "images/0number.png"; } 
          if (dimg.includes('Text') && dimg[0] == 0) {
            return "images/0text.png"; } 
          if (dimg.includes('Datetime') && dimg[0] == 1 ) {
            return "images/1datetime.png"; } 
          if (dimg.includes('Number') && dimg[0] == 1) {
            return "images/1number.png"; } 
          if (dimg.includes('Text') && dimg[0] == 1) {
            return "images/1text.png"; }
          }
        // Query icon
        if (d.name.includes('SEARCH: ') ) {
          return "images/query.jpg"; } 
        if (d.name.includes('TTC ') ) {
          return "images/dataset2.jpg"; } 
        if (d.name.includes('KB') || d.name.includes('MB') ) {
          return "images/database.png"; } 
        if (d.name.includes('Records') ) {
          return "images/spreadsheet.png"; } 
        else { 
          return "images/circle.png";
        }})
      .on("mouseover", function(d) { if(d.hover) { return tooltip.text(d.hover).style("visibility", "visible");} })
      .on("mousemove", function(d) { return tooltip.text(d.hover).style("top",
        (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
      .on("mouseout", function(d) { return tooltip.text(d.hover).style("visibility", "hidden");})
      .attr("x", -12)  // about * -0.5 of width/height
      .attr("y", -12)
      .attr("width", nodeSize)
      .attr("height", nodeSize)
      .call(force.drag);

  var tooltip = d3.select("body")
    .append("div")
    .style("background-color", "skyblue")
    .style("padding", "0.5em")
    .style("font-size", "12px")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden");


  // Node labels
  var text = svg.append("g").selectAll("text")
      .data(force.nodes())
    .enter().append("text")
      .style("font-size", labelSize)
      .attr("x", -20)
      .attr("y", -16) //".31em")
      .text(function(d) { return d.name; })
      .call(wrap, 75);


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

  // Make the visualization materialize all at once, no init animations
  var iters = 800; // You can get decent results from 300 if you are pressed for time
  var thresh = 0.001;
  for (var i = iters; i > 0; --i) {
        force.tick();
        if(force.alpha() < thresh) {
            //console.log("Reached " + force.alpha() + " for " + data.nodes.length + " node chart after " + (iters - i) + " ticks.");
            break;
        }
    }
    force.stop();
};



// window.onload = function() {
//   document.getElementById('visualizeIt').onclick = function draw2() {
//     console.log('done2');
//   }
// }

// document.getElementById("visualizeIt").addEventListener("click", draw2);

draw2()

