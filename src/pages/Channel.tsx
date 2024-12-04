import { useParams } from 'react-router-dom';
import { VideoGrid } from '../components/video/VideoGrid';
import { mockVideos } from '../data/mockVideos';

export function Channel() {
  const { channelId } = useParams();
  const channelVideos = mockVideos.filter(video => video.channelName === channelId);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
        <div className="flex items-center">
          <img
            src={channelVideos[0]?.channelAvatarUrl}
            alt={channelId}
            className="w-24 h-24 rounded-full"
          />
          <div className="ml-6">
            <h1 className="text-3xl font-bold">{channelId}</h1>
            <p className="text-gray-600">1M subscribers</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Videos</h2>
        <VideoGrid videos={channelVideos} />
      </div>
    </div>
  );
}