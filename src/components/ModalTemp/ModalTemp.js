import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class ModalTemp extends Component {
    render() {
        const data = this.props;
        return (
            <div className="modal fade" id={data.id} tabIndex="-1" role="dialog" style={{display: 'none'}} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{data.header}</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <form>
                                            {this.props.children}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {data.withRemoveButton && <div>
                                <button onClick={data.removeButtonHandler} className="btn btn-danger" type="button">{data.removeButtonTitle}</button>
                            </div>}
                            <div className="ml-auto">
                                <button onClick={data.closeAction} className="btn btn-light" type="button" data-dismiss="modal">Close</button>
                                <button onClick={data.saveAction} className="btn mainBgColor ml-2" data-dismiss="modal" type="button">{data.saveButtonTitle ? data.saveButtonTitle : 'Save'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalTemp;