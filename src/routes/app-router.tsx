import { Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/month/:id" element={<div>Month</div>} />
    </Routes>
  );
}