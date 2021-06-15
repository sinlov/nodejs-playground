const CID = require('cids');

test('show ipfs cid', () => {
  const cid = new CID('QmdHut9QE2vEp3SgtjQ4Jn741gwq1Sc3s4A9MTjEfuYWao');
  console.log('cid', cid.toString());
  // const sb = [];
  // sb.push('cid: ').push(cid.toString()).push('\n');
  // sb.push('cid.version: ').push(cid.version).push('\n');
  // sb.push('cid.codec: ').push(cid.codec).push('\n');
  // sb.push('cid.code: ').push(cid.code).push('\n');
  // sb.push('cid.multibaseName: ').push(cid.multibaseName).push('\n');
  // console.log(''.join(sb));
  console.log('cid.multihash', cid.multihash);
  expect(cid.version).toEqual(0);
  expect(cid.codec).toEqual('dag-pb');
  expect(cid.code).toEqual(112);
  expect(cid.multibaseName).toEqual('base58btc');
});
