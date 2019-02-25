import React, { Component } from 'react';
import Fragment from 'react';
import dotIcon from '../../resources/img/icon-dot-danger.svg'
import moment from 'moment';

class Card extends Component {
    render() {

      const {cardcode, complete, createdAt, createdByUser, createdByUserId, id, note, provider, providerId, updatedAt} = this.props.config;
        return (
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="c-card c-card-shadow p-0">
              <div className="p-3"><a href="pricing-request.html">
                  <div className="t-600-h text-truncate">{provider.legalBusName}</div></a>
                <div className="t-400 c-gray-400">#{id}, {moment(updatedAt).format('MMM, Do, hha')}</div>
              </div>
              <div className="p-3 bg-gray-100">
                <div className="media"><img className="mr-2" src={dotIcon} alt="dot icon" />
                  <div className="media-body">
                    <div className="t-400 c-gray-400">Status: {complete ? 'Complete': 'Pending'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
}

export default Card;
