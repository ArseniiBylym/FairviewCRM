import React, { Component } from 'react';
import './PricingRequests.scss';

class PricingRequests extends Component {
    render() {
        return (
            <div className="PricingRequests">
                <section className="border-bottom">
                    <div className="p-2r pb-3">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="t-900-h mb-4">Pricing requests</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PricingRequests;
