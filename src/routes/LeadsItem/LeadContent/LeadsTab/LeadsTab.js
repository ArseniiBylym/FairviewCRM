import React from 'react';

function LeadsTab (props) {
    const {id, selected, href, label} = props;
    return (
        <li class="nav-item">
            <a class={`nav-link show ${selected ? 'active': ''}`} id={id} data-toggle="tab" href={href} role="tab" aria-selected={selected}>
                {label}
            </a>
        </li>
    )
}

export default LeadsTab