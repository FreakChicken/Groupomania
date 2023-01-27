import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Groupe from "../pages/Groupe/Groupe";
import UserLogin from "../pages/UserLogin/UserLogin";
import UserSignup from "../pages/UserSignup/UserSignup";

function Router() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Groupe />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/user/signup" element={<UserSignup />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default Router;
