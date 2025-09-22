ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([19465392.782063, -5051006.117699, 19466443.907863, -5049689.358557]);
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
var format_Surveyaug2023_3 = new ol.format.GeoJSON();
var features_Surveyaug2023_3 = format_Surveyaug2023_3.readFeatures(json_Surveyaug2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surveyaug2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surveyaug2023_3.addFeatures(features_Surveyaug2023_3);
var lyr_Surveyaug2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surveyaug2023_3, 
                style: style_Surveyaug2023_3,
                popuplayertitle: 'Survey-aug2023',
                interactive: true,
                title: '<img src="styles/legend/Surveyaug2023_3.png" /> Survey-aug2023'
            });
var format_Future_planting_site_4 = new ol.format.GeoJSON();
var features_Future_planting_site_4 = format_Future_planting_site_4.readFeatures(json_Future_planting_site_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Future_planting_site_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Future_planting_site_4.addFeatures(features_Future_planting_site_4);
var lyr_Future_planting_site_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Future_planting_site_4, 
                style: style_Future_planting_site_4,
                popuplayertitle: 'Future_planting_site',
                interactive: true,
                title: '<img src="styles/legend/Future_planting_site_4.png" /> Future_planting_site'
            });
var format_plantsite2025_5 = new ol.format.GeoJSON();
var features_plantsite2025_5 = format_plantsite2025_5.readFeatures(json_plantsite2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plantsite2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plantsite2025_5.addFeatures(features_plantsite2025_5);
var lyr_plantsite2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plantsite2025_5, 
                style: style_plantsite2025_5,
                popuplayertitle: 'plant-site-2025',
                interactive: true,
                title: '<img src="styles/legend/plantsite2025_5.png" /> plant-site-2025'
            });
var format_Planting2023_6 = new ol.format.GeoJSON();
var features_Planting2023_6 = format_Planting2023_6.readFeatures(json_Planting2023_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planting2023_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planting2023_6.addFeatures(features_Planting2023_6);
var lyr_Planting2023_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planting2023_6, 
                style: style_Planting2023_6,
                popuplayertitle: 'Planting-2023',
                interactive: true,
                title: '<img src="styles/legend/Planting2023_6.png" /> Planting-2023'
            });
var format_Planting2025_7 = new ol.format.GeoJSON();
var features_Planting2025_7 = format_Planting2025_7.readFeatures(json_Planting2025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planting2025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planting2025_7.addFeatures(features_Planting2025_7);
var lyr_Planting2025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planting2025_7, 
                style: style_Planting2025_7,
                popuplayertitle: 'Planting-2025',
                interactive: true,
                title: '<img src="styles/legend/Planting2025_7.png" /> Planting-2025'
            });

