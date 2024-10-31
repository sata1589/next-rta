export interface Thread {
  id: number;
  user: string;
  title: string;
  createdAt: Date;
}

export interface ThreadContent {
  id: number;
  user: string;
  content: string;
  filePath: string;
  createdAt: Date;
}
