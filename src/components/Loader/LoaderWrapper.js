import React from "react";
import { Circles } from 'react-loader-spinner';

const cssStyle = {
    textAlign: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: "translate(-50%, -50%')",
    zIndex: "1052"
};

const LoaderWrapper = ({ isLoading, text }) => {
    return (
        <>
            <div className="loader-wrapper" style={cssStyle} hidden={!isLoading}>
                <h3>{text}</h3>
                <Circles color="#FF6347" height={80} width={80}></Circles>
            </div>
        </>
    )
};

export default LoaderWrapper;