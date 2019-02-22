import React from 'react';
import iconUserActive from '../../resources/img/icon-user-active.svg'
import iconUser from '../../resources/img/icon-user.svg'

function SidebarContactPersonItem ({isActive, name, position, phone}) {
    return (
        <div class="media mb-3">
            <img class="icon-16 mt-1 mr-3 ml-1" src={isActive ? iconUserActive : iconUser} alt="user icon"/>
            <div class="media-body">
                <a class="c-gray-500" href="#" data-toggle="modal" data-target="#leadContactPersonEditModal">
                    <div class="t-400">{name}</div>
                </a>
                <div class="t-400 c-gray-400">{position}</div>
                <div class="t-400">{phone}</div>
            </div>
        </div>
    )
}

export default SidebarContactPersonItem;