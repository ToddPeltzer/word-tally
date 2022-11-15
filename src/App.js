import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Main from "./components/main";
import WordCount from "./components/wordCounts";
import Test from "./components/test";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>  
        <Route
          path = "/"
          element = {<Main />}
        />
        <Route
          path = "/count"
          element = {<WordCount />}
        />
        <Route
          path = "/test"
          element = {<Test />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
