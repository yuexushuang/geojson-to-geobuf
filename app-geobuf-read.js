const fs = require('fs');
const geobuf = require('geobuf');

async function convertGeobufToGeoJSON() {
    try {
        // 动态导入ES模块
        const { default: Pbf } = await import('pbf');
        // 读取Geobuf文件
        const geobufData = fs.readFileSync('output.geobuf');
        // 转换为GeoJSON
        const geojson = geobuf.decode(new Pbf(geobufData));
        // 输出GeoJSON
        console.log(JSON.stringify(geojson, null, 2));

    } catch (error) {
        console.error('转换过程中出错:', error);
    }
}

convertGeobufToGeoJSON();