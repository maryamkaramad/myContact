import './App.css';
import {RouterProvider} from "react-router-dom";
import router from './routs/routs';
import { Provider } from 'react-redux';
import { store } from '../src/ridux/store';
function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={router}/>

    </Provider> );
}

export default App;
