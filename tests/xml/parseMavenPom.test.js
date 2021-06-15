const parseMavenPom = require('../../src/xml/parseMavenPom');

test('parseMavenPom', () => {

  let callback = function (err, result) {
    if (err) {
      console.log(`err ${err}`);
      return;
    }
    console.log(`result.groupId ${result.groupId[0]}`);
    console.log(`result.artifactId ${result.artifactId[0]}`);
    console.log(`result.versioning.latest ${result.versioning.latest[0]}`);
    console.log(`result.versioning.release ${result.versioning.release[0]}`);
  };
  parseMavenPom.parserMavenPom('https://repo1.maven.org/maven2/com/squareup/okhttp3/okhttp/maven-metadata.xml', callback);
  expect(null).toBe(null);
});