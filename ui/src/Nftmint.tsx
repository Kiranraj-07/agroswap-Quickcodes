import React, { useState } from 'react';

const NFTMint: React.FC = () => {
  const [nftName, setNftName] = useState('');
  const [nftDescription, setNftDescription] = useState('');
  const [nftImage, setNftImage] = useState<File | null>(null);
  const [isMinting, setIsMinting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNftImage(e.target.files[0]);
    }
  };

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsMinting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate blockchain interaction
      setNotification({ type: 'success', message: `Your NFT "${nftName}" has been minted successfully!` });
      setNftName('');
      setNftDescription('');
      setNftImage(null);
    } catch (error) {
      setNotification({ type: 'error', message: 'There was an error while minting your NFT. Please try again.' });
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-extrabold text-center mb-6">Mint Your NFT</h2>
          {notification && (
            <div className={`mb-4 p-4 rounded-md ${notification.type === 'success' ? 'bg-green-800' : 'bg-red-800'}`}>
              {notification.message}
            </div>
          )}
          <form onSubmit={handleMint} className="space-y-6">
            <div>
              <label htmlFor="nft-name" className="block text-sm font-medium text-gray-300">
                NFT Name
              </label>
              <input
                id="nft-name"
                type="text"
                required
                value={nftName}
                onChange={(e) => setNftName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter NFT name"
              />
            </div>
            <div>
              <label htmlFor="nft-description" className="block text-sm font-medium text-gray-300">
                Description
              </label>
              <textarea
                id="nft-description"
                required
                value={nftDescription}
                onChange={(e) => setNftDescription(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Describe your NFT"
                rows={4}
              />
            </div>
            <div>
              <label htmlFor="nft-image" className="block text-sm font-medium text-gray-300">
                Upload Image
              </label>
              <input
                id="nft-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full text-sm text-gray-300
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-purple-600 file:text-white
                hover:file:bg-purple-700"
              />
            </div>
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                isMinting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isMinting}
            >
              {isMinting ? 'Minting...' : 'Mint NFT'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NFTMint;

