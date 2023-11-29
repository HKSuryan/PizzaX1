
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Show from './modules/pizzas/page/ShowPizzas';
import HideAppBar from './shared/components/HideAppBar';
//import { UserPage } from './modules/user/pages/UserPage';
import { Register } from './modules/user/pages/Register';
import Login from './modules/user/pages/Login';
import { AddPizza } from './modules/pizzas/page/AddPizza';
import { UserPage } from './modules/user/pages/UserPage';
import Login1 from './modules/user/pages/Login1';
import Register1 from './modules/user/pages/Register1';
import AddPizza1 from './modules/pizzas/page/AddPizza1';



function App() {
  return (
    <>
      <HideAppBar/>
    <Routes>
      <Route path = "/register" element={<Register1/>}></Route>
      <Route path = "/" element={<Show/>}></Route>
      <Route path = "/addpizza" element = {<AddPizza1/>}></Route>
      <Route path = "/login" element = {<Login1/>}></Route>
      <Route path = "/logg/:id" element = {<UserPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
