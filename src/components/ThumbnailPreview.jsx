import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThumbnailCard from './ThumbnailCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiExternalLink } = FiIcons;

const ThumbnailPreview = ({ videoData }) => {
  const [imageErrors, setImageErrors] = useState({});

  const thumbnailQualities = [
    { key: 'maxres', name: 'Maximum Resolution', resolution: '1280x720', description: 'Best quality available' },
    { key: 'hq', name: 'High Quality', resolution: '480x360', description: 'High definition' },
    { key: 'mq', name: 'Medium Quality', resolution: '320x180', description: 'Standard quality' },
    { key: 'sd', name: 'Standard Definition', resolution: '640x480', description: 'Good quality' },
    { key: 'default', name: 'Default', resolution: '120x90', description: 'Basic thumbnail' }
  ];

  const handleImageError = (quality) => {
    setImageErrors(prev => ({ ...prev, [quality]: true }));
  };

  const availableThumbnails = thumbnailQualities.filter(
    quality => !imageErrors[quality.key]
  );

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Available Thumbnails</h2>
        <a
          href={videoData.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors"
        >
          <span>View Video</span>
          <SafeIcon icon={FiExternalLink} className="text-sm" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {thumbnailQualities.map((quality, index) => (
          <motion.div
            key={quality.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ThumbnailCard
              quality={quality}
              thumbnailUrl={videoData.thumbnails[quality.key]}
              videoId={videoData.videoId}
              onImageError={() => handleImageError(quality.key)}
              isError={imageErrors[quality.key]}
            />
          </motion.div>
        ))}
      </div>

      {availableThumbnails.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No thumbnails available for this video.</p>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-xl">
        <h3 className="font-semibold text-blue-800 mb-2">💡 Tips:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Maximum resolution thumbnails may not be available for all videos</li>
          <li>• Right-click on any thumbnail to save it directly</li>
          <li>• Use the download button for better file naming</li>
        </ul>
      </div>
    </div>
  );
};

export default ThumbnailPreview;