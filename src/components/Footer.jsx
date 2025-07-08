import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiGithub, FiInfo } = FiIcons;

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16 text-center"
    >
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex items-center justify-center mb-4">
          <SafeIcon icon={FiInfo} className="text-blue-500 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">How it works</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div className="space-y-2">
            <div className="bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center mx-auto">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <p className="font-medium">Paste YouTube URL</p>
            <p>Copy and paste any YouTube video URL</p>
          </div>
          
          <div className="space-y-2">
            <div className="bg-green-50 w-8 h-8 rounded-full flex items-center justify-center mx-auto">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <p className="font-medium">View Thumbnails</p>
            <p>See all available thumbnail qualities</p>
          </div>
          
          <div className="space-y-2">
            <div className="bg-red-50 w-8 h-8 rounded-full flex items-center justify-center mx-auto">
              <span className="text-red-600 font-bold">3</span>
            </div>
            <p className="font-medium">Download</p>
            <p>Click download to save your chosen thumbnail</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 text-gray-500">
        <span>Made with</span>
        <SafeIcon icon={FiHeart} className="text-red-500" />
        <span>for YouTube creators</span>
      </div>
      
      <p className="text-xs text-gray-400 mt-2">
        This tool works by accessing YouTube's public thumbnail URLs. No video data is stored or processed.
      </p>
    </motion.footer>
  );
};

export default Footer;