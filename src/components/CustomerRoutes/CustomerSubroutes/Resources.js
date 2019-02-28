import React, { Component, Fragment } from 'react';
import FileCard from '../../../components/FileCard/FileCard'
import Spinner from '../../../components/Spinner/Spinner'
import { observer, inject } from 'mobx-react';
import { CustomerTabsActions } from '../../../actions/AllActions'


@inject('store')
@observer
class CustomerResources extends Component {

        componentDidMount = () => {
            // CustomerTabsActions.fetchCustomerFiles(this.props.providerId)
        }
    
        render() {
    
            let files = null;
    
            if (this.props.store.CustomerTabs.allFiles && this.props.store.CustomerTabs.allFiles.length > 0) {
                files = this.props.store.CustomerTabs.allFiles.map((item, i) => {
                    return (
                        <FileCard key={item.id} {...item}/>
                    )
                })
            }
        return (
            <Fragment>
                <section class="border-bottom">
                    <div class="p-2r">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div class="custom-file">
                                    <input class="custom-file-input" id="file-upload" type="file" />
                                    <label class="custom-file-label" for="file-upload">Choose file to upload</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="p-2r pb-0">
                        <div class="row">
                            {files ? files
                                    : !this.props.store.CustomerTabs.filesFetched ? <Spinner />
                                        : <h4>The customer has no resources files</h4>}
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export { CustomerResources };