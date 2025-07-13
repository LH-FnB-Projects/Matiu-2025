var wms_layers = [];

var lyr_MatiuGEsatellite_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Matiu-GE-satellite<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MatiuGEsatellite_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [19465322.213979, -5051218.014806, 19466492.528474, -5049319.880760]
        })
    });
var format_Matiutrack_1 = new ol.format.GeoJSON();
var features_Matiutrack_1 = format_Matiutrack_1.readFeatures(json_Matiutrack_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matiutrack_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matiutrack_1.addFeatures(features_Matiutrack_1);
var lyr_Matiutrack_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matiutrack_1, 
                style: style_Matiutrack_1,
                popuplayertitle: 'Matiu-track',
                interactive: false,
                title: '<img src="styles/legend/Matiutrack_1.png" /> Matiu-track'
            });
var format_Survey2023_2 = new ol.format.GeoJSON();
var features_Survey2023_2 = format_Survey2023_2.readFeatures(json_Survey2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Survey2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Survey2023_2.addFeatures(features_Survey2023_2);
var lyr_Survey2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Survey2023_2, 
                style: style_Survey2023_2,
                popuplayertitle: 'Survey-2023',
                interactive: true,
                title: '<img src="styles/legend/Survey2023_2.png" /> Survey-2023'
            });
var format_Future_planting_site_3 = new ol.format.GeoJSON();
var features_Future_planting_site_3 = format_Future_planting_site_3.readFeatures(json_Future_planting_site_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Future_planting_site_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Future_planting_site_3.addFeatures(features_Future_planting_site_3);
var lyr_Future_planting_site_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Future_planting_site_3, 
                style: style_Future_planting_site_3,
                popuplayertitle: 'Future_planting_site',
                interactive: false,
                title: '<img src="styles/legend/Future_planting_site_3.png" /> Future_planting_site'
            });
var format_Planting_site2025_4 = new ol.format.GeoJSON();
var features_Planting_site2025_4 = format_Planting_site2025_4.readFeatures(json_Planting_site2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planting_site2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planting_site2025_4.addFeatures(features_Planting_site2025_4);
var lyr_Planting_site2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planting_site2025_4, 
                style: style_Planting_site2025_4,
                popuplayertitle: 'Planting_site-2025',
                interactive: false,
                title: '<img src="styles/legend/Planting_site2025_4.png" /> Planting_site-2025'
            });
var format_Planting2023_5 = new ol.format.GeoJSON();
var features_Planting2023_5 = format_Planting2023_5.readFeatures(json_Planting2023_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planting2023_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planting2023_5.addFeatures(features_Planting2023_5);
var lyr_Planting2023_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planting2023_5, 
                style: style_Planting2023_5,
                popuplayertitle: 'Planting-2023',
                interactive: true,
                title: '<img src="styles/legend/Planting2023_5.png" /> Planting-2023'
            });
var format_Planting2025_6 = new ol.format.GeoJSON();
var features_Planting2025_6 = format_Planting2025_6.readFeatures(json_Planting2025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planting2025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planting2025_6.addFeatures(features_Planting2025_6);
var lyr_Planting2025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planting2025_6, 
                style: style_Planting2025_6,
                popuplayertitle: 'Planting-2025',
                interactive: true,
                title: '<img src="styles/legend/Planting2025_6.png" /> Planting-2025'
            });
var format_PlantingPaddock_7 = new ol.format.GeoJSON();
var features_PlantingPaddock_7 = format_PlantingPaddock_7.readFeatures(json_PlantingPaddock_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantingPaddock_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantingPaddock_7.addFeatures(features_PlantingPaddock_7);
var lyr_PlantingPaddock_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantingPaddock_7, 
                style: style_PlantingPaddock_7,
                popuplayertitle: 'Planting-Paddock',
                interactive: true,
                title: '<img src="styles/legend/PlantingPaddock_7.png" /> Planting-Paddock'
            });
var format_Notes_8 = new ol.format.GeoJSON();
var features_Notes_8 = format_Notes_8.readFeatures(json_Notes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Notes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Notes_8.addFeatures(features_Notes_8);
var lyr_Notes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Notes_8, 
                style: style_Notes_8,
                popuplayertitle: 'Notes',
                interactive: true,
                title: '<img src="styles/legend/Notes_8.png" /> Notes'
            });

lyr_MatiuGEsatellite_0.setVisible(true);lyr_Matiutrack_1.setVisible(true);lyr_Survey2023_2.setVisible(true);lyr_Future_planting_site_3.setVisible(true);lyr_Planting_site2025_4.setVisible(true);lyr_Planting2023_5.setVisible(true);lyr_Planting2025_6.setVisible(true);lyr_PlantingPaddock_7.setVisible(true);lyr_Notes_8.setVisible(true);
var layersList = [lyr_MatiuGEsatellite_0,lyr_Matiutrack_1,lyr_Survey2023_2,lyr_Future_planting_site_3,lyr_Planting_site2025_4,lyr_Planting2023_5,lyr_Planting2025_6,lyr_PlantingPaddock_7,lyr_Notes_8];
lyr_Matiutrack_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Survey2023_2.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Ground': 'Ground', 'Environment': 'Environment', 'Suitable plantings': 'Suitable plantings', 'Notes': 'Notes', 'Photo': 'Photo', 'Photo-2': 'Photo-2', 'Site': 'Site', });
lyr_Future_planting_site_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Planting_site2025_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Planting2023_5.set('fieldAliases', {'fid': 'fid', 'Site': 'Site', 'Date planted': 'Date planted', 'Plants': 'Plants', 'Notes': 'Notes', 'Comment': 'Comment', 'Photo': 'Photo', 'Photo-2': 'Photo-2', 'Date 2': 'Date 2', 'Photo 2': 'Photo 2', 'Notes 2': 'Notes 2', 'Point': 'Point', });
lyr_Planting2025_6.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Plants': 'Plants', 'Notes': 'Notes', 'Photo': 'Photo', 'Photo-2': 'Photo-2', 'Date 2': 'Date 2', 'Photo 1a': 'Photo 1a', 'Plants 2': 'Plants 2', 'Notes 2': 'Notes 2', 'Photo 2a': 'Photo 2a', 'Point': 'Point', });
lyr_PlantingPaddock_7.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Plants': 'Plants', 'Notes': 'Notes', 'Photo': 'Photo', 'Photo 1a': 'Photo 1a', 'Data 2': 'Data 2', 'Photo 2': 'Photo 2', 'Plants 2': 'Plants 2', 'Notes 2': 'Notes 2', 'Date 3': 'Date 3', 'Photo 3': 'Photo 3', 'Plants 3': 'Plants 3', 'Notes 3': 'Notes 3', });
lyr_Notes_8.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Notes': 'Notes', 'Comment': 'Comment', 'Photo-1': 'Photo-1', 'Photo-2': 'Photo-2', });
lyr_Matiutrack_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Survey2023_2.set('fieldImages', {'fid': 'Hidden', 'Date': 'TextEdit', 'Ground': 'TextEdit', 'Environment': 'TextEdit', 'Suitable plantings': 'TextEdit', 'Notes': 'TextEdit', 'Photo': 'ExternalResource', 'Photo-2': 'ExternalResource', 'Site': 'TextEdit', });
lyr_Future_planting_site_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Planting_site2025_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Planting2023_5.set('fieldImages', {'fid': 'Hidden', 'Site': 'TextEdit', 'Date planted': 'TextEdit', 'Plants': 'TextEdit', 'Notes': 'TextEdit', 'Comment': 'TextEdit', 'Photo': 'ExternalResource', 'Photo-2': 'ExternalResource', 'Date 2': 'TextEdit', 'Photo 2': 'TextEdit', 'Notes 2': 'TextEdit', 'Point': 'Range', });
lyr_Planting2025_6.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Plants': 'TextEdit', 'Notes': 'TextEdit', 'Photo': 'ExternalResource', 'Photo-2': 'ExternalResource', 'Date 2': 'TextEdit', 'Photo 1a': 'ExternalResource', 'Plants 2': 'TextEdit', 'Notes 2': 'TextEdit', 'Photo 2a': 'ExternalResource', 'Point': 'Range', });
lyr_PlantingPaddock_7.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Plants': 'TextEdit', 'Notes': 'TextEdit', 'Photo': 'ExternalResource', 'Photo 1a': 'TextEdit', 'Data 2': 'DateTime', 'Photo 2': 'ExternalResource', 'Plants 2': 'TextEdit', 'Notes 2': 'TextEdit', 'Date 3': 'DateTime', 'Photo 3': 'ExternalResource', 'Plants 3': 'TextEdit', 'Notes 3': 'TextEdit', });
lyr_Notes_8.set('fieldImages', {'fid': 'Hidden', 'Date': 'DateTime', 'Notes': 'TextEdit', 'Comment': 'TextEdit', 'Photo-1': 'ExternalResource', 'Photo-2': 'ExternalResource', });
lyr_Matiutrack_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Survey2023_2.set('fieldLabels', {'Date': 'inline label - visible with data', 'Ground': 'inline label - visible with data', 'Environment': 'inline label - visible with data', 'Suitable plantings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Photo': 'inline label - visible with data', 'Photo-2': 'inline label - visible with data', 'Site': 'inline label - visible with data', });
lyr_Future_planting_site_3.set('fieldLabels', {'name': 'inline label - visible with data', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Planting_site2025_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Planting2023_5.set('fieldLabels', {'Site': 'inline label - visible with data', 'Date planted': 'inline label - visible with data', 'Plants': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Comment': 'inline label - visible with data', 'Photo': 'inline label - visible with data', 'Photo-2': 'inline label - visible with data', 'Date 2': 'inline label - visible with data', 'Photo 2': 'inline label - visible with data', 'Notes 2': 'inline label - visible with data', 'Point': 'inline label - visible with data', });
lyr_Planting2025_6.set('fieldLabels', {'fid': 'no label', 'Date': 'inline label - visible with data', 'Plants': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Photo': 'inline label - visible with data', 'Photo-2': 'inline label - visible with data', 'Date 2': 'inline label - visible with data', 'Photo 1a': 'inline label - visible with data', 'Plants 2': 'inline label - visible with data', 'Notes 2': 'inline label - visible with data', 'Photo 2a': 'inline label - visible with data', 'Point': 'inline label - visible with data', });
lyr_PlantingPaddock_7.set('fieldLabels', {'fid': 'no label', 'Date': 'inline label - visible with data', 'Plants': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Photo': 'header label - visible with data', 'Photo 1a': 'header label - always visible', 'Data 2': 'header label - visible with data', 'Photo 2': 'inline label - visible with data', 'Plants 2': 'inline label - visible with data', 'Notes 2': 'inline label - visible with data', 'Date 3': 'inline label - visible with data', 'Photo 3': 'inline label - visible with data', 'Plants 3': 'header label - visible with data', 'Notes 3': 'inline label - visible with data', });
lyr_Notes_8.set('fieldLabels', {'Date': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Comment': 'inline label - always visible', 'Photo-1': 'inline label - always visible', 'Photo-2': 'inline label - always visible', });
lyr_Notes_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});