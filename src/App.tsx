import Radio from './components/player';
import { Timer } from './components/timer';
import SettingsProvider from './context/settingsProvider';
import RadioProvider from './context/radioProvider';

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SettingsProvider>
        <Timer />
      </SettingsProvider>

      <RadioProvider>
        <Radio />
      </RadioProvider>

      <div className='absolute bottom-1 text-focusText'>
        feito com ♥ por <a className='underline underline-offset-1' target='_blank' href="https://carlos-dartora.super.site">Carlos Dartora</a>
      </div>
    </div>
  )
}

export default App
