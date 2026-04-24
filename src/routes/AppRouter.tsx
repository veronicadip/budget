import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/home';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* TODO: define other paths, could be graphic demonstrations or a customizable panel to automate specific calculation between tagged spendings */}
    </Routes>
  );
}