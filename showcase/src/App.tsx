import { HashRouter, Route, Routes } from "react-router-dom";
import { Gallery } from "./Gallery";
import { AuroraInvite } from "./themes/AuroraInvite";
import { RegalInvite } from "./themes/RegalInvite";
import { SaffronInvite } from "./themes/SaffronInvite";
import { VelvetInvite } from "./themes/VelvetInvite";
import "./themes/sections-extra.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/velvet" element={<VelvetInvite />} />
        <Route path="/saffron" element={<SaffronInvite />} />
        <Route path="/regal" element={<RegalInvite />} />
        <Route path="/aurora" element={<AuroraInvite />} />
      </Routes>
    </HashRouter>
  );
}
