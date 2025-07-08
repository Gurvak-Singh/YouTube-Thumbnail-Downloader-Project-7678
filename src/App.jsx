import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import URLInput from './components/URLInput';
import ThumbnailPreview from './components/ThumbnailPreview';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleURLSubmit = async (url) => {
    setIsLoading(true);
    setError('');
    setVideoData(null);

    try {
      const videoId = extractVideoId(url);
      if (!videoId) {
        throw new Error('Invalid YouTube URL');
      }

      // Generate thumbnail URLs for different qualities
      const thumbnails = {
        maxres: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        hq: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        mq: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        sd: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        default: `https://img.youtube.com/vi/${videoId}/default.jpg`
      };

      setVideoData({
        videoId,
        thumbnails,
        originalUrl: url
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Header />
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <URLInput 
              onSubmit={handleURLSubmit}
              isLoading={isLoading}
              error={error}
            />
          </div>

          {videoData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ThumbnailPreview videoData={videoData} />
            </motion.div>
          )}

          <Footer />
        </motion.div>
      </div>
    </div>
  );
}

export default App;