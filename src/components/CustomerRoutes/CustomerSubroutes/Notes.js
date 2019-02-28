import React, { Component, Fragment } from 'react';
import { CustomerTabsActions } from '../../../actions/AllActions'
import Spinner from '../../../components/Spinner/Spinner'
import { observer, inject } from 'mobx-react';
import NoteCard from '../../../components/NoteCard/NoteCard';
import iconPlusWhite from '../../../resources/img/icon-plus-white.svg'

@inject('store')
@observer
class CustomerNotes extends Component {
    componentDidMount = () => {
        // CustomerTabsActions.fetchCustomerNotes(this.props.providerId)
    }

    render() {

        let notes = null;

        if (this.props.store.CustomerTabs.allNotes && this.props.store.CustomerTabs.allNotes.length > 0) {
            notes = this.props.store.CustomerTabs.allNotes.map((item, i) => {
                return (
                    <NoteCard key={item.id} {...item} />
                )
            })
        }
        return (
            <Fragment>
                <section>
                    <div class="p-2r pb-0">
                        <div class="timeline">
                            <div class="timeline-spine"></div>
                            <ul class="timeline-messages">
                                {notes ? notes
                                    : !this.props.store.CustomerTabs.notesFetched ? <Spinner />
                                        : <h4 class="text-left">The customer has no notes</h4>}
                                <button class="button-floating mainBgColor" type="button" data-toggle="modal" data-target="#activityCreateModal">
                                    <span class="icon">
                                        <img src={iconPlusWhite} />
                                    </span>
                                    <span class="text">Create note</span>
                                </button>
                            </ul>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export { CustomerNotes };