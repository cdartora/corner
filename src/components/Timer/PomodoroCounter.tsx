import { useContext } from 'react';

import SettingsContext from '../../context/SettingsContext'
import { Circle } from 'phosphor-react'

export default function PomodoroCounter() {
  const { pomodoroCount } = useContext(SettingsContext);

  return (
    <div className='flex flex-col justify-center gap-2 self-center mt-36'>
      {
        [1, 2, 3].map((index) => (
          <Circle
            weight={pomodoroCount >= index ? 'fill' : 'bold'}
            className='text-focusText'
            size={28}
          />
        ))
      }
    </div>
  )
}
