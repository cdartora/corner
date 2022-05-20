import React, { useContext } from 'react'
import { Tab } from '@headlessui/react'
import { Countdown } from './Countdown'
import Provider from '../../context/settingsProvider'
import SettingsContext from '../../context/SettingsContext'

export function Timer() {
  const { tabs, selectedIndex, setSelectedIndex } = useContext(SettingsContext);

  return (
    <div className="container-md m-5 px-0 border-2 border-slate-800 rounded-sm">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className='flex flex-1 justify-center' >
          {
            tabs && Object.keys(tabs).map((key) => (
              <Tab className={({ selected }) => selected ? 'px-4 py-1 my-4 mx-1 bg-slate-300 rounded-sm text-slate-800' :
                'px-4 py-1 my-4 mx-1 bg-slate-800 rounded-sm text-slate-300'} >
                {key}
              </Tab>
            ))
          }
        </Tab.List>
        <Tab.Panels className='p-5 flex justify-center align-center' >
          {
            tabs && Object.values(tabs).map(({ time }) => (
              <Tab.Panel className='text-5xl'>
                <Countdown time={time} />
              </Tab.Panel>
            ))
          }
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
