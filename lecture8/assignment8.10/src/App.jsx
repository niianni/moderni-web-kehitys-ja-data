import Planets from './Planets';

const App = () => {
  const planetList = [
    { name: "Hoth", climate: "Ice" },
    { name: "Tattooine", climate: "Desert" },
    { name: "Alderaan", climate: "Temperate" },
    { name: "Mustafar", climate: "Volcanic", }
  ];

  return (
    <p>
      <Planets planetList = {planetList} />
    </p>
  )
}

export default App
