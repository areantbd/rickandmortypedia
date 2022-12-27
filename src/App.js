import { Route, Routes } from "react-router";
import Nabvar from "./components/ui/navbar/Nabvar";
import CharactersDetailScreen from "./screens/characters/CharactersDetailScreen";
import CharactersScreen from "./screens/characters/CharactersScreen";
import HomeScreen from "./screens/HomeScreen";
import LocationDetailScreen from "./screens/locations/LocationDetailScreen";
import LocationsScreen from "./screens/locations/LocationsScreen";

function App() {
  return (
    <>
      <div>
        <Nabvar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/characters" element={<CharactersScreen />} />
          <Route
            path="/character/:characterId"
            element={<CharactersDetailScreen />}
          />
          <Route path="/locations" element={<LocationsScreen />} />
          <Route
            path="/locations/:locationName"
            element={<LocationDetailScreen />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
