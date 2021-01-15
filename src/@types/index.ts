export interface UserProps {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  bio: string;
  twitter_username?: string;
  followers: number;
  following: number;
}

export interface RepoProps {
  name: string;
  description?: string;
  language?: string;
  html_url: string;
  stargazers_count?: number;
  forks_count?: number;
}
