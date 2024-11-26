import { makeIssuerKit, AssetKind } from '@agoric/ertp';
import { E } from '@agoric/eventual-send';

export const start = async (zcf) => {
  // Create an IssuerKit for the NFT (Non-Fungible Token)
  const { issuer, mint, holder } = makeIssuerKit('NFT', AssetKind.SET);

  // Store minted NFTs in a map for easy lookup
  const nftMap = new Map();

  // Define the mintNFT function to mint new NFTs
  const mintNFT = (tokenId, metadata) => {
    // Each NFT has a unique token ID
    const nftAmount = mint.mintUniqueAmount([tokenId]);

    // Store metadata and associate it with the token ID
    nftMap.set(tokenId, { metadata, nftAmount });

    return { tokenId, metadata };
  };

  // Define the transferNFT function to transfer NFTs
  const transferNFT = (tokenId, recipientAddress) => {
    const nft = nftMap.get(tokenId);

    if (!nft) {
      throw new Error('NFT not found');
    }

    // Transfer the NFT to the recipient
    holder.transfer(nft.nftAmount, recipientAddress);

    return `NFT ${tokenId} transferred to ${recipientAddress}`;
  };

  // Expose the mint and transfer functions
  return harden({
    mintNFT,
    transferNFT,
    issuer,
  });
};
