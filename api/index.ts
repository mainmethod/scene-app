// TODO make this an env var
const API_HOST = `http://localhost:8008`

// Types
export interface VideoItem {
  created_on: string;
  deleted_on: null | string;
  id: number;
  name: string;
  url: string;
  vote_count: number;
}

export interface CreateVideoParams {
  url: string;
  name?: string;
}

export async function getVideos(): Promise<VideoItem[]> {
  const response = await fetch(`${API_HOST}/videos`)
  const data = await response.json()
  return data;
}

export async function createVideo({ url, name = '' }: CreateVideoParams): Promise<VideoItem> {
  const response = await fetch(
    `${API_HOST}/videos`, 
    { 
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST', 
      body: JSON.stringify({ name, url })
    }
  ) 
  const data = await response.json()
  return data;
}