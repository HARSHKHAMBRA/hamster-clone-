import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

// Import your components
import Profile from './Pages/Profile';
import Game from './Pages/Game';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/game" element={<Game />} />
      {/* Add more routes here */}
    </Routes>
  </Router>
);

export default App;
