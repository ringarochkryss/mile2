
// The svg
var width = 300;
var height = 2200;

var svg2 = d3.select("#mapid2")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Map and projection
var projection = d3.geoMercator()
    .center([16, 47])                // GPS of location to zoom on
    .scale(1420)                       // This is like the zoom
    .translate([width / 2, height / 2]);

// data for circles:
var markers = [
    { long: 13.193751, lat: 55.700382, name: "Lund", group: "A", size: 10 }, //A=10 meters
    { long: 16.507220, lat: 59.377419, name: "Eskilstuna", group: "B", size: 5 }, //B=5 meters
    { long: 12.054180, lat: 57.794617, name: "Angered Gothenburg", group: "B", size: 5 },
    { long: 14.228592, lat: 57.786204, name: "Jonkoping", group: "A", size: 10 },
    { long: 17.940392, lat: 62.628398, name: "Harnosand", group: "B", size: 5 },
    { long: 14.525064, lat: 59.322308, name: "Karlskoga", group: "B", size: 5 },
    { long: 15.588679, lat: 56.172058, name: "Karlskrona", group: "B", size: 5 },
    { long: 13.511985, lat: 59.39759, name: "Karlstad", group: "B", size: 5 },
    { long: 15.631488, lat: 58.405759, name: "Linkoping", group: "B", size: 5 },
    { long: 12.991470, lat: 55.606526, name: "Malmo", group: "B", size: 5 },
    { long: 17.081623, lat: 58.673954, name: "Oxelosund", group: "C", size: 3 }, //3 meter
    { long: 18.079153, lat: 59.313125, name: "Stockholm", group: "A", size: 10 },
    { long: 17.637603, lat: 59.863359, name: "Uppsala", group: "A", size: 10 },
    { long: 18.300371, lat: 57.635879, name: "Visby", group: "B", size: 5 },
    { long: 16.535657, lat: 59.605114, name: "Vasteras", group: "B", size: 5 },
    { long: 14.816219, lat: 56.872556, name: "Vaxjo", group: "B", size: 5 },
    { long: 15.194563, lat: 59.262399, name: "Orebro", group: "A", size: 10 },
    { long: 17.635905, lat: 59.190682, name: "Sodertalje", group: "B", size: 5 },

];


// Load external data and boot
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function (data) {

    // Filter data
    data.features = data.features.filter(function (d) { console.log(d.properties.name); return d.properties.name == "Sweden" })

    // Create a color scale
    var color = d3.scaleOrdinal()
        .domain(["A", "B", "C"])
        .range(["#00b0b0", "#1F88C4", "#7A8DA2"]);

    // Scale for bubble size
    var size = d3.scaleLinear()
        .domain([1, 100])  // What's in the data
        .range([4, 50])  // Size in pixel


    // Draw the map
    svg2.append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("fill", "#DCEFED")
        .attr("d", d3.geoPath()
            .projection(projection)
        )
        .style("stroke", "white")
        .style("opacity", 1)
    //.............................................................................      

    // create a tooltip
    var Tooltip = d3.select("#mapidtooltip")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 1)
        .style("background-color", "white")
        .style("color", "#00B0B0")
        .style("padding", "5px")


    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function (d) {
        Tooltip.style("opacity", 1)
    }

    var mousemove = function (d) {
        Tooltip
            .html(d.name + "<br>" + "Height" + "<br>" + d.size + " meters")
            .style("left", (d3.mouse(this)[0] + 10) + "px")
            .style("top", (d3.mouse(this)[1]) + "px")
    }

    var mouseleave = function (d) {
        Tooltip.style("opacity", 0)
    }

    //.............................................................................   

    // Add circles:
    svg2
        .selectAll("myCircles")
        .data(markers)
        .enter()
        .append("circle")
        .attr("class", function (d) { return d.group })
        .attr("cx", function (d) { return projection([d.long, d.lat])[0] })
        .attr("cy", function (d) { return projection([d.long, d.lat])[1] })
        .attr("r", function (d) { return size(d.size) })
        .style("fill", function (d) { return color(d.group) })
        .attr("stroke", function (d) { return color(d.group) })
        .attr("stroke-width", 0.1)
        .attr("fill-opacity", .5)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)


    // This function is gonna change the opacity and size of selected and unselected circles
    function update() {

        // For each check box:
        d3.selectAll(".checkbox").each(function (d) {
            cb = d3.select(this);
            grp = cb.property("value")

            // If the box is check, I show the group
            if (cb.property("checked")) {
                svg2.selectAll("." + grp).transition().duration(1000).style("opacity", 1).attr("r", function (d) { return size(d.size) })

                // Otherwise I hide it
            } else {
                svg2.selectAll("." + grp).transition().duration(1000).style("opacity", 0).attr("r", 0)
            }
        })
    }

    // When a button change, I run the update function
    d3.selectAll(".checkbox").on("change", update);

    // And I initialize it at the beginning
    update()

})

