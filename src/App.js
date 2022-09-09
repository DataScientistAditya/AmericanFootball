import LandingScreen from "./screens/LandingScreen/Landingscreen";
import MembseshipScreen from "./screens/MemberScreen/MembersScreen";
import PicksScreen from "./screens/Picks/PicksScreen";
import FAQScreen from "./screens/FAQScreen/FAQScreen";
import ShopScreen from "./screens/Shop/ShopScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingScreen />}></Route>
      <Route path="/membership" element={<MembseshipScreen />}></Route>
      <Route path="/picks" element={<PicksScreen />}></Route>
      <Route path="/FAQ" element={<FAQScreen />}></Route>
      <Route path="/shop" element={<ShopScreen />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
