const request = require('request');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

const url = 'https://repo1.maven.org/maven2';
const groupId = 'com.squareup.okhttp3';
const artifactId = 'okhttp';

const metadataURl = `${url}/${groupId.replaceAll('.', '/')}/${artifactId}/maven-metadata.xml`;

console.log(`metadataURl: ${metadataURl}`);

request.get(metadataURl, function (err, request, xml) {
  if (err) {
    throw new Error('request err: ' + err);
  }
  parser.parseString(xml, function (err, parsedXml) {
    if (err) {
      throw new Error('parse err: ' + err);
    }
    console.log(`parsedXml.metadata.groupId ${parsedXml.metadata.groupId[0]}`);
    console.log(`parsedXml.metadata.artifactId ${parsedXml.metadata.artifactId[0]}`);
    console.log(`parsedXml.metadata.versioning.latest ${parsedXml.metadata.versioning[0].latest[0]}`);
    console.log(`parsedXml.metadata.versioning.release ${parsedXml.metadata.versioning[0].release[0]}`);
  });
});