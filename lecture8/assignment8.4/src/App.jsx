import './App.css'
import Instrument from './Instrument'
import violinImg from './img/violin.png'
import tubaImg from './img/tuba.png'
import guitarImg from './img/guitar.png'


const App = () => {
  return (
    <div className='App'>
      <h1>Amazing instrument store</h1>
      <Instrument name="violin" image={violinImg} price="798,99"/>
      <Instrument name="tuba" image={tubaImg} price="689,99"/>
      <Instrument name="guitar" image={guitarImg} price="498,99"/>
    </div>
  )
}

export default App
