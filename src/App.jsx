import "./App.css";
import { Characters } from "./components/Pages/Characters/Characters";
import { Routes, Route } from "react-router-dom";
import { Locations } from "./components/Pages/Locations/Locations";
import { Suspense } from "react";
import { Episodes } from "./components/Pages/Episodes/Episodes";
import { CharacterDetails } from "./components/Pages/CharacterDetails/CharacterDetails";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations/:locationId" element={<Locations />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
      </Routes>
    </>
  );
};

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
