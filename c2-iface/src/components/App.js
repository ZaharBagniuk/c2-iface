import React, {useState} from 'react';
import Header from "./header/Header";
import Pages from "./pages/Pages";
import NavBar from "./navbar/NavBar";
import {pageProperties as pages} from "./pages/properties";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

const App = () => {
    const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);

    return (
        <>
            <Header />
            <NavBar onToggle={setIsNavBarExpanded}
                    pagesComponent={<Pages isNavBarExpanded={isNavBarExpanded} />}
                    defaultSelected={'plans'}
                    pages={pages}
            />
        </>
    );
};

export default App;