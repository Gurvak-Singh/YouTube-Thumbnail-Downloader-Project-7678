import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiImage, FiAlertTriangle } = FiIcons;

const ThumbnailCard = ({ quality, thumbnailUrl, videoId, onImageError, isError }) => {
  const downloadThumbnail = async () => {
    try {
      const response = await fetch(thumbnailUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${videoId}_${quality.key}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  if (isError) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
        <SafeIcon icon={FiAlertTriangle} className="text-gray-400 text-3xl mx-auto mb-2" />
        <p className="text-gray-500 text-sm">Not available</p>
        <p className="text-xs text-gray-400 mt-1">{quality.name}</p>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="aspect-video bg-gray-100 relative overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={`${quality.name} thumbnail`}
          className="w-full h-full object-cover"
          onError={onImageError}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
          <SafeIcon icon={FiImage} className="text-white text-2xl" />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">{quality.name}</h3>
            <p className="text-xs text-gray-500">{quality.resolution}</p>
          </div>
          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {quality.description}
          </span>
        </div>
        
        <motion.button
          onClick={downloadThumbnail}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
        >
          <SafeIcon icon={FiDownload} className="text-sm" />
          <span>Download</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ThumbnailCard;