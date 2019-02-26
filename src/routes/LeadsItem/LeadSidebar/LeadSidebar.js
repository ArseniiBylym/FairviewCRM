import React, { Component, Fragment } from 'react';
import LeadSidebarCard from './LeadSidebarCard/LeadSidebarCard';
import SidebarDetailsRow from '../../../components/SidebarDetailsRow/SidebarDetailsRow';
import SidebarContactPersonItem from '../../../components/SidebarContactPersonItem/SidebarContactPersonItem';
import { ModalActions, LeadsActions } from '../../../actions/AllActions'
import { inject, observer } from 'mobx-react';
import ModalTemp from '../../../components/ModalTemp/ModalTemp'
import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import Checkbox from '../../../components/Form/Checkbox';


@inject('store')
@observer
class LeadSidebar extends Component {

    state = {
        createPersonContact: {
            firstName: '',
            lastName:'',
            middleName: '',
            title: '',
            officePhone: '',
            fax: '',
            emailAddress: ''
        }
    }

    editDbaHandler = e => {
        LeadsActions.editCurrentLead('dba', e.target.value)
    }

    editDetailsData = () => {
        ModalActions.configModalData({
            header: 'Edit details',
            withRemoveButton: false,
            content:<Fragment>
                        <Input config={{
                            label: 'DBA', 
                            value: this.props.store.Leads.currentLead.dba,
                            onChange: this.editDbaHandler
                        }}/>
                    </Fragment>
        })
    }



    render() {
        const {legalBusName, license, plAddress1, plCity, plState, plZipcode, plPhone, plFax, plEmail, contactLName, contactFName, contactMInitial, 
            contactTitle, contactPhone, contactExt, contactEmail, salesReps } = this.props.config;
        return (
            <div className="LeadSidebar page-sidebar">
                <div className="position-sticky-0">
                    <LeadSidebarCard withBorder={true} withEditButton={true} relatedModalId="detailsModal" editHandler={this.editDetailsData} header='Details'>
                        <SidebarDetailsRow name='Legal' value={legalBusName} />
                        <SidebarDetailsRow name='Rep' value={null} />
                        <SidebarDetailsRow name='Group' value={null} />
                        <SidebarDetailsRow name='Type' value={null} />
                        <SidebarDetailsRow name='License' value={license} />
                    </LeadSidebarCard>
                    <LeadSidebarCard withBorder={true} withEditButton={true} relatedModalId="addressModal" header='Address'>
                        <div className="row">
                            <div className="col-12">
                                <div className="c-gray-500">{`${plAddress1}, ${plCity}, ${plState}, ${plZipcode}, ${plPhone}, ${plFax}, ${plEmail}`}</div>
                            </div>
                        </div>
                    </LeadSidebarCard>
                    <LeadSidebarCard withBorder={true} withEditButton={true} relatedModalId="contactsModal" header='Contact'>
                        <div className="row">
                            <div className="col-12">
                                <div className="c-gray-500">{`P. ${contactPhone} (ext. ${contactExt})`}</div>
                                <div className="c-gray-500">{`F: ${plFax}`}</div>
                                <div className="c-gray-500">{`E: ${contactEmail}`}</div>
                            </div>
                        </div>
                    </LeadSidebarCard>
                    <LeadSidebarCard withBorder={false} withEditButton={false} header='Contact persons'>
                        <div className="col-12 mb-4">
                            {salesReps.map(item => (
                                <SidebarContactPersonItem key={item.id} isActive={true} name={item.name} position={null} phone={null} />
                            ))}
                            
                        </div>
                        <div className="col-12">
                            <div className="px-3">
                                <div className="mx-3">
                                    <button className="btn mainBgColor btn-block" type="button" data-toggle="modal" data-target="#createPersonContacts">Add a Contact</button>
                                </div>
                            </div>
                        </div>
                    </LeadSidebarCard>
                </div>
                <ModalTemp header="Edit details" id="detailsModal" withRemoveButton={false}>
                    <Input label='DBA' value={this.props.store.Leads.currentLead.dba}  />
                    <Input label='Legal Business Name' value={this.props.store.Leads.currentLead.legalBusName}  />
                    <Input label='Business Group' value={``}  />
                    <div className="form-group">
                      <button className="btn btn-light" type="button">Manage Business Groups</button>
                    </div>
                    <Select label='Type' 
                        options={[
                            {value: 'Chain', selected: true},
                            {value: 'Distributor', selected: false},
                        ]} 
                    />
                     <Select label='Licence Type' 
                        options={[
                            {value: 'Precursor', selected: true},
                            {value: 'DEA', selected: false},
                        ]} 
                    />
                </ModalTemp>
                <ModalTemp header="Edit address" id="addressModal" withRemoveButton={false}>
                    <Input label='Address 1' value={this.props.store.Leads.currentLead.plAddress1} />
                    <Input label='Address 2' value={this.props.store.Leads.currentLead.plAddress2} />
                    <Input label='City' value={this.props.store.Leads.currentLead.plCity} />
                    <Input label='State' value={this.props.store.Leads.currentLead.plState} />
                    <Input label='Zip-code' value={this.props.store.Leads.currentLead.plZipcode} />
                </ModalTemp>
                <ModalTemp header="Edit contacts" id="contactsModal" withRemoveButton={false}>
                    <Input label='Phone number' value={this.props.store.Leads.currentLead.plPhone} />
                    <Input label='Phone number extension' value={this.props.store.Leads.currentLead.plExt} />
                    <Input label='Fax number' value={this.props.store.Leads.currentLead.plFax} />
                </ModalTemp>
                <ModalTemp saveAction={this.saveContactPersonHandler} header="Create contact person" id="createPersonContacts" withRemoveButton={false}>
                    <Input onChange={this.createContactPersonHandler} name="firstName" label='First name' value='' />
                    <Input onChange={this.createContactPersonHandler} name="middleName" label='Middle name' value='' />
                    <Input onChange={this.createContactPersonHandler} name="lastName" label='Last name' value='' />
                    <Input onChange={this.createContactPersonHandler} name="title" label='Title' value='' />
                    <Input onChange={this.createContactPersonHandler} name="officePhone" label='Office phone' value='' />
                    <Input onChange={this.createContactPersonHandler} name="fax" label='Fax' value='' />
                    <Checkbox label='Primary contact' checked={false} />
                </ModalTemp>
            </div>
        );
    }

    createContactPersonHandler = e => {
        this.setState({
            createContact: {
                ...this.state.createContact,
                [e.target.name]: e.target.value
            }
        })
    }
    saveContactPersonHandler = () => {
        if(!this.state.createContact.firstName || !this.state.createContact.lastName) return false;
        LeadsActions.createNewContact(this.state.createContact);
    }

    // editMainContactHandler = e => {
    //     this.setState({
    //         createPersonContact: {
    //             ...this.state.createPersonContact,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }

    // saveMainContactHandler = () => {
    //     if(!this.state.createPersonContact.firstName || !this.state.createPersonContact.lastName) return false;
    //     LeadsActions.createNewContact(this.state.createPersonContact);
    // }

}

export default LeadSidebar;
