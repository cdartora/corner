import React, { useContext, useEffect, useState } from 'react'
import { Play, Pause, Wrench } from 'phosphor-react'
import softAlarm from '../../assets/sounds/sweetalertsound4.mp3';
import doubleClick from '../../assets/sounds/onoff.mp3';
import UIfx from 'uifx';
import Settings from './Settings';
import SettingsContext from '../../context/SettingsContext';

interface CountdownProps {
  time: number;
}

const alarm = new UIfx(softAlarm)
const click = new UIfx(doubleClick)

export function Countdown({ time }: CountdownProps) {
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { selectedIndex, setSelectedIndex } = useContext(SettingsContext);

  function toggle() {
    click.play().setVolume(0.3);
    setIsActive(!isActive);
  }

  function reset() {
    setIsActive(false);
    setMinutes(time);
    setSeconds(0);
  }

  function end() {
    alarm.play().setVolume(0.3);
    if (selectedIndex === 2 || selectedIndex === 1) {
      setSelectedIndex && setSelectedIndex(0);
    } else if (selectedIndex === 0) {
      setSelectedIndex && setSelectedIndex(1);
    }
    reset();
  }

  useEffect(() => {
    let interval: NodeJS.Timer | undefined = undefined;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
        if (seconds === 0) {
          setMinutes(minutes => minutes - 1);
          setSeconds(59)
        }
        if (minutes === 0 && seconds === 0) end();
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [isActive, minutes, seconds]);

  return (
    <div className='flex flex-col justify-center align-center'>
      <div className='flex justify-center'>
        {
          minutes < 10 && '0'
        }
        {minutes}:
        {
          seconds < 10 && '0'
        }
        {seconds}
      </div>
      <div className='flex justify-center align-center mt-6 gap-2'>
        <button onClick={toggle}
          className={isActive ? 'text-sm bg-red-400 p-2 rounded-sm px-14'
            : 'text-sm bg-green-400 p-2 rounded-sm px-14'}
        >
          {
            isActive ? <Pause className='text-neutral-300' weight='fill' /> : <Play className='text-neutral-300' weight='fill' />
          }
        </button>
        <Settings />
      </div>
    </div >
  )
}
