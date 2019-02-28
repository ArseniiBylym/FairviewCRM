import React, { Component } from 'react';
import moment from 'moment';
import { withRouter } from "react-router";
import iconEdit from '../../resources/img/icon-edit.svg'

class NoteCard extends Component {

    clickCardHandler = (e) => {
      e.preventDefault();
      this.props.history.push(`/pricing-requests/${this.props.config.id}`)
    }

    render() {

      const {id, comment, providerId, createdByUserId, updatedByUserId, hidden, createdAt, updatedAt } = this.props;
        return (
            <li>
                <a href="#noteEditModal" data-toggle="modal" data-target="#noteEditModal">
                    <div class="d-flex">
                        <div class="t-600-h">Comment name</div>
                        <img class="ml-auto" src={iconEdit}/>
                    </div>
                </a>
                <div class="t-400 c-gray-400 mb-3">{moment(createdAt).format('MMM Do, hh:mma')}</div>
                <div class="t-400">{comment}</div>
            </li>
        )}
}

export default withRouter(NoteCard);
