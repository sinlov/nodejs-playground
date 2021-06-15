// const async = require('async');
const request = require('request');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

const parserMavenPom = function (url, callback) {
  request.get(url, function (err, request, xml) {
    if (err) {
      // throw new Error('request err: ' + err);
      callback(new Error('request err: ' + err), null);
      return;
    }
    parser.parseString(xml, function (err, parsedXml) {
      if (err) {
        // throw new Error('parse err: ' + err);
        callback(new Error('parse err: ' + err), null);
        return;
      }
      callback(null, parsedXml.metadata);
    });
  });
};


module.exports = {
  parserMavenPom
};
