import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from "./components/main";
import WordCount from "./components/wordCounts";
import Test from "./components/test";

function App() {
  return (

    <HashRouter>
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
    </HashRouter>

  );
}

export default App;
