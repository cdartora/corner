import React, { useState } from 'react';
import RadioContext, { Context } from './RadioContext';

interface ProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: ProviderProps) {
  const [playing, setPlaying] = useState<string | null>(null);

  const changeStation = (genre: string | null) => {
    setPlaying(genre);
  };

  const contextValue: Context = {
    playing,
    changeStation,
  };

  return (
    <RadioContext.Provider value={contextValue}>
      {children}
    </ RadioContext.Provider>
  );
}

export default Provider;