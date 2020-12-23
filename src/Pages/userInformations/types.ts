export interface UserProps {
  avatar_url: string;
  html_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  company: string;
  blog: string;
}

export interface RepositoriesProps {
  html_url: string;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
}
