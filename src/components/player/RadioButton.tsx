import { Pause, Play } from 'phosphor-react';
import React, { AudioHTMLAttributes, LegacyRef, useContext, useEffect, useRef, useState } from 'react'
import RadioContext from '../../context/RadioContext';

interface RadioButtonProps {
  genre: string;
  image: string;
  source: string;
}

export default function RadioButton({ genre, image, source }: RadioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { playing, changeStation } = useContext(RadioContext);
  const audioPlayer = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // abaixa o volume da música
    if (audioPlayer.current) {
      audioPlayer.current.volume = 0.1;
      audioPlayer.current.loop = true;
    }

    if (playing !== genre && audioPlayer.current) {
      audioPlayer.current.pause();
    }
  }, [playing])

  const onHovering = () => {
    setIsHovering(true);
  };

  const onLeaving = () => {
    setIsHovering(false);
  }

  const handleClick = () => {
    if (isPlaying) {
      audioPlayer.current?.pause();
      setIsPlaying(!isPlaying)
    } else {
      audioPlayer.current?.play();
      setIsPlaying(!isPlaying)
      changeStation && changeStation(genre);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
      className='w-16 p-2 rounded-md h-16 cursor-pointer flex items-center justify-center text-center shadow'
      onClick={handleClick}
      onMouseEnter={onHovering}
      onMouseLeave={onLeaving}
    >
      <audio ref={audioPlayer} src={source} />
      {
        isHovering ? (
          <>
            {
              isPlaying ? (
                <Pause className='text-widgetBackground' width={30} height={30} weight='fill' />
              ) : (
                <Play className='text-widgetBackground' width={30} height={30} weight='fill' />
              )
            }
          </>
        ) : <p className='text-widgetBackground text-sm font-bold'>{genre}</p>
      }
    </div>
  )
}
