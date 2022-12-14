//insert code here!
    // set the dimensions and margins of the graph
    var margin = { top: 80, right: 80, bottom: 80, left: 80 },
        width = 1100 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_drainageMatrix")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Labels of row and columns
    var myGroups = ["Excessively drained", "Well drained", "Moderately well drained", "Somewhat poorly drained", "Poorly drained", "Very poorly drained", "Null"]
    var myVars = ["Other", "Walnut", "Tulip Poplar", "Sycamore", "Pine", "Oak", "Maple", "Honey Locust", "Hickory", "Hackberry", "Elm", "Cherry", "Beech", "Basswood", "Ash"]

     // Build X scales and axis:
     const x = d3.scaleBand()
      .range([ 0, width ])
      .domain(myGroups)
      .padding(0.01);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))

    // Build X scales and axis:
    const y = d3.scaleBand()
      .range([ height, 0 ])
      .domain(myVars)
      .padding(0.1);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Build color scale
    const myColor = d3.scaleLinear()
      .range(["#fffaee", "orange"])
      .domain([1,500])

    //Read the data
    d3.csv("data/TreeDrainageSummaryFinal1.csv").then(function (data) {

        // create a tooltip
      const tooltip = d3.select("#my_drainageMatrix")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
    
      // Three function that change the tooltip when user hover / move / leave a cell
      const mouseover = function(event,d) {
        tooltip.style("opacity", 1)
      }
      const mousemover = function(event,d) {
        tooltip
          .html("The exact value of<br>this cell is: " + d['Count of AllTreesData'])
          .style("left", (event.x)/2 + "px")
          .style("top", (event.y)/2 + "px")
      }
      const mouseleave = function(d) {
        tooltip.style("opacity", 0)
      }
    
      // add the squares
      svg.selectAll()
        .data(data, function(d) {return d.Field24+':'+d.SP1;})
        .enter()
        .append("rect")
          .attr("x", function(d) { return x(d.Field24) })
          .attr("y", function(d) { return y(d.SP1) })
          .attr("width", x.bandwidth() )
          .attr("height", y.bandwidth() )
          .attr("rx", "5") // makes the boxes curved, increase values for more curve 
          .attr("ry", "5")
          .style("fill", function(d) { return myColor(d['Count of AllTreesData'])} )
        .on("mouseover", mouseover)
        .on("mousemove", mousemover)
        .on("mouseleave", mouseleave)
    })
  

