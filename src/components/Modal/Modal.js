import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Modal extends Component {
    render() {

        const data = this.props.store.Modal;

        return (
            <div class="modal fade" id="mainModal" tabindex="-1" role="dialog" style={{display: 'none'}} aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{data.header}</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12">
                                        <form>
                                            {data.content}
                                        </form>
                                        {/* <form>
                                            <div class="form-group">
                                                <label for="l-details-edit-dba">DBA</label>
                                                <input class="form-control" type="text" id="l-details-edit-dba" />
                                            </div>
                                            <div class="form-group">
                                                <label for="l-details-edit-legal-business-name">Legal Business Name</label>
                                                <input class="form-control" type="text" id="l-details-edit-legal-business-name" />
                                            </div>
                                            <div class="form-group">
                                                <label for="l-details-edit-business-group">Budiness Group</label>
                                                <select class="form-control" id="l-details-edit-business-group">
                                                    <option value="1" selected="">Group Name 1</option>
                                                    <option value="2">Group Name 2</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-light" type="button">Manage Business Groups</button>
                                            </div>
                                            <div class="form-group">
                                                <label for="l-details-edit-business-type">Type</label>
                                                <select class="form-control" id="l-details-edit-business-type">
                                                    <option value="chain" selected="">Chain</option>
                                                    <option value="distrib">Distributor</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="l-details-edit-licence-type">Licence Type</label>
                                                <select class="form-control" id="l-details-edit-licence-type">
                                                    <option value="precursor" selected="">Precursor</option>
                                                    <option value="dea">DEA</option>
                                                </select>
                                            </div>
                                        </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            {data.withRemoveButton && <div>
                                <button onClick={data.removeButtonHandler} class="btn btn-danger" type="button">{data.removeButtonTitle}</button>
                            </div>}
                            <div className="ml-auto">
                                <button class="btn btn-light" type="button" data-dismiss="modal">Close</button>
                                <button class="btn btn-primary ml-2" type="button">{data.saveButtonTitle}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;