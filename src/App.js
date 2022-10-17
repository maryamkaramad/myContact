import './App.css';
import {RouterProvider} from "react-router-dom";
import router from './routs/routs';
function App() {
  return (
    <RouterProvider router={router}/>

   
  );
}

export default App;
