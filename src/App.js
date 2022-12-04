import { Route, Routes } from 'react-router';
import CharactersScreen from './screens/CharactersScreen';

function App() {
  return (
    <>
      <div>
        <Routes >
          <Route path='/' element={<CharactersScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
