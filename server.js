(async function loadIpfs () {
  const { create, globSource } = await import('ipfs-core')
  const { Keyring } = require('@polkadot/keyring');

  const node = await create({
    // ... config here
  })

  const ipfs_address_map = {
    "Singapore": "https://crustipfs.xyz",
    "Seattle": "https://crustwebsites.net",
    "Berlin": "https://ipfs-gw.decloud.foundation",
    "Shanghai": "https://gw.crustapps.net",
    "Beijing": "https://ipfs-gw.dkskcloud.com"
  }
  
  const seeds = process.argv[2] ?? "Seattle";
  
  // 2. Construct auth header
  const keyring = new Keyring();
  const pair = keyring.addFromUri(seeds);
  const sig = pair.sign(pair.address);
  const sigHex = '0x' + Buffer.from(sig).toString('hex');
  
  const authHeader = Buffer.from(`sub-${pair.address}:${sigHex}`).toString('base64');
  console.debug("AuthHeader->Created", authHeader)
  
  // IPFS Web3 Authed Gateway address
  const ipfsGateway = "https://crustwebsites.net";
  
  // 3. Create ipfs http client
  const ipfs = await create({
    url: ipfsGateway + "/api/v0",
    headers: {
      authorization: "Basic " + authHeader,
    },
  });
  console.debug("IPFS_Client->Created", ipfs)

  const { cid } = await ipfs.add(globSource(ipfs_address_map[seeds], '**/*'));
  console.debug("IPFS_Client->Added", cid)

  return node
})()


