import React, { Component } from 'react';
import './Leads.scss';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Leads extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="Leads">
                <section className="border-bottom">
                    <div className="p-2r pb-3">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="t-900-h mb-4">Leads</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Leads;