lyr_MatiuGEsatellite_0.setVisible(true);lyr_Matiutrack_1.setVisible(true);lyr_Survey2023_2.setVisible(true);lyr_Surveyaug2023_3.setVisible(true);lyr_Future_planting_site_4.setVisible(true);lyr_plantsite2025_5.setVisible(true);lyr_Planting2023_6.setVisible(true);lyr_Planting2025_7.setVisible(true);
var layersList = [lyr_MatiuGEsatellite_0,lyr_Matiutrack_1,lyr_Survey2023_2,lyr_Surveyaug2023_3,lyr_Future_planting_site_4,lyr_plantsite2025_5,lyr_Planting2023_6,lyr_Planting2025_7];
lyr_Matiutrack_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Survey2023_2.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Ground': 'Ground', 'Environment': 'Environment', 'Suitable plantings': 'Suitable plantings', 'Notes': 'Notes', 'Photo': 'Photo', 'Photo-2': 'Photo-2', 'Site': 'Site', });
lyr_Surveyaug2023_3.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Ground': 'Ground', 'Environment': 'Environment', 'Seed source': 'Seed source', 'Suitable plants': 'Suitable plants', 'Present plants': 'Present plants', 'Notes': 'Notes', 'Comment': 'Comment', 'other': 'other', 'Photo': 'Photo', 'Photo-2': 'Photo-2', 'Site': 'Site', });
lyr_Future_planting_site_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_plantsite2025_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Planting2023_6.set('fieldAliases', {'fid': 'fid', 'Site': 'Site', 'Date planted': 'Date planted', 'Plants': 'Plants', 'Notes': 'Notes', 'Comment': 'Comment', 'Photo': 'Photo', 'Photo-2': 'Photo-2', 'Date 2': 'Date 2', 'Photo 2': 'Photo 2', 'Notes 2': 'Notes 2', 'Point': 'Point', });
lyr_Planting2025_7.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Plants': 'Plants', 'Notes': 'Notes', 'Photo': 'Photo', 'Photo-2': 'Photo-2', 'Date 2': 'Date 2', 'Photo 1a': 'Photo 1a', 'Plants 2': 'Plants 2', 'Notes 2': 'Notes 2', 'Photo 2a': 'Photo 2a', 'Point': 'Point', });
lyr_Matiutrack_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Survey2023_2.set('fieldImages', {'fid': 'Hidden', 'Date': 'TextEdit', 'Ground': 'TextEdit', 'Environment': 'TextEdit', 'Suitable plantings': 'TextEdit', 'Notes': 'TextEdit', 'Photo': 'ExternalResource', 'Photo-2': 'ExternalResource', 'Site': 'TextEdit', });
lyr_Surveyaug2023_3.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Ground': 'TextEdit', 'Environment': 'TextEdit', 'Seed source': 'TextEdit', 'Suitable plants': 'TextEdit', 'Present plants': 'TextEdit', 'Notes': 'TextEdit', 'Comment': 'TextEdit', 'other': 'TextEdit', 'Photo': 'ExternalResource', 'Photo-2': 'ExternalResource', 'Site': 'TextEdit', });
lyr_Future_planting_site_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_plantsite2025_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Planting2023_6.set('fieldImages', {'fid': 'Hidden', 'Site': 'TextEdit', 'Date planted': 'TextEdit', 'Plants': 'TextEdit', 'Notes': 'TextEdit', 'Comment': 'TextEdit', 'Photo': 'ExternalResource', 'Photo-2': 'ExternalResource', 'Date 2': 'TextEdit', 'Photo 2': 'ExternalResource', 'Notes 2': 'TextEdit', 'Point': 'Range', });
lyr_Planting2025_7.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Plants': 'TextEdit', 'Notes': 'TextEdit', 'Photo': 'ExternalResource', 'Photo-2': 'ExternalResource', 'Date 2': 'TextEdit', 'Photo 1a': 'ExternalResource', 'Plants 2': 'TextEdit', 'Notes 2': 'TextEdit', 'Photo 2a': 'ExternalResource', 'Point': 'Range', });
lyr_Matiutrack_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'inline label - always visible', 'link1_text': 'inline label - always visible', 'link1_type': 'inline label - always visible', 'link2_href': 'inline label - always visible', 'link2_text': 'header label - always visible', 'link2_type': 'inline label - visible with data', 'number': 'inline label - always visible', 'type': 'no label', });
lyr_Survey2023_2.set('fieldLabels', {'Date': 'inline label - visible with data', 'Ground': 'inline label - visible with data', 'Environment': 'inline label - visible with data', 'Suitable plantings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Photo': 'inline label - visible with data', 'Photo-2': 'no label', 'Site': 'inline label - always visible', });
lyr_Surveyaug2023_3.set('fieldLabels', {'fid': 'no label', 'Date': 'inline label - visible with data', 'Ground': 'inline label - visible with data', 'Environment': 'inline label - visible with data', 'Seed source': 'no label', 'Suitable plants': 'inline label - visible with data', 'Present plants': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Comment': 'no label', 'other': 'no label', 'Photo': 'inline label - visible with data', 'Photo-2': 'inline label - visible with data', 'Site': 'no label', });
lyr_Future_planting_site_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'header label - always visible', 'link1_text': 'inline label - always visible', 'link1_type': 'inline label - always visible', 'link2_href': 'inline label - always visible', 'link2_text': 'inline label - always visible', 'link2_type': 'inline label - always visible', 'number': 'no label', 'type': 'no label', });
lyr_plantsite2025_5.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Planting2023_6.set('fieldLabels', {'Site': 'hidden field', 'Date planted': 'header label - always visible', 'Plants': 'header label - visible with data', 'Notes': 'hidden field', 'Comment': 'hidden field', 'Photo': 'inline label - visible with data', 'Photo-2': 'inline label - visible with data', 'Date 2': 'hidden field', 'Photo 2': 'hidden field', 'Notes 2': 'hidden field', 'Point': 'no label', });
lyr_Planting2025_7.set('fieldLabels', {'fid': 'no label', 'Date': 'header label - visible with data', 'Plants': 'header label - visible with data', 'Notes': 'no label', 'Photo': 'inline label - visible with data', 'Photo-2': 'no label', 'Date 2': 'no label', 'Photo 1a': 'no label', 'Plants 2': 'inline label - always visible', 'Notes 2': 'inline label - visible with data', 'Photo 2a': 'no label', 'Point': 'no label', });
lyr_Planting2025_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});