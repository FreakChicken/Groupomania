import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

function Router() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default Router;
