import { Route, Routes } from 'react-router';
import CharactersScreen from './screens/CharactersScreen';
import LocationsScreen from './screens/LocationsScreen';

function App() {
  return (
    <>
      <div>
        <Routes >
          <Route path='/' element={<CharactersScreen />} />          
          <Route path='/locations' element={<LocationsScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
