import React, { useEffect, useState } from 'react'
import { Play, Pause } from 'phosphor-react'
import softAlarm from '../../assets/sounds/sweetalertsound4.mp3';
import UIfx from 'uifx';

interface CountdownProps {
  time: number;
}

const alarm = new UIfx(softAlarm, {
  volume: 0.2
})

export function Countdown({ time }: CountdownProps) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(2);
  const [timer, setTimer] = (`${time}:00`)
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isRainingConfetti, setIsRainingConfetti] = useState(false);

  function toggle() {
    if (!hasStarted) setHasStarted(true);
    setIsActive(!isActive);
  }

  function reset() {
    setIsActive(false);
    setMinutes(time);
    setSeconds(0);
  }

  function end() {
    setIsRainingConfetti(true);
    alarm.play();
    reset();
  }

  useEffect(() => {
    let interval: number | undefined = undefined;

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
      <div>
        {
          minutes < 10 && '0'
        }
        {minutes}:
        {
          seconds < 10 && '0'
        }
        {seconds}
      </div>
      <div className='flex justify-center align-center mt-6'>
        <button onClick={toggle}
          className={isActive ? 'text-sm bg-red-400 p-2 rounded-sm px-14'
            : 'text-sm bg-green-400 p-2 rounded-sm px-14'}
        >
          {
            isActive ? <Pause className='text-neutral-300' weight='fill' /> : <Play className='text-neutral-300' weight='fill' />
          }
        </button>
      </div>
    </div>
  )
}
