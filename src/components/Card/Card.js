import React, { Component } from 'react';
import Fragment from 'react';
// import './Card.scss';

let leadCard = [{title:'Absolute Healthcare LLC', subtitle:'Absolute Healthcare LLC', name: 'John', surname: 'Doe', phone: '813-999-2700', note: 'Lorem ipsum dolor smit', call: 'Call, Sep 28th, 10:56am'}]

let activityCard = [{title:'Meeting', subtitle:'Absolute Healthcare LLC', name: 'John', surname: 'Doe', phone: '813-999-2700', note: 'Lorem ipsum dolor smit', date: 'Sep 28th, 10:56am'}]

let pricingCard = [{title:'Pricing Request Name', subtitle:'Absolute Healthcare LLC', name: 'John', surname: 'Doe', phone: '813-999-2700', note: 'Lorem ipsum dolor smit', call: 'Call, Sep 28th, 10:56am'}]


class Card extends Component {
    render() {
        return (
            <Fragment>
           { this.props.type === "Lead" && 
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="c-card c-card-shadow p-0">
              <div className="p-3 border-bottom"><a href="lead.html">
                  <div className="t-600-h text-truncate">{leadCard.title}</div></a>
                <div className="t-400 c-gray-400">{leadCard.subtitle}</div>
              </div>
              <div className="p-3">
                <div className="media"><img className="icon-16 mt-1 mr-3 ml-1" src="asset/image/icons/icon-user.svg" alt="user icon" />
                  <div className="media-body">
                    <div className="t-400">{leadCard.name} {leadCard.surname}</div>
                    <div className="t-400 c-gray-400">{leadCard.phone}</div>
                  </div>
                </div>
              </div>
              {'Last' && <div className="p-3 bg-gray-100">
                <div className="media"><img className="icon-16 mt-1 mr-3" src="asset/image/icons/icon-activity.svg" alt="activity icon" />
                  <div className="media-body">
                    <div className="t-400 c-gray-400">Last: {leadCard.call}</div>
                  </div>
                </div>
              </div>}
            </div>
          </div>
        }

        { this.props.type === "Activity" && 
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="c-card c-card-shadow p-0">
                    <div className="p-3 border-bottom"><a href="lead.html">
                        <div className="t-600-h text-truncate">{activityCard.title}</div></a>
                        <div className="t-400 c-gray-400">{activityCard.date}</div>
                    </div>
                    <div className="px-3 pb-0 pt-3">
                        <div className="media mb-3"><img className="icon-16 mt-1 mr-3 ml-1" src="asset/image/icons/icon-home.svg" alt="user icon" />
                        <div className="media-body">
                            <div className="t-400">{activityCard.subtitle}</div>
                        </div>
                        </div>
                        <div className="media"><img className="icon-16 mt-1 mr-3 ml-1" src="asset/image/icons/icon-user.svg" alt="user icon" />
                        <div className="media-body">
                            <div className="t-400">{activityCard.name} {activityCard.surname}</div>
                            <div className="t-400 c-gray-400">{activityCard.phone}</div>
                        </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <button className="btn btn-accent btn-block" type="button">Make complete</button>
                    </div>
                    </div>
                </div>
        }

        { this.props.type === "Pricing" &&
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
        }
        </Fragment>
        )}
}

export default Card;
