import { Wrench } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { useContext, useEffect, useState } from 'react'
import SettingsContext from '../../context/SettingsContext'

export default function Settings() {
  const { setTabs, tabs } = useContext(SettingsContext);

  const [focus, setFocus] = useState<number>(0);
  const [short, setShort] = useState<number>(0);
  const [longBreak, setLongBreak] = useState<number>(0);

  useEffect(() => {
    if (tabs) {
      setShort(tabs.Short.time);
      setLongBreak(tabs.Long.time);
      setFocus(tabs.Focus.time);
    }
  }, [])

  function changeSettings() {
    console.log('salvou');

    setTabs && setTabs({
      Focus: {
        time: focus,
      },
      Short: {
        time: short,
      },
      Long: {
        time: longBreak,
      }
    })
  }

  return (
    <Popover>
      <Popover.Button className='text-sm bg-red-400 p-2 rounded-sm'>
        <Wrench className='text-neutral-300' weight='fill' />
      </Popover.Button>

      <Popover.Panel>
        <div className='flex mt-2 flex-col align-center bg-slate-300 shadow-lg border-2 border-slate-800 text-sm absolute p-5 rounded-md'>

          Focus time:
          <input
            id='focus'
            value={focus}
            onChange={(e) => setFocus(+(e.target.value))}
            type="number"
            className='rounded-sm'
          />

          Break time:
          <input
            type="text"
            value={short}
            onChange={(e) => setShort(+(e.target.value))}
            className='rounded-sm'
          />

          Long Break time:
          <input
            type="text"
            value={longBreak}
            onChange={(e) => setLongBreak(+(e.target.value))}
            className='rounded-sm'
          />

          <button
            type='button'
            className='py-1 px-4 bg-slate-800 mt-2 rounded-md text-slate-300'
            onClick={changeSettings}
          >
            Save
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
