//insert code here!
    // set the dimensions and margins of the graph
    var marginM = { topM: 80, rightM: 80, bottomM: 80, leftM: 80 },
        widthM = 900 - marginM.leftM - marginM.rightM,
        heightM = 450 - marginM.topM - marginM.bottomM;

    // append the svg object to the body of the page
    var svgM = d3.select("#my_soilMatrix")
        .append("svg")
        .attr("width", widthM + marginM.leftM + marginM.rightM)
        .attr("height", heightM + marginM.topM + marginM.bottomM)
        .append("g")
        .attr("transform",
            "translate(" + marginM.leftM + "," + marginM.topM + ")");

    // Labels of row and columns
    var myGroupsM = ["Null", "Ultisols", "Mollisols", "Inceptisols", "Entisols", "Alfisols", "Histosols"]
    var myVarsM = ["Other", "Walnut", "Tulip Poplar", "Sycamore", "Pine", "Oak", "Maple", "Honey Locust", "Hickory", "Hackberry", "Elm", "Cherry", "Beech", "Basswood", "Ash"]

     // Build X scales and axis:
     const xM = d3.scaleBand()
      .range([ 0, widthM ])
      .domain(myGroupsM)
      .padding(0.01);
    svgM.append("g")
      .attr("transform", `translate(0, ${heightM})`)
      .call(d3.axisBottom(xM))

    // Build X scales and axis:
    const yM = d3.scaleBand()
      .range([ heightM, 0 ])
      .domain(myVarsM)
      .padding(0.1); // was 0.1
    svgM.append("g")
      .call(d3.axisLeft(yM));

    // Build color scale
    const myColorM = d3.scaleLinear()
      .range(["#f8f6f7", "#4d1735"])
      .domain([1,500])

    //Read the data
    d3.csv("https://raw.githubusercontent.com/nifu5552/WebmappingFinal/main/data/TreesSoilsSummaryFinal.csv").then(function (data) {

        // create a tooltip
      const tooltip = d3.select("#my_soilMatrix")
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
          .html("The exact value of<br>this cell is: " + d.Count)
          .style("left", 835 + "px")
          .style("top", 80 + "px")
      }
      const mouseleave = function(d) {
        tooltip.style("opacity", 0)
      }
    
      // add the squares
      svgM.selectAll()
        .data(data, function(d) {return d['Soil Fields']+':'+d['Tree Type'];})
        .enter()
        .append("rect")
          .attr("x", function(d) { return xM(d['Soil Fields']) })
          .attr("y", function(d) { return yM(d['Tree Type']) })
          .attr("width", xM.bandwidth() )
          .attr("height", yM.bandwidth() )
          .attr("rx", "5") // makes the boxes curved, increase values for more curve 
          .attr("ry", "5")
          .style("fill", function(d) { return myColorM(d['Count'])} )
          .on("mouseover", mouseover)
          .on("mousemove", mousemover)
          .on("mouseleave", mouseleave)
    })
    
