import { useContext, useEffect, useState } from 'react';

import { Popover } from '@headlessui/react';
import { Wrench } from 'phosphor-react';

import SettingsContext from '../../context/SettingsContext';

export default function SettingsButton() {
  const { setTabs, tabs } = useContext(SettingsContext);

  const [focus, setFocus] = useState<number>(0);
  const [short, setShort] = useState<number>(0);
  const [long, setLong] = useState<number>(0);

  useEffect(() => {
    if (tabs) {
      setShort(tabs.Short.time);
      setLong(tabs.Long.time);
      setFocus(tabs.Focus.time);
    }
  }, [])

  function changeSettings() {
    setTabs && setTabs({
      Focus: {
        time: focus,
      },
      Short: {
        time: short,
      },
      Long: {
        time: long,
      }
    })
  }

  return (
    <Popover>
      <Popover.Button className='flex items-center justify-center w-12 rounded-md h-12 py-2.5 text-md bg-buttonBackground font-medium leading-5 hover:bg-[#B7B7B7] '>
        <Wrench className='text-widgetBackground' weight='fill' />
      </Popover.Button>

      <Popover.Panel>
        <div className='flex mt-3 flex-col align-center bg-background shadow absolute p-5 rounded-md'>

          <label htmlFor="focus" className='flex gap-3 justify-evenly items-center m-2'>
            <p
              className='text-lg text-focusText font-bold'
            >
              Focus time:
            </p>
            <input
              id="focus"
              value={focus}
              onChange={(e) => setFocus(+(e.target.value))}
              type="input"
              className='rounded-md text-center px-2 py-1 w-10 text-lg font-bold text-focusText focus:ring-offset-0 ring-buttonBackground'
            />
          </label>

          <label htmlFor="short" className='flex gap-3 justify-evenly items-center m-2'>
            <p
              className='text-lg text-focusText font-bold'
            >
              Short time:
            </p>
            <input
              id="short"
              value={short}
              onChange={(e) => setShort(+(e.target.value))}
              type="input"
              className='rounded-md text-center px-2 py-1 w-10 text-lg font-bold text-focusText focus:ring-offset-0 ring-buttonBackground'
            />
          </label>

          <label htmlFor="long" className='flex gap-3 justify-evenly items-center m-2'>
            <p
              className='text-lg text-focusText font-bold'
            >
              Long time:
            </p>
            <input
              id="long"
              value={long}
              onChange={(e) => setLong(+(e.target.value))}
              type="input"
              className='rounded-md text-center px-2 py-1 w-10 text-lg font-bold text-focusText focus:ring-offset-0 ring-buttonBackground'
            />
          </label>

          <button
            type='button'
            className='py-2 px-4 bg-green-400 font-bold mt-2 rounded-md text-widgetBackground hover:bg-green-500 transition-colors'
            onClick={changeSettings}
          >
            Save
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
