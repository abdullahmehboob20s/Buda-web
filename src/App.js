import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import ConnectWalletPage from "pages/ConnectWalletPage/ConnectWalletPage";
import MintPage from "pages/MintPage/MintPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connect-wallet" element={<ConnectWalletPage />} />
        <Route path="/mint" element={<MintPage />} />
      </Routes>
    </Router>
  );
}

export default App;
