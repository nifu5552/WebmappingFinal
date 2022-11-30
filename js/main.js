window.onload = setMap();

var attrArray = ["FIELD24", "FIELD84"];
var expressed = attrArray[0];

function setMap() {

    //map frame dimensions
    var width = 500,
        height = 500;

    var map = d3
        .select("body")
        .append("svg")
        .attr("class", "map")
        .attr("width", width)
        .attr("height", height);

    var projection = d3
        .geoAlbers()
        .center([-85,40])
        .rotate([-2, 0, 0])
        
        .scale(5000)
        .translate([width / 2, height / 2]);

    var path = d3.geoPath().projection(projection);

    var promises =
        [
            d3.json("data/MrCleanData.json"),
            d3.json("data/TreeGeoJSON.json")
        ];

    Promise.all(promises).then(callback);

    function callback(data) {
        var OhioData = data[0],
            TreeGeoJSON = data[1];

        var MrCleanData = topojson.feature(OhioData, OhioData.objects.MrCleanData).features,
            TreeData2 = topojson.feature(TreeGeoJSON, TreeGeoJSON.objects.TreeGeoJSON).features;


        console.log(MrCleanData);
        console.log(TreeData2);

        var graticule = d3.geoGraticule().step([5, 5]);

        var gratBackground = map
            .append("path")
            .datum(graticule.outline())
            .attr("class", "gratBackground")
            .attr("d", path);

        var gratLines = map
            .selectAll(".gratLines")
            .data(graticule.lines())
            .enter()
            .append("path")
            .attr("class", "gratLines")
            .attr("d", path);

        var drainage = map
            .append("path")
            .datum(MrCleanData)
            .attr("class", "Field24")
            .attr("d", path);

        var drainage = map
            .selectAll(".regions")
            .data(MrCleanData)
            .enter()
            .append("path")
            .attr("class", function (d) {
                return "Field24 " + d.properties.Field24;
            })
            .attr("d", path)
            .style("fill", function (d) {
                var value = d.properties.Field24;
                if (value == "Well drained") {
                    return "#76B468";
                } else if (value == "Somewhat poorly drained") {
                    return "#8A722E";
                } else if (value == "Moderately well drained") {
                return "#829E4C";
                } else if (value == "Poorly drained") {
                    return "#865C2B";
                } else if (value == "Somewhat excessively drained") {
                    return "#898838";
                } else if (value == "Very poorly drained") {
                    return "#7B492C";
                }
            });

            var points = map
            .selectAll(".regions")
            .data(TreeData2)
            .enter()
            .append("path")
            .attr("class", function (d) {
                return "Id" + d.properties.Id;
            })
            .attr("d", path);

            createDropdown(OhioData);
    }


    function createDropdown(OhioData) {
        //add select element
        var dropdown = d3
            .select("body")
            .append("select")
            .attr("class", "dropdown")
            .on("change", function () {
                changeAttribute(this.value, OhioData);
            });

        //add initial option
        var titleOption = dropdown
            .append("option")
            .attr("class", "titleOption")
            .attr("disabled", "true")
            .text("Select Attribute");

        //add attribute name options
        var attrOptions = dropdown
            .selectAll("attrOptions")
            .data(attrArray)
            .enter()
            .append("option")
            .attr("value", function (d) {
                return d;
            })
            .text(function (d) {
                return d;
            });
    }

    function changeAttribute(attribute, OhioData) {
        //change the expressed attribute
        expressed = attribute;

        //recolor enumeration units
        var regions = d3
            .selectAll(".regions")
            .transition()
            .duration(1000)
            .style("fill", function (d) {
                var value = d.properties.Field24;
                if (value == "Alfisols") {
                    return "#ED87A5";
                } else if (value == "Mollisols") {
                    return "#97A5D4";
                } else if (value == "Inceptisols") {
                return "#39B8B0";
                } else if (value == "Ultisols") {
                    return "#81B562";
                } else if (value == "Entisols") {
                    return "#D59D49";
                }
            });
        }
    
}//insert code here!
