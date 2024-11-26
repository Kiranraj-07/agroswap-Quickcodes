import React from 'react';
import one from "./assets/1.jpeg" 
import two from "./assets/2.jpeg"
import three from "./assets/3.jpeg"
import four from "./assets/4.jpeg"
import five from "./assets/5.jpeg"

// Sample array of NFT image URLs
const nftImages = [
    one,two,three,four,five
];

const NFTCard: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={imageUrl} alt="NFT" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">To be announced</h3>
        <p className="text-gray-400 mb-4">Unknown</p>
        <div className="bg-purple-600 text-white text-center py-2 rounded-md font-semibold">
          Selling Soon...
        </div>
      </div>
    </div>
  );
};

const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10">NFT Marketplace</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nftImages.map((imageUrl, index) => (
            <NFTCard key={index} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;

