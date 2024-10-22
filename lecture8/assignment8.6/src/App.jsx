import AlternateList from './AlternateList';

const App = () => {
  const namelist = ["Ari", "Jari", "Kari", "Sari", "Mari", "Sakari", "Jouko"];
  return (
    <AlternateList names={namelist} />
  )
}

export default App
