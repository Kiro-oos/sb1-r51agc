import { useState, useEffect } from 'react';
import { Video } from '../types';
import { mockVideos } from '../data/mockVideos';

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setVideos(mockVideos);
  }, []);

  return videos;
}