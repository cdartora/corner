import Radio from './components/Radio';
import Timer from './components/Timer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Timer />
      <Radio />
      <Footer />
    </div>
  )
}

export default App
