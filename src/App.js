import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import { Routers } from "./routes";
import { Navbar } from "./components/navbar";
import { Home } from "./Home";
import { User } from "./components/user";
import { UserDetails } from "./components/userdetails";
import MyBreadcrumbs from "./components/BreadCrumbs";
import CreateUser from "./components/createuser";
import { EditUser } from "./components/edituser";


function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar/>
      <MyBreadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/create?/*/:id" element={<CreateUser />} />
        <Route path="/user/edit/*" element={<EditUser />} />
        <Route path="/user/details?/*/:id?" element={<UserDetails />} />





      </Routes>



    </div>
  );
}

export default App;
