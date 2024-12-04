import { useParams } from 'react-router-dom';
import { mockVideos } from '../data/mockVideos';

export function Watch() {
  const { videoId } = useParams();
  const video = mockVideos.find(v => v.id === videoId);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={video.channelAvatarUrl}
            alt={video.channelName}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-3">
            <h2 className="font-semibold">{video.channelName}</h2>
            <p className="text-sm text-gray-600">
              {video.views.toLocaleString()} views
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-gray-800">{video.description}</p>
    </div>
  );
}