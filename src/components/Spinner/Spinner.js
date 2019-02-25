import React from 'react';
import './Spinner.scss'

export default function Spinner(props) {
    const {width, height} = props;
    return (
        <div className="Spinner" style={{width: width || '200px', height: height || '200px'}}>
            <div className="loader"></div>
        </div>
    )
}