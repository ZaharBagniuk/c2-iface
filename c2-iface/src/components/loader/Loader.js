import React from 'react';
import './Loader.css';

// TODO:2020-19-03:zbahniuk: align loader on the page

const Loader = () => {
  return (
      <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  );
};

export default Loader;