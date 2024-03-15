import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";

const routes = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/rea',
        element: <SignInPage isRea={true}/>
    },
    {
        path: '/other',
        element: <SignInPage isRea={false}/>
    },
]
const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(el =>
                    <Route path={el.path} element={el.element} key={el.path}/>
                )
            }
        </Routes>
    );
};

export default AppRouter;