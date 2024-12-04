import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Watch } from './pages/Watch';
import { Channel } from './pages/Channel';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:videoId" element={<Watch />} />
          <Route path="/channel/:channelId" element={<Channel />} />
        </Routes>
      </Layout>
    </Router>
  );
}