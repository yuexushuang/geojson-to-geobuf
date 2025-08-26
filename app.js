const fs = require('fs');
const GeoPB = require('geopb');

// 读取GeoJSON文件
const geojson = JSON.parse(fs.readFileSync('test.geojson'));

// 将GeoJSON转换为GeoPB
const geoPbBuffer = GeoPB.parse(geojson);

// 写入GeoPB文件
fs.writeFileSync('output2.geobuf', geoPbBuffer);

console.log('GeoJSON has been converted to GeoPB.');

