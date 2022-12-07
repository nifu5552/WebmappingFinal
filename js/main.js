"use strict";
//Comment
function onEachFeature(feature, layer) {
    var value = feature.properties.Field24;
    if (value == "Well drained") {
        layer.setStyle({
            fillColor: "#dfc27d",
            stroke: false,
            fillOpacity: .9
        });
    }
    else if (value == "Excessively drained") {
        layer.setStyle({
            fillColor: "#8c510a",
            stroke: false,
            fillOpacity: .9
        });
    }
    else if (value == "Moderately well drained") {
        layer.setStyle({
            fillColor: "#f6e8c3",
            stroke: false,
            fillOpacity: .9
        });
    }
    else if (value == "Somewhat excessively drained") {
        layer.setStyle({
            fillColor: "#bf812d",
            stroke: false,
            fillOpacity: .9
        });
    }
    else if (value == "Somewhat poorly drained") {
        layer.setStyle({
            fillColor: "#80cdc1",
            stroke: false,
            fillOpacity: .9
        });
    }
    else if (value == "Poorly drained") {
        layer.setStyle({
            fillColor: "#35978f",
            stroke: false,
            fillOpacity: .9
        });
    }
    else if (value == "Very poorly drained") {
        layer.setStyle({
            fillColor: "#01665e",
            stroke: false,
            fillOpacity: .9
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
            fillColor: "#2166ac",
            stroke: false,
            fillOpacity: .9
        });
    }
    else if (value == "Mollisols") {
        layer.setStyle({
            fillColor: "#67a9cf",
            stroke: false,
            fillOpacity: .9
        });
    }
    else if (value == "Inceptisols") {
        layer.setStyle({
            fillColor: "#d1e5f0",
            stroke: false,
            fillOpacity: .9
        });
    }
    else if (value == "Ultisols") {
        layer.setStyle({
            fillColor: "#fddbc7",
            stroke: false,
            fillOpacity: .9
        });
    }
    else if (value == "Entisols") {
        layer.setStyle({
            fillColor: "#ef8a62",
            stroke: false,
            fillOpacity: .9
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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
        fillColorVar = "black",
        fillOpacityVar= "1";
    } 
    else {
        fillOpacityVar = 0,
        StrokeVar =0
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

var OpenStreetMap_Mapnik = L.tileLayer('https://api.mapbox.com/styles/v1/alva23/cl7qr2x1b000114pn2bzwliyf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx2YTIzIiwiYSI6ImNsN3FyMXd5bDAxOGszeHFuM3B1MWs2a3EifQ.n0OsLThFKSNJVZ2c-2sr7A', {
    maxZoom: 20,
    attribution: '&copy; <a href=”https://www.mapbox.com/about/maps/”>Mapbox</a> &copy; <a href=”http://www.openstreetmap.org/copyright”>OpenStreetMap</a>'
});

OpenStreetMap_Mapnik.addTo(map);

let SoilGroup = L.geoJSON(soildata, {
    onEachFeature: onEachFeature,
    //pointToLayer: pointToCircle,
});

let Order= L.geoJSON(soildata, {
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
    "OpenStreetMap": OpenStreetMap_Mapnik
};

var overlayMaps = {
    "Drainage": SoilGroup,
    "Soil Order": Order,
    "Ash" : AshGroup,
    "Beech" : BeechGroup,
    "Cherry" : CherryGroup,
    "Elm" : ElmGroup,
    "Hackberry" : HackberryGroup,
    "Hickory" : HickoryGroup,
    "Honey" : HoneyGroup,
    "Maple" : MapleGroup,
    "Oak" : OakGroup,
    "Pine" : PineGroup,
    "Sycamore" : SycamoreGroup,
    "Tulip" : TulipGroup,
    "Walnut" : WalnutGroup,
    "Other" : OtherGroup,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
//TreeGroup.addTo(map);
map.fitBounds(SoilGroup.getBounds());
