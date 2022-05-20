import { createContext, Dispatch, SetStateAction } from "react";

export interface Tabs {
  Focus: {
    time: number;
  },
  Short: {
    time: number;
  },
  Long: {
    time: number;
  },
}

export type Context = {
  tabs: Tabs;
  setTabs?: Dispatch<SetStateAction<Tabs>>;
  selectedIndex: number;
  setSelectedIndex?: Dispatch<SetStateAction<number>>;
}

const SettingsContext = createContext<Context>({
  tabs: {
    Focus: {
      time: 25,
    },
    Short: {
      time: 5,
    },
    Long: {
      time: 10,
    },
  },
  selectedIndex: 0,
});

export default SettingsContext;