import { useContext } from 'react'
import { Tab } from '@headlessui/react'
import { Countdown } from './Countdown'
import SettingsContext from '../../context/SettingsContext'
import { Circle } from 'phosphor-react';

export function Timer() {
  const { tabs, selectedIndex, setSelectedIndex, pomodoroCount } = useContext(SettingsContext);

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center gap-2 self-center mt-36'>
        {
          [1, 2, 3].map((index) => (
            <Circle weight={pomodoroCount >= index ? 'fill' : 'bold'} className='text-focusText' size={28} />
          ))
        }

      </div>
      <div className="flex flex-col container-md h-[350px] min-h-[14rem] m-5 mr-0 mt-36 min-w-[200px] w-[500px] p-0 bg-background rounded-md">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className='flex p-1 m-1 space-x-1 rounded-md bg-buttonBackground' >
            {
              tabs && Object.keys(tabs).map((key) => (
                <Tab className={({ selected }) => selected ? (
                  'w-full rounded-md py-2.5 text-md font-medium leading-5 text-focusText bg-widgetBackground shadow'
                ) : (
                  'w-full rounded-md py-2.5 text-md font-semibold leading-5 text-widgetBackground hover:bg-widgetBackground/[0.30]'
                )} >
                  {key}
                </Tab>
              ))
            }
          </Tab.List>
          <Tab.Panels className='flex justify-center align-center w-full h-full' >
            {
              tabs && Object.values(tabs).map(({ time }) => (
                <Tab.Panel className='w-full' >
                  <Countdown time={time} />
                </Tab.Panel>
              ))
            }
          </Tab.Panels>
        </Tab.Group>
      </div>
    </ div>
  )
}

