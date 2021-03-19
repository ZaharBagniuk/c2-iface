import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withNamespaces} from 'react-i18next';
import {fetchPlans} from "../../../../actions";
import Loader from "../../../loader/Loader";
import List from "./list/List";
import SearchForm from "../../../search-form/SearchForm";
import './Page.css';

const Page = props => {
    useEffect(() => {
        props.fetchPlans();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const {plans} = props;

    // TODO:2020-19-03:zbahniuk: fix loading state for the page
    if (!plans) {
        return <Loader />;
    }

    const plansList = Array.isArray(plans) && plans.length > 0 ?
        <List plans={props.plans} /> :
        <div className="empty-results">{props.t('emptyResults')}</div>;

    return (
        <div>
            <div className="plans-header">
                <h1>{props.t('plans')}</h1>
                <SearchForm />
            </div>
            {plansList}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        plans: Object.values(state.plans),
        searchTerm: state.searchTerm,
    };
};

export default withNamespaces()(connect(mapStateToProps, {fetchPlans})(Page));