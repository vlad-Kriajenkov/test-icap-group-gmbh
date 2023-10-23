import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { Private, Public } from 'hooks/Route';
const Authorization = React.lazy(
  () => import('page/AuthNavigation/Authorization/Authorization')
);
const Home = React.lazy(() => import('page/Home/Home'));
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Public component={<Authorization />} redirectTo="/home" />}
      ></Route>
      <Route
        path="/home"
        element={<Private component={<Home />} redirectTo="/" />}
      ></Route>
    </Routes>
  );
}

export default App;
