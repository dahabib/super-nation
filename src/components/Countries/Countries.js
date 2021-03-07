import React from 'react';

const Countries = (props) => {
    const {name} = props.country;
    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default Countries;