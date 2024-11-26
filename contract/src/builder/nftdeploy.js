// contract/deploy.js
import { E } from '@agoric/eventual-send';

const deployContract = async (homeP) => {
  const { zoe, board } = await homeP;

  // Bundle the NFT minting contract
  const bundle = await E(zoe).bundleSource('./contracts/nftMint.js');
  const bundleId = await E(zoe).installBundle(bundle);

  // Start the contract instance
  const { publicFacet } = await E(zoe).startInstance(bundleId);

  // Save the publicFacet to the board for later interaction
  const publicFacetId = await E(board).getId(publicFacet);
  console.log('NFT Minting Contract deployed! Public Facet ID:', publicFacetId);
};

export default deployContract;