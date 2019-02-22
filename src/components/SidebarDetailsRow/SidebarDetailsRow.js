import React from 'react';

function SidebarDetailsRow ({name, value}) {
    return(
        <div className="row mb-2">
            <div className="col-4">
                <div className="c-gray-400">{name}</div>
            </div>
            <div className="col-8">
                <div className="c-gray-500">{value}</div>
            </div>
        </div>
    )
}

export default SidebarDetailsRow;