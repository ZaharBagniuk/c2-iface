import React from 'react';
import {withNamespaces} from 'react-i18next';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from "../../history";
import SideNav, {NavIcon, NavItem, NavText} from "@trendmicro/react-sidenav";
import './NavBar.css';

const NavBar = props => {
    const renderNavItems = () => {
      return props.pages.map(({iconClass, route}) => {
            if (!iconClass || !route) {
                return null;
            }

            return (
                <NavItem key={route} eventKey={route}>
                    <NavIcon>
                        <i className={iconClass} style={{fontSize: '1em'}} />
                    </NavIcon>
                    <NavText>
                        {props.t(route)}
                    </NavText>
                </NavItem>
            );
      });
    };

    return (
        <Router history={createBrowserHistory}>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onToggle={props.onToggle}
                        className="sidebar with-transition"
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected={props.defaultSelected}>
                            {renderNavItems()}
                        </SideNav.Nav>
                    </SideNav>
                    {props.pagesComponent}
                </React.Fragment>
            )}
            />
        </Router>
    );
};

export default withNamespaces()(NavBar);