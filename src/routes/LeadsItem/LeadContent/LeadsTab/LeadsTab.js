import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function LeadsTab (props) {
    const {id, selected, href, label} = props;
    return (
        <li className="nav-item">
            {/* <NavLink className={`nav-link show ${selected ? 'active': ''}`} id={id} data-toggle="tab" href={href} role="tab" aria-selected={selected}>
                {label}
            </NavLink> */}
            <NavLink className='nav-link show' to={href} >
                {label}
            </NavLink>
        </li>
    )
}

export default LeadsTab