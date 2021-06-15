const CID = require('cids');
// const multibase = require('multibase');
const multihashing = require('multihashing-async');
const fs = require('fs');
// const multibase = require('multibase');
// const utf8ArrayFromString = require('uint8arrays/from-string');

const CIDHash = require('ipfs-only-hash');

const asyncHashData = async function(data) {
  return CIDHash.of(data);
};

async function main() {
  // const mh = await multihashing(utf8ArrayFromString('oh, hey!'), 'sha2-256');
  //
  // const cid = Uint8Array.of(
  //   1,
  //   CID.codecs['dag-pb'],
  //   ...mh
  // );
  //
  // const cidStr = multibase.encode('base58btc', cid).toString();
  //
  // console.log('CID String (multibase included)');
  // console.log(cidStr);
  // console.log('CID in hex (multibase not included)');
  // console.log(cid.toString());


  const fileB = fs.readFileSync('package.json');
  // const bytes = new TextEncoder('utf8').encode(fileB);
  const bytes =  Uint8Array.from(fileB);

  const hash = await multihashing(bytes, 'sha2-256');
  const cid = new CID(0, 'dag-pb', hash, 'base58btc');

  console.log(cid.toString());
  console.log(cid.version);
  console.log(cid.codec);
  console.log(cid.code);
  console.log(cid.multibaseName);

  const txBytes = new TextEncoder('utf8').encode('beep boop');
  const txHash = await multihashing(txBytes, 'sha2-256');
  const txCid = new CID(1, 'dag-pb', txHash, 'base58btc');
  console.log(txCid.toString());
  // const txBytes = new TextEncoder('utf8').encode('beep boop');
  asyncHashData(txBytes).then(hash => console.log(hash));


  const file = fs.readFileSync('package.json');
  const data = Uint8Array.from(file);
  // eslint-disable-next-line jest/valid-expect-in-promise
  asyncHashData(data).then(hash => console.log(hash));
}

main()
  .catch(err => {
    console.error(err);
    // process.exit(0);
  });