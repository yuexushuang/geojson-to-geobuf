const fs = require('fs');
const geobuf = require('geobuf');

async function convertGeoJSONToGeobuf() {
  try {
    // 动态导入ES模块
    const { default: Pbf } = await import('pbf');    
    // 读取GeoJSON文件
    const geojson = JSON.parse(fs.readFileSync('test.geojson'));
    // 转换为Geobuf
    const buffer = geobuf.encode(geojson, new Pbf());
    // 转换为UInt8Array并保存到文件
    const uint8Array = new Uint8Array(buffer);
    fs.writeFileSync('output.geobuf', uint8Array);
    console.log('Geobuf已成功保存为output.geobuf');
  } catch (error) {
    console.error('转换过程中出错:', error);
  }
}

convertGeoJSONToGeobuf();