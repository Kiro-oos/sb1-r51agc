import { Link } from 'react-router-dom';
import { HomeIcon, FireIcon, ClockIcon, BookmarkIcon, FilmIcon, HeartIcon } from '@heroicons/react/24/outline';

export function Sidebar() {
  return (
    <aside className="w-64 bg-white h-[calc(100vh-64px)] p-4 space-y-4">
      <Link to="/" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
        <HomeIcon className="w-6 h-6" />
        <span>Home</span>
      </Link>
      <Link to="/trending" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
        <FireIcon className="w-6 h-6" />
        <span>Trending</span>
      </Link>
      <Link to="/subscriptions" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
        <FilmIcon className="w-6 h-6" />
        <span>Subscriptions</span>
      </Link>
      <hr className="my-4" />
      <Link to="/library" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
        <BookmarkIcon className="w-6 h-6" />
        <span>Library</span>
      </Link>
      <Link to="/history" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
        <ClockIcon className="w-6 h-6" />
        <span>History</span>
      </Link>
      <Link to="/liked" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
        <HeartIcon className="w-6 h-6" />
        <span>Liked Videos</span>
      </Link>
    </aside>
  );
}