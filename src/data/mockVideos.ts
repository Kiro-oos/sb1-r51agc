import { Video } from '../types';

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Building a Modern Web Application',
    description: 'Learn how to build a modern web application using React and TypeScript',
    thumbnailUrl: 'https://picsum.photos/seed/1/320/180',
    channelName: 'Tech Academy',
    channelAvatarUrl: 'https://picsum.photos/seed/tech/40/40',
    views: 150000,
    uploadedAt: '2023-12-15T10:00:00Z',
    duration: '15:30'
  },
  {
    id: '2',
    title: 'Advanced JavaScript Concepts',
    description: 'Deep dive into advanced JavaScript concepts and patterns',
    thumbnailUrl: 'https://picsum.photos/seed/2/320/180',
    channelName: 'JavaScript Mastery',
    channelAvatarUrl: 'https://picsum.photos/seed/js/40/40',
    views: 98000,
    uploadedAt: '2023-12-14T15:30:00Z',
    duration: '22:15'
  },
  {
    id: '3',
    title: 'CSS Grid Layout Tutorial',
    description: 'Master CSS Grid Layout with practical examples',
    thumbnailUrl: 'https://picsum.photos/seed/3/320/180',
    channelName: 'CSS Wizards',
    channelAvatarUrl: 'https://picsum.photos/seed/css/40/40',
    views: 75000,
    uploadedAt: '2023-12-13T08:45:00Z',
    duration: '18:45'
  }
];