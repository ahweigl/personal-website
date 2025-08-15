export interface Song {
  id: string;
  title: string;
  artist: string;
  src: string;
  duration?: number;
}

export const backgroundSongs: Song[] = [
  {
    id: "track-1",
    title: "80's Comedown Machine",
    artist: "The Strokes",
    src: "/80's Comedown Machine.mp3",
  },
    {
    id: "track-2",
    title: "Image",
    artist: "Magdalena Bay",
    src: "/Magdalena Bay - Image.mp3",
  },
  {
    id: "track-3",
    title: "Heaven Knows I'm Miserable Now",
    artist: "The Smiths",
    src: "/The Smiths - Heaven Knows I'm Miserable Now.mp3",
  },
  {
    id: "track-4",
    title: "Selfless",
    artist: "The Strokes",
    src: "/The Strokes - Selfless (Official Audio).mp3",
  },
  {
    id: "track-5",
    title: "Obstacle 1",
    artist: "Interpol",
    src: "/Obstacle 1 (2012 Remaster).mp3",
  },
   {
    id: "track-6",
    title: "Misnomer",
    artist: "The Brook & The Bluff",
    src: "/The Brook & The Bluff - Misnomer (Official Video).mp3",
  }
];
