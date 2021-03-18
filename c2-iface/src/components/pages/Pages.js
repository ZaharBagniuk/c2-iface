import React from 'react';
import {Route} from 'react-router-dom';
import PlansPage from "./plans/page/Page";
import './Pages.css';
import Dashboard from "./dashboard/Dashboard";

const Pages = ({isNavBarExpanded}) => {
    return (
        <main className="page">
            <div className={`with-transition ${isNavBarExpanded ? 'with-sidebar' : ''}`}>
                <Route path="/" exact component={() => <Dashboard />} />
                <Route exact path="/plans" component={() => <PlansPage />} />
            </div>
        </main>
    );
};

export default Pages;