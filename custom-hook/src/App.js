import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Users from './Users';
import Posts from './Posts';
import Storage from './Storage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
