import {BrowserRouter, Routes, Route} from "react-router-dom";
import Memotest from './Memotest';
import GameOver from './GameOver';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Memotest />} />
        <Route path="/GameOver" element={< GameOver />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;