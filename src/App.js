import { Route, Routes } from 'react-router';
import Nabvar from './components/ui/navbar/Nabvar';
import CharactersDetailScreen from './screens/CharactersDetailScreen';
import CharactersScreen from './screens/CharactersScreen';
import HomeScreen from './screens/HomeScreen';
import LocationsScreen from './screens/LocationsScreen';

function App() {
  return (
    <>
      <div>
      <Nabvar />
        <Routes >
          <Route path='/' element={<HomeScreen />} />  
          <Route path='/characters' element={<CharactersScreen />} />          
          <Route path='/character/:characterId' element={<CharactersDetailScreen />} />      
          <Route path='/locations' element={<LocationsScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
