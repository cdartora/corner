import React, { useState } from 'react';
import SettingsContext, { Context, Tabs } from './SettingsContext';

interface ProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: ProviderProps) {
  const [tabs, setTabs] = useState<Tabs>({
    Focus: {
      time: 25,
    },
    Short: {
      time: 5,
    },
    Long: {
      time: 15,
    },
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const contextValue: Context = {
    tabs,
    setTabs,
    selectedIndex,
    setSelectedIndex,
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </ SettingsContext.Provider>
  );
}

export default Provider;