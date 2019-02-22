import React, { Component } from 'react';
import iconEdit from '../../../../resources/img/icon-edit.svg'

class LeadSidebarCard extends Component {
    render() {
        return (
            <div className="p-2r border-bottom">
                <a href="#" data-toggle="modal" data-target="#leadDetailsEditModal">
                    <div className="d-flex mb-4">
                        <div className="t-600-h text-truncate">{this.props.header}</div>
                        <img className="ml-auto" src={iconEdit} />
                    </div>
                </a>
                {this.props.children}
            </div>
        )
    }
}

export default LeadSidebarCard;

