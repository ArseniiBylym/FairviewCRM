import React, { Component } from 'react';
import iconEdit from '../../../../resources/img/icon-edit.svg'

class LeadSidebarCard extends Component {
    render() {
        return (
            <div className={`p-2r ${this.props.withBorder ? 'border-bottom' : ''} text-left`}>
                {/* <a onClick={this.props.editHandler} href="#" data-toggle="modal" data-target="#mainModal"> */}
                <a onClick={this.props.editHandler} href="#" data-toggle="modal" data-target={`#${this.props.relatedModalId}`}>
                    <div className="d-flex mb-4">
                        <div className="t-600-h text-truncate">{this.props.header}</div>
                        {this.props.withEditButton && <img className="ml-auto" src={iconEdit} />}
                    </div>
                </a>
                {this.props.children}
            </div>
        )
    }
}

export default LeadSidebarCard;

