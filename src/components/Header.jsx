import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiYoutube } = FiIcons;

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="bg-red-500 p-3 rounded-full mr-4">
          <SafeIcon icon={FiYoutube} className="text-white text-3xl" />
        </div>
        <SafeIcon icon={FiDownload} className="text-gray-600 text-2xl" />
      </div>
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        YouTube Thumbnail Downloader
      </h1>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Download high-quality YouTube video thumbnails in various resolutions. 
        Simply paste the YouTube URL and get instant access to all available thumbnail sizes.
      </p>
    </motion.div>
  );
};

export default Header;