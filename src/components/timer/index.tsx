import React from 'react'
import { Tab } from '@headlessui/react'
import { Countdown } from './Countdown'
import style from './style'

const tabs = {
  Focus: {
    time: 25,
  },
  Short: {
    time: 1,
  },
  Long: {
    time: 15,
  }
}

export function Timer() {
  return (
    <div className="container-md m-5 px-0 border-2 border-slate-800 rounded-sm">
      <Tab.Group>
        <Tab.List className='flex flex-1 justify-center' >
          {
            Object.keys(tabs).map((key) => (
              <Tab className={({ selected }) => selected ? 'px-4 py-1 my-4 mx-1 bg-slate-300 rounded-sm text-slate-800' :
                'px-4 py-1 my-4 mx-1 bg-slate-800 rounded-sm text-slate-300'} >
                {key}
              </Tab>
            ))
          }
        </Tab.List>
        <Tab.Panels className='p-5 flex justify-center align-center' >
          {
            Object.values(tabs).map(({ time }) => (
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
