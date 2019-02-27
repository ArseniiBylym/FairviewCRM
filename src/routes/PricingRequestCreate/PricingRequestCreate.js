import React, { Component, Fragment } from 'react';
import './PricingRequestCreate.scss';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class PricingRequestCreate extends Component {
  

    render() {
        return (
            <Fragment>
            <section className="border-bottom">
                <div className="p-2r pb-3">
                    <div className="row">
                    <div className="col-12 text-left">
                        <h1 className="t-900-h mb-4">Create a Pricing Request</h1>
                    </div>
                    </div>
                </div>
            </section>
            <section className="border-bottom">
            <div className="p-2r">
              <div className="row">
                <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                  <div className="form-group row">
                    <label className="col-form-label col-12 col-md-4 c-gray-400" for="pricing-request-lead">Lead</label>
                    <div className="col-12 col-md-8">
                      <input className="form-control-plaintext" readonly="" value="Absolute Healthcare" id="pricing-request-lead" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-12 col-md-4 c-gray-400" for="pricing-request-name">Name</label>
                    <div className="col-12 col-md-8">
                      <input className="form-control" id="pricing-request-name" />
                    </div>
                  </div>
                  <div className="form-group row mb-0">
                    <label className="col-form-label col-12 col-md-4 c-gray-400" for="pricing-request-note">Note</label>
                    <div className="col-12 col-md-8">
                      <textarea className="form-control" rows="4" id="pricing-request-note"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="p-2r pb-0">
                <div className="row">
                <div className="col-12">
                    <div className="c-data-table">
                    <div className="c-thead">
                        <div className="c-tr">
                        <div className="c-th">
                            <div className="c-th-name">Item</div>
                            <div className="c-th-sort"><img src="asset/image/icons/icon-chevron-down.svg" /></div>
                        </div>
                        <div className="c-th">
                            <div className="c-th-name">List Price, $</div>
                            <div className="c-th-sort"></div>
                        </div>
                        <div className="c-th">
                            <div className="c-th-name">Approved price, $</div>
                            <div className="c-th-sort"></div>
                        </div>
                        <div className="c-th">
                            <div className="c-th-name">Requested price, $</div>
                            <div className="c-th-sort"></div>
                        </div>
                        <div className="c-th">
                            <div className="c-th-name">Monthly usage</div>
                            <div className="c-th-sort"></div>
                        </div>
                        <div className="c-th">
                            <div className="c-th-name">Actions</div>
                            <div className="c-th-sort"></div>
                        </div>
                        </div>
                    </div>
                    <div className="c-tbody">
                        <div className="c-tr">
                        <div className="c-td" data-heading="Item name">
                            <div className="t-400-h">71085-001-30</div>
                            <div className="c-gray-400">Lidocaine Ointment USP, 5% 30g</div>
                        </div>
                        <div className="c-td" data-heading="List Price, $">63.00</div>
                        <div className="c-td" data-heading="Approved price, $">
                            <input className="form-control mt-2 mt-md-0" type="text" value="62.00" />
                        </div>
                        <div className="c-td" data-heading="Requested price, $">
                            <input className="form-control mt-2 mt-md-0" type="text" value="63.00" />
                        </div>
                        <div className="c-td" data-heading="Monthly usage">
                            <input className="form-control mt-2 mt-md-0" type="text" value="130" />
                        </div>
                        <div className="c-td" data-heading="Actions">
                            <button className="btn btn-light btn-block mt-2 mt-md-0" type="button">Remove</button>
                        </div>
                        </div>
                        <div className="c-tr">
                        <div className="c-td" data-heading="Item name">
                            <div className="t-400-h">71085-001-30</div>
                            <div className="c-gray-400">Lidocaine Ointment USP, 5% 30g</div>
                        </div>
                        <div className="c-td" data-heading="List Price, $">63.00</div>
                        <div className="c-td" data-heading="Approved price, $">
                            <input className="form-control mt-2 mt-md-0" type="text" />
                        </div>
                        <div className="c-td" data-heading="Requested price, $">
                            <input className="form-control mt-2 mt-md-0" type="text" />
                        </div>
                        <div className="c-td" data-heading="Monthly usage">
                            <input className="form-control mt-2 mt-md-0" type="text" />
                        </div>
                        <div className="c-td" data-heading="Actions">
                            <button className="btn btn-light btn-block mt-2 mt-md-0" type="button">Remove</button>
                        </div>
                        </div>
                        <div className="c-tr">
                        <div className="c-td" data-heading="Item name">
                            <div className="t-400-h">71085-001-30</div>
                            <div className="c-gray-400">Lidocaine Ointment USP, 5% 30g</div>
                        </div>
                        <div className="c-td" data-heading="List Price, $">63.00</div>
                        <div className="c-td" data-heading="Approved price, $">
                            <input className="form-control mt-2 mt-md-0" type="text" />
                        </div>
                        <div className="c-td" data-heading="Requested price, $">
                            <input className="form-control mt-2 mt-md-0" type="text" />
                        </div>
                        <div className="c-td" data-heading="Monthly usage">
                            <input className="form-control mt-2 mt-md-0" type="text" />
                        </div>
                        <div className="c-td" data-heading="Actions">
                            <button className="btn btn-light btn-block mt-2 mt-md-0" type="button">Remove</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
                <div className="p-2r pb-0">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                            <div className="form-group row mb-0">
                                <label className="col-form-label col-12 col-md-4 c-gray-400" for="pricing-request-add-item">Add an item</label>
                                <div className="col-12 col-md-8">
                                    <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Enter item code or name" id="pricing-request-add-item" />
                                    <div className="input-group-append">
                                        <button className="btn btn-light">Add</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2r text-left">
                    <div className="row">
                        <div className="col-12">
                            <button className="btn mainBgColor">Create pricing request</button>
                        </div>
                    </div>
                </div>
            </section>
          </Fragment>
        );
    }
}

export default PricingRequestCreate;
