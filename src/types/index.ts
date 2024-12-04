export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  channelName: string;
  channelAvatarUrl: string;
  views: number;
  uploadedAt: string;
  duration: string;
}

export interface Channel {
  id: string;
  name: string;
  avatarUrl: string;
  subscriberCount: number;
  isVerified: boolean;
}

export interface Comment {
  id: string;
  content: string;
  authorName: string;
  authorAvatarUrl: string;
  likes: number;
  timestamp: string;
}