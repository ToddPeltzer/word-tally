import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./components/main";
import WordCount from "./components/wordCounts";
import Test from "./components/test";

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Main />
      <Routes>  
        <Route
          path = "/word-tally/count"
          element = {<WordCount />}
        />
        <Route
          path = "/word-tally/test"
          element = {<Test />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
