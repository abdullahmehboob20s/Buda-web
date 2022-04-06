import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import ConnectWalletPage from "pages/ConnectWalletPage/ConnectWalletPage";
import MintPage from "pages/MintPage/MintPage";
import TermsAndConditions from "pages/TermsAndConditions/TermsAndConditions";
import Whitepaper from "pages/Whitepaper/Whitepaper";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connect-wallet" element={<ConnectWalletPage />} />
        <Route path="/mint" element={<MintPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </Router>
  );
}

export default App;
