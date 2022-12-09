"use strict";
//Comment
function onEachFeature(feature, layer) {
    var value = feature.properties.Field24;
    if (value == "Well drained") {
        layer.setStyle({
            fillColor: "#dfc27d",
            stroke: false,
            fillOpacity: 1
        });
    }
    else if (value == "Excessively drained") {
        layer.setStyle({
            fillColor: "#8c510a",
            stroke: false,
            fillOpacity: 1
        });
    }
    else if (value == "Moderately well drained") {
        layer.setStyle({
            fillColor: "#f6e8c3",
            stroke: false,
            fillOpacity: 1
        });
    }
    else if (value == "Somewhat excessively drained") {
        layer.setStyle({
            fillColor: "#bf812d",
            stroke: false,
            fillOpacity: 1
        });
    }
    else if (value == "Somewhat poorly drained") {
        layer.setStyle({
            fillColor: "#80cdc1",
            stroke: false,
            fillOpacity: 1
        });
    }
    else if (value == "Poorly drained") {
        layer.setStyle({
            fillColor: "#35978f",
            stroke: false,
            fillOpacity: 1
        });
    }
    else if (value == "Very poorly drained") {
        layer.setStyle({
            fillColor: "#01665e",
            stroke: false,
            fillOpacity: 1
        });
    }
    else {
        layer.setStyle({
            fillColor: "#808080",
            stroke: false,
            fillOpacity: .9
        });
    }

}

function onEachFeature2(feature, layer) {
    var value = feature.properties.Field84;
    if (value == "Alfisols") {
        layer.setStyle({
            fillColor: "#FACB67",
            stroke: false,
            fillOpacity: 1
        });
    }
    else if (value == "Mollisols") {
        layer.setStyle({
            fillColor: "#DEA75B",
            stroke: false,
            fillOpacity: 1
        });
    }
    else if (value == "Inceptisols") {
        layer.setStyle({
            fillColor: "#F5AA71",
            stroke: false,
            fillOpacity: 1
        });
    }
    else if (value == "Ultisols") {
        layer.setStyle({
            fillColor: "#DE815B",
            stroke: false,
            fillOpacity: 1
        });
    }
    else if (value == "Entisols") {
        layer.setStyle({
            fillColor: "#FA7C67",
            stroke: false,
            fillOpacity: 1
        });
    }
    else {
        layer.setStyle({
            fillColor: "#808080",
            stroke: false,
            fillOpacity: .9
        });
    }

}

function pointToCircle1(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Ash") {
        fillColorVar = "#b51d14",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle2(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Basswood") {
        fillColorVar = "#fb49b0",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle3(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Beech") {
        fillColorVar = "#A020F0 ",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle4(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Cherry") {
        fillColorVar = "#39FF14",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle5(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Elm") {
        fillColorVar = "#d163e6",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle6(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Hackberry") {
        fillColorVar = "#482796",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle7(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Hickory") {
        fillColorVar = "#443500",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle8(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Honey Locust") {
        fillColorVar = "#2d095c",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle9(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Maple") {
        fillColorVar = "#818b70",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle10(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Oak") {
        fillColorVar = "#796880",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle11(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Pine") {
        fillColorVar = "#e41a1c",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle12(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Sycamore") {
        fillColorVar = "#000080",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle13(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Tulip Poplar") {
        fillColorVar = "#bdbdbd",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle14(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Walnut") {
        fillColorVar = "#690c6e",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function pointToCircle15(feature, latlng) {

    let fillColorVar = "";
    let fillOpacityVar = 0;
    let StrokeVar = 0;

    if ((feature.properties["SP1"]) == "Other") {
        fillColorVar = "#000000",
            fillOpacityVar = "1";
    }
    else {
        fillOpacityVar = 0,
            StrokeVar = 0
        fillColorVar = "blue";
    }

    let geojsonMarkerOptions = {
        radius: 3,
        fillColor: fillColorVar,
        color: "#000",
        weight: 1,
        opacity: fillOpacityVar,
        stroke: StrokeVar,
        fillOpacity: fillOpacityVar
    };

    let circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

    return circleMarker;
}

function addPopups(feature, layer) {
    if (feature.properties && feature.properties.SP1) {
        layer.bindPopup("Tree type: " + feature.properties.SP1);
    }
}

let map = L.map('mapId');

var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

OpenStreetMap_Mapnik.addTo(map);

let SoilGroup = L.geoJSON(soildata, {
    onEachFeature: onEachFeature,
    //pointToLayer: pointToCircle,
});

let Order = L.geoJSON(soildata, {
    onEachFeature: onEachFeature2,
    //pointToLayer: pointToCircle,
});

let AshGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle1,
});

let BasswoodGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle2,
});

let BeechGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle3,
});

let CherryGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle4,
});

let ElmGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle5,
});

let HackberryGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle6,
});

let HickoryGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle7,
});

let HoneyGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle8,
});

let MapleGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle9,
});

let OakGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle10,
});

let PineGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle11,
});

let SycamoreGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle12,
});

let TulipGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle13,
});

let WalnutGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle14,
});


let OtherGroup = L.geoJSON(treedata, {
    pointToLayer: pointToCircle15,
});


//SoilGroup.addTo(map);
//Order.addTo(map);

var baseMaps = {
    "OpenStreetMap": OpenStreetMap_Mapnik,
};

var overlayMaps = {
    "Soil Order": Order,
    "Water Drainage": SoilGroup,
    "Ash": AshGroup,
    "Beech": BeechGroup,
    "Cherry": CherryGroup,
    "Elm": ElmGroup,
    "Hackberry": HackberryGroup,
    "Hickory": HickoryGroup,
    "Honey Locust": HoneyGroup,
    "Maple": MapleGroup,
    "Oak": OakGroup,
    "Pine": PineGroup,
    "Sycamore": SycamoreGroup,
    "Tulip": TulipGroup,
    "Walnut": WalnutGroup,
    "Other": OtherGroup,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
Order.addTo(map);
//TreeGroup.addTo(map);
map.fitBounds(SoilGroup.getBounds());

