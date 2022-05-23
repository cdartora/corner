import { createContext, Dispatch, SetStateAction } from "react";

export type Context = {
  playing: string | null;
  changeStation?: (genre: string) => void;
}

const RadioContext = createContext<Context>({ playing: '' });

export default RadioContext;