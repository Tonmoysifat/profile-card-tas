import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddLinksPage from "./pages/AddLinksPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PreviewPage from "./pages/PreviewPage.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddLinksPage/>} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/preview" element={<PreviewPage/>} />
            </Routes>
        </BrowserRouter>
    )
}