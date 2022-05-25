import { useContext, useEffect, useState } from 'react';

import { Play, Pause } from 'phosphor-react';
import UIfx from 'uifx';

import pomodoroAlarm from '../../assets/sounds/pomodoro-alarm.mp3';
import buttonFx from '../../assets/sounds/buttonfx.mp3';

import SettingsContext from '../../context/SettingsContext';
import SettingsButton from './SettingsButton';
import { Tabs } from '../../types/tabs';

const alarm = new UIfx(pomodoroAlarm);
const click = new UIfx(buttonFx);

interface CountdownProps {
  time: number;
}

export function Countdown({ time }: CountdownProps) {
  const {
    selectedIndex,
    setSelectedIndex,
    pomodoroCount,
    setPomodoroCount
  } = useContext(SettingsContext);

  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
    if (selectedIndex === Tabs.Short || selectedIndex === Tabs.Long) {
      setSelectedIndex && setSelectedIndex(Tabs.Focus);
    } else if (selectedIndex === Tabs.Focus) {
      setSelectedIndex && setSelectedIndex(pomodoroCount < 3 ? 1 : 2);
      setPomodoroCount && setPomodoroCount(pomodoroCount === 3 ? 0 : pomodoroCount + 1);
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
    <div className='flex flex-col justify-center items-center h-full'>
      <div className='flex justify-center items-center font-semibold text-8xl mt-auto text-focusText'>
        {
          minutes < 10 && '0'
        }
        {minutes}:
        {
          seconds < 10 && '0'
        }
        {seconds}
      </div>
      <div className='flex items-center mt-auto m-1 w-[98%] gap-1'>
        <button
          onClick={toggle}
          className={
            isActive ?
              'flex items-center justify-center w-full h-12 rounded-md py-2.5 text-md font-medium leading-5 bg-red-400 p-2 px-14 hover:bg-red-500 transition-colors' :
              'flex items-center justify-center w-full h-12 rounded-md py-2.5 text-md font-medium leading-5 bg-green-400 p-2 px-14 hover:bg-green-500 transition-colors'
          }
        >
          {
            isActive ? (
              <Pause className='text-neutral-300' weight='fill' />
            ) : (
              <Play className='text-neutral-300' weight='fill' />
            )
          }
        </button>
        <SettingsButton />
      </div>
    </div >
  )
}
