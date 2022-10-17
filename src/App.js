import './App.css';
import {RouterProvider} from "react-router-dom";
import router from './routs/routs';
import PhoneContextProvider from './context/contaxt'
function App() {
  return (
    <PhoneContextProvider><RouterProvider router={router}/></PhoneContextProvider>

   
  );
}

export default App;
