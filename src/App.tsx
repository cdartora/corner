import { Timer } from './components/timer';
import Provider from './context/settingsProvider';
import style from './style';

function App() {
  return (
    <div className="container bg-neutral-100 h-full">
      <Provider>

        <Timer />
      </Provider>
    </div>
  )
}

export default App
