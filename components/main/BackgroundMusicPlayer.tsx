"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useMusicContext } from '@/contexts/MusicContext'

const BackgroundMusicPlayer: React.FC = () => {
  const {
    isPlaying,
    currentTrack,
    currentTrackIndex,
    tracks,
    isVisible,
    togglePlay,
    nextTrack,
    prevTrack
  } = useMusicContext()

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      nextTrack()
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentTrack, nextTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.5 
    
    if (isPlaying) {
      audio.play().catch(() => {
        // Silently handle playback errors
      })
    } else {
      audio.pause()
    }
  }, [isPlaying, currentTrack])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (!isVisible) return null

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack?.src}
        preload="metadata"
      />
      
      <motion.div
        className="music-player fixed bottom-6 right-6 z-50 select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0, width: 80, height: 80 }}
              animate={{ opacity: 1, width: 320, height: 'auto' }}
              exit={{ opacity: 0, width: 80, height: 80 }}
              transition={{ duration: 0.3 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/music-icon.png"
                    alt="Music"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-white text-sm font-tt-ramillas-light">Now Playing</span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>

              <div className="mb-3">
                <h4 className="text-white text-sm font-tt-ramillas-light truncate">{currentTrack?.title}</h4>
                <p className="text-gray-300 text-xs font-tt-ramillas-extralight truncate">{currentTrack?.artist}</p>
              </div>

              <div className="mb-3 text-center">
                <div className="text-xs text-gray-400">
                  {formatTime(currentTime)}
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mb-3">
                <button
                  onClick={prevTrack}
                  disabled={currentTrackIndex === 0}
                  className={`transition-colors ${
                    currentTrackIndex === 0 
                      ? 'text-gray-500 cursor-not-allowed' 
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                  </svg>
                </button>
                
                <button
                  onClick={togglePlay}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                >
                  {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
                
                <button
                  onClick={nextTrack}
                  disabled={currentTrackIndex >= tracks.length - 1}
                  className={`transition-colors ${
                    currentTrackIndex >= tracks.length - 1
                      ? 'text-gray-500 cursor-not-allowed' 
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                  </svg>
                </button>
              </div>


            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsExpanded(true)}
              className="nav-pulse-hover bg-white bg-opacity-10 backdrop-blur-md rounded-full w-16 h-16 border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] flex items-center justify-center hover:bg-opacity-20 transition-all duration-200"
            >
              <Image
                src="/music-icon.png"
                alt="Music"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default BackgroundMusicPlayer 