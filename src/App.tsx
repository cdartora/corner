import { Timer } from './components/timer';
import Provider from './context/settingsProvider';

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Provider>
        <Timer />
      </Provider>
      <div className='absolute bottom-1 text-focusText'>
        feito com ♥ por <a className='underline underline-offset-1' target='_blank' href="https://carlos-dartora.super.site">Carlos Dartora</a>
      </div>
    </div>
  )
}

export default App
