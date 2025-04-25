import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/index';

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
