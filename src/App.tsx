// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Button } from "@mui/material";
import Cart from "./pages/Cart/Cart";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductNew from "./pages/ProductNew/ProductNew";
import Register from "./pages/Register/Register";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDukSe4cjaYIbabhVBLXEAH2dpHbLIoJvc",
//   authDomain: "shopee-clone-9a3c4.firebaseapp.com",
//   projectId: "shopee-clone-9a3c4",
//   storageBucket: "shopee-clone-9a3c4.appspot.com",
//   messagingSenderId: "233640952450",
//   appId: "1:233640952450:web:2e65b02a4cdaaf75506a9b",
//   measurementId: "G-PJX5DYRTS6",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + + Typescript + MUI 5</h1>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} index={true} />
          <Route path="/shopee" element={<HomePage />} />
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/portal/product/new" element={<ProductNew />} />
          <Route path="/buyer/signup" element={<Register />} />
          <Route path="/buyer/login" element={<Register />} />
        </Routes>
      </BrowserRouter>

      {/* <ChatBox /> */}
    </div>
  );
}

export default App;
