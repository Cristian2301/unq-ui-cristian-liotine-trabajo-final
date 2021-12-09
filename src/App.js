import {BrowserRouter, Routes, Route} from "react-router-dom";
import Memotest from './Memotest';
import GameEnded from './GameEnded';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Memotest />} />
        <Route path="/GameEnded" element={< GameEnded />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;