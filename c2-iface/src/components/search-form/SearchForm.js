import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {searchPlans} from "../../actions";

const SearchForm = props => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        props.searchPlans(debouncedTerm);
    }, [debouncedTerm]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="search-form form-group">
            <input
                className="form-control"
                type="text"
                autoComplete="off"
                placeholder="Please Type name or description..."
                value={term}
                onChange={e => setTerm(e.target.value)}
            />
        </div>
    );
};

export default connect(null, {searchPlans})(SearchForm);