import { VideoGrid } from '../components/video/VideoGrid';
import { useVideos } from '../hooks/useVideos';

export function Home() {
  const videos = useVideos();

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Recommended</h1>
      <VideoGrid videos={videos} />
    </div>
  );
}