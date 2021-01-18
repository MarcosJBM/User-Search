export interface UserProps {
  login: string;
  avatar_url: string;
  name: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
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

export interface Data {
  user?: UserProps;
  repos?: RepoProps[];
  error?: string;
}
