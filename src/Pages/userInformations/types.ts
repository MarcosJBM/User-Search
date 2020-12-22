export interface UserProps {
  avatar_url: string;
  html_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
}

export interface RepositoriesProps {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
}
