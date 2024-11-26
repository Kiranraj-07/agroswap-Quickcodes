// contracts/nftMint.js
import { makeIssuerKit, AmountMath } from '@agoric/ertp';

export const start = async (zcf) => {
  const { issuer, mint, brand } = makeIssuerKit('NFTCollection', 'set');

  // Function to mint a new NFT
  const mintNFT = (name, description, owner) => {
    const nftData = harden([{ name, description, owner }]);
    const nftAmount = AmountMath.make(brand, nftData);
    const payment = mint.mintPayment(nftAmount);
    return payment;
  };

  // Provide an API for minting NFTs
  const publicFacet = zcf.makeFarZoeKit({
    mintNFT: mintNFT,
    getIssuer: () => issuer,
  });

  return harden({ creatorFacet: publicFacet, publicFacet });
};