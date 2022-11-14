import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordCount from './components/wordCounts';
import Test from "./components/test";
import Main from "./components/main";

function App() {
  return (

    <BrowserRouter>
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
