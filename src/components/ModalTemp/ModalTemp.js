import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class ModalTemp extends Component {
    render() {
        const data = this.props;
        return (
            <div class="modal fade" id={data.id} tabindex="-1" role="dialog" style={{display: 'none'}} aria-hidden="true">
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
                                            {this.props.children}
                                        </form>
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
                                <button onClick={data.saveAction} class="btn btn-primary ml-2" data-dismiss="modal" type="button">{data.saveButtonTitle ? data.saveButtonTitle : 'Save'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalTemp;