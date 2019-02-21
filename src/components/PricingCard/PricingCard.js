import React, { Component } from 'react';
import Fragment from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="c-card c-card-shadow p-0">
              <div className="p-3"><a href="pricing-request.html">
                  <div className="t-600-h text-truncate">Pricing Request Name</div></a>
                <div className="t-400 c-gray-400">#999 • Sep 28th, 10:56am</div>
              </div>
              <div className="p-3 bg-gray-100">
                <div className="media"><img className="mr-2" src="asset/image/icons/icon-dot-warning.svg" alt="dot icon" />
                  <div className="media-body">
                    <div className="t-400 c-gray-400">Status: Pending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
}

export default Card;
