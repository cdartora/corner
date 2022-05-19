import React from 'react'
import { Tab } from '@headlessui/react'
import style from './style'

export function Timer() {
  return (
    <div className={style.container}>
      <Tab.Group>
        <Tab.List>
          <Tab className={(selected) => selected ? 'bg-slate-600' : 'bg-slate-300'}>
            Focus
          </Tab>
          <Tab>
            Break
          </Tab>
          <Tab>
            Long Break
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>25 min</Tab.Panel>
          <Tab.Panel>5 min</Tab.Panel>
          <Tab.Panel>10 min</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
