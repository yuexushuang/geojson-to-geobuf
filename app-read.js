const fs = require('fs');
const GeoPB = require('geopb');

// 读取GeoPB文件（即Geobuf二进制数据）
const geoPbBuffer = fs.readFileSync('output.geobuf');

// 解码GeoPB为GeoJSON
const geojson = GeoPB.toJSON(geoPbBuffer);

// 输出解码后的GeoJSON
console.log(JSON.stringify(geojson, null, 2));
