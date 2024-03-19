import React from 'react';
import AppRouter from "./AppRouter";
import ScrollToTop from "./hooks/ScrollToTop";

const App = () => {
    return (
        <>
            <AppRouter/>
            <ScrollToTop/>
        </>
    );
};

export default App;