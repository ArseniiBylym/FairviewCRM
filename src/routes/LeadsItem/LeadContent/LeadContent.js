import React, { Component } from 'react';

class LeadContent extends Component {
    render() {
        return (
            <div className="LeadContent page-content">
               <div className="position-sticky-0">
               <section className="border-bottom">
                    <div className="p-2r">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="t-900-h mb-0">{this.props.header}</h1>
                            </div>
                        </div>
                    </div>
                </section>
               </div>
            </div>
        );
    }
}

export default LeadContent;
