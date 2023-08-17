
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Show from './modules/pizzas/page/ShowPizzas';
import HideAppBar from './shared/components/HideAppBar';
//import { UserPage } from './modules/user/pages/UserPage';
import { Register } from './modules/user/pages/Register';
import Login from './modules/user/pages/Login';
import { AddPizza } from './modules/pizzas/page/AddPizza';
import { UserPage } from './modules/user/pages/UserPage';


function App() {
  return (
    <>
      <HideAppBar/>
    <Routes>
      <Route path = "/register" element={<Register/>}></Route>
      <Route path = "/" element={<Show/>}></Route>
      <Route path = "/addpizza" element = {<AddPizza/>}></Route>
      <Route path = "/login" element = {<Login/>}></Route>
      <Route path = "/logg/:id" element = {<UserPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
