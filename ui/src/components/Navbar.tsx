import React, { useState } from 'react';
import { ConnectWalletButton } from '@agoric/react-components';
import { NetworkDropdown } from '@agoric/react-components';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <img src="/agoric.svg" alt="Agoric Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-purple-400">AgroSwap</span>
          </a>
        </div>

        <div className='cursor-pointer' onClick={()=>{
          navigate("/mint")
        }}>
          NFT MINT
        </div>
        <div className='cursor-pointer' onClick={()=>{
          navigate("/market")
        }}>
          Marketplace
        </div>
        
        <div className="flex items-center space-x-4">
          <NetworkDropdown />
          <ConnectWalletButton className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-blue-600 transition-colors" />
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;

