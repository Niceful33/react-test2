import Dogs from 'pages/Dogs';
import DogDetails from 'pages/DogsDetail';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layuot';
import { Gallery } from './Gallery';
import { Subreeds } from './Subreeds';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subreeds" element={<Subreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
