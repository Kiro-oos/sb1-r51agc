import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Video } from '../../types';
import { formatViewCount } from '../../utils/formatters';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link to={`/watch/${video.id}`} className="group">
      <div className="relative">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full rounded-lg"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
          {video.duration}
        </span>
      </div>
      <div className="mt-3 flex">
        <img
          src={video.channelAvatarUrl}
          alt={video.channelName}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h3 className="text-base font-semibold line-clamp-2 group-hover:text-blue-600">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{video.channelName}</p>
          <p className="text-sm text-gray-600">
            {formatViewCount(video.views)} views • {formatDistanceToNow(new Date(video.uploadedAt))} ago
          </p>
        </div>
      </div>
    </Link>
  );
}