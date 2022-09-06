import City from "pages/city";
import Home from "pages/home";
import SetApiKey from "pages/SetApiKey";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SetApiKey />}>
        <Route index element={<Home />} />
        <Route path="/city" element={<City />}>
          <Route path="/city/:cityId" element={<City />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);