// import { Box } from "@mui/material";
// import "./App.css";
// import Header from "./components/header/Header";
// import { Home } from "./home/Home";
// import DataProvider from "./context/dataProvider";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Detailview from "./components/details/Detailview";
// import Cart from "./components/cart/Cart";

// function App() {
//   return (
//     <>
//     <DataProvider>
//       <BrowserRouter>
//           <Header />
//         <Routes>
//           <Box mt={7}>
//             <Route path="/" element={<Home />} />
//             <Route path="/product/:id" element={<Detailview />} />
//             <Route path="/cart" element={<Cart />} />
//           </Box>
//         </Routes>
//       </BrowserRouter>
//     </DataProvider>
//     </>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import { Home } from "./home/Home";
import { Box } from '@mui/material'

//components
import DetailView from "./components/details/Detailview";
// import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from "./context/dataProvider";
import Cart from "./components/cart/Cart";
import Footer from './components/header/Footer'; 

function App() {
  return (
    // <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
            </Routes>
            <Footer/>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    // </TemplateProvider>
  );
}

export default App;
