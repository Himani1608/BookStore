import { Box } from "@mui/material";

//components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import DetailView from "./Components/Details/DetailView";
import Cart from "./Components/Cart/Cart";

import DataProvider from "./Context/DataProvider";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 56 }}>
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path= '/product/:id' element={<DetailView />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
