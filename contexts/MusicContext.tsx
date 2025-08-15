"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Song } from '@/constants/songs';

interface MusicContextType {
  isPlaying: boolean;
  currentTrack: Song | null;
  currentTrackIndex: number;
  tracks: Song[];
  isVisible: boolean;
  
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setTrack: (index: number) => void;
  setTracks: (tracks: Song[]) => void;
  toggleVisibility: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

interface MusicProviderProps {
  children: ReactNode;
  defaultTracks?: Song[];
  autoStart?: boolean;
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const MusicProvider: React.FC<MusicProviderProps> = ({
  children,
  defaultTracks = [],
  autoStart = false
}) => {
  const [isPlaying, setIsPlaying] = useState(autoStart);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [tracks, setTracks] = useState<Song[]>(shuffleArray(defaultTracks));
  const [isVisible, setIsVisible] = useState(true);

  const currentTrack = tracks[currentTrackIndex] || null;

  const play = () => {
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const nextTrack = () => {
    setCurrentTrackIndex(prev => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex(prev => (prev - 1 + tracks.length) % tracks.length);
  };

  const setTrack = (index: number) => {
    if (index >= 0 && index < tracks.length) {
      setCurrentTrackIndex(index);
    }
  };

  const setTracksHandler = (newTracks: Song[]) => {
    setTracks(shuffleArray(newTracks));
    setCurrentTrackIndex(0);
    setIsPlaying(false);
  };

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  const contextValue: MusicContextType = {
    isPlaying,
    currentTrack,
    currentTrackIndex,
    tracks,
    isVisible,
  
    play,
    pause,
    togglePlay,
    nextTrack,
    prevTrack,
    setTrack,
    setTracks: setTracksHandler,
    toggleVisibility
  };

  return (
    <MusicContext.Provider value={contextValue}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusicContext must be used within a MusicProvider');
  }
  return context;
};

export const useMusicPlayer = () => {
  const context = useMusicContext();
  
  return {
    isPlaying: context.isPlaying,
    currentTrack: context.currentTrack,
    play: context.play,
    pause: context.pause,
    togglePlay: context.togglePlay,
    nextTrack: context.nextTrack,
    prevTrack: context.prevTrack,
    setTrack: context.setTrack,
    tracks: context.tracks,
    setTracks: context.setTracks
  };
};

export const useMusicSettings = () => {
  const context = useMusicContext();
  
  return {
    isVisible: context.isVisible,
    toggleVisibility: context.toggleVisibility
  };
}; 