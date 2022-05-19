import React, { useEffect, useState } from 'react'

interface CountdownProps {
  time: number;
}

export function Countdown({ time }: CountdownProps) {
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = (`${time}:00`)
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  function toggle() {
    if (!hasStarted) setHasStarted(true);
    setIsActive(!isActive);
  }

  function reset() {
    setIsActive(false);
    setMinutes(time);
    setSeconds(0);
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
        if (minutes === 0 && seconds === 0) reset();
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
          className='text-sm bg-stone-500 p-2 rounded-sm'
        >
          {
            !hasStarted ? 'Start' : <>
              {
                isActive ? 'Pause' : 'Resume'
              }
            </>
          }
        </button>
      </div>
    </div>
  )
}
