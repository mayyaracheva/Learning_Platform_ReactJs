import React from 'react';

const cssStyle = {
    posiiton: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    opacity: 0.8,
    zIndex: "1051"
};

const hiddenCssStyle = {
    visibility: "hidden"
};

const DimWrapper = ({isLoading}) => {
    return (
        <>
        <div style={isLoading === true ? cssStyle : hiddenCssStyle}></div>
        </>
    );
};

export default DimWrapper;

