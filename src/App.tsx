// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatBox from "./components/ChatBox/ChatBox";
// import { Button } from "@mui/material";
import Register from "./pages/Register/Register";

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
          <Route element={<Register />} index={true}/>
          <Route path="/buyer/signup" element={<Register />} />
          <Route path="/buyer/login" element={<Register />} />
        </Routes>
      </BrowserRouter>

      {/* <Register /> */}
      <ChatBox />
    </div>
  );
}

export default App;
