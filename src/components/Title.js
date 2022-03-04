import React from 'react';

function Title({ children, classes }) {
    return (
        <h1 className={classes} style={{ fontFamily: 'Lobster, cursive' }}>
            {children}
        </h1>
    );
}

export default Title;
