import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import ProductDetail from "./Pages/ProductDetail";
import { getNewProduct, getOfferProduct, getflashProduct } from "./Utils/server";
import { useEffect } from "react";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUpPage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import ProfilePage from "./Pages/ProfilePage";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productDetail/:title" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage/>}/>

        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
