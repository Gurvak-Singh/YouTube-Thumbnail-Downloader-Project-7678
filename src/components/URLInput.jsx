import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiLoader, FiAlertCircle } = FiIcons;

const URLInput = ({ onSubmit, isLoading, error }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube URL here (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
            className="w-full px-4 py-4 pr-12 text-lg border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            disabled={isLoading}
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {isLoading ? (
              <SafeIcon icon={FiLoader} className="text-gray-400 animate-spin" />
            ) : (
              <SafeIcon icon={FiSearch} className="text-gray-400" />
            )}
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isLoading || !url.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-red-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Getting Thumbnails...' : 'Get Thumbnails'}
        </motion.button>
      </form>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl"
        >
          <SafeIcon icon={FiAlertCircle} className="flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}

      <div className="text-sm text-gray-500 space-y-2">
        <p className="font-medium">Supported formats:</p>
        <ul className="space-y-1 ml-4">
          <li>• https://www.youtube.com/watch?v=VIDEO_ID</li>
          <li>• https://youtu.be/VIDEO_ID</li>
          <li>• https://www.youtube.com/embed/VIDEO_ID</li>
        </ul>
      </div>
    </div>
  );
};

export default URLInput;