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
        details: {
            // dba: {
            //     name: 'plAddress1',
            //     label: 'DBA',
            //     value: '',
            //     type: 'input'
            // },
            // legalBusName: {
            //     name: 'plAddress2',
            //     label: 'Legal Business Name',
            //     value: '',
            //     type: 'select'
            // },
            // groupId: {
            //     name: 'plCity',
            //     lagel: 'Budiness Group',
            //     value: '',
            //     type: 'select',
            //     options: []
            // },
            // relationType: {
            //     name: 'plState',
            //     lagel: 'Type',
            //     value: '',
            //     type: 'select',
            //     options: []
            // },
            // drugLicenseType: {
            //     name: 'plZipcode',
            //     lagel: 'Licence Type',
            //     value: '',
            //     type: 'select',
            //     options: []
            // },
            dba: '',
            legalBusName: '',
            groupId: '',
            relationType: '',
            drugLicenseType: '',
            fetched: false,
        },
        address: {
            plAddress1: '',
            plAddress2: '',
            plCity: '',
            plState: '',
            plZipcode: '',
        },
        contact: {
            contactPhone: '',
            contactExt: '',
            contactEmail: '',
        },
        createPersonContact: {
            firstName: '',
            lastName:'',
            middleName: '',
            title: '',
            officePhone: '',
            fax: '',
            emailAddress: '',
            fetched: false,
        },
    }

    // editDbaHandler = e => {
    //     LeadsActions.editCurrentLead('dba', e.target.value)
    // }

    // editDetailsData = () => {
    //     ModalActions.configModalData({
    //         header: 'Edit details',
    //         withRemoveButton: false,
    //         content:<Fragment>
    //                     <Input config={{
    //                         label: 'DBA', 
    //                         value: this.props.store.Leads.currentLead.dba,
    //                         onChange: this.editDbaHandler
    //                     }}/>
    //                 </Fragment>
    //     })
    // }

    componentDidUpdate = () => {
        console.log(this.state);
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
                    </LeadSidebarCard>
                    <LeadSidebarCard withBorder={true} withEditButton={true} relatedModalId="addressModal" header='Address'>
                        <div className="row">
                            <div className="col-12">
                                <div className="c-gray-500">{`${plAddress1}, ${plCity}, ${plState}, ${plZipcode}, ${plPhone}, ${plFax}, ${plEmail}`}</div>
                            </div>
                        </div>
                    </LeadSidebarCard>
                    <LeadSidebarCard editHandler={this.initContactModalData} withBorder={true} withEditButton={true} relatedModalId="contactsModal" header='Contact'>
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
                            {salesReps.map((item, i) => (
                                <SidebarContactPersonItem key={item.id} index={i} isActive={true} name={item.name} position={null} phone={null} />
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
                    <Input onChange={this.editInputHandler} dataType="details" name="dba"  label='DBA' value={this.props.store.Leads.currentLead.dba}  />
                    <Input onChange={this.editInputHandler} dataType="details" name="legalBusName"  label='Legal Business Name' value={this.props.store.Leads.currentLead.legalBusName}  />
                    <Input onChange={this.editInputHandler} dataType="details" name="plAddress1"  label='Business Group' value={``}  />
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
                        {/* {this.state.address.map(item => {
                            return (<Input key={item.name} onChange={this.editInputHandler} dataType='address' name={item.name} label={item.label} value={item.value} /> )
                        }} */}

                    <Input onChange={this.editInputHandler} dataType="address" name="plAddress1" label='Address 1' value={this.props.store.Leads.currentLead.plAddress1} />
                    <Input onChange={this.editInputHandler} dataType="address" name="plAddress2" label='Address 2' value={this.props.store.Leads.currentLead.plAddress2} />
                    <Input onChange={this.editInputHandler} dataType="address" name="plCity" label='City' value={this.props.store.Leads.currentLead.plCity} />
                    <Input onChange={this.editInputHandler} dataType="address" name="plState" label='State' value={this.props.store.Leads.currentLead.plState} />
                    <Input onChange={this.editInputHandler} dataType="address" name="plZipcode" label='Zip-code' value={this.props.store.Leads.currentLead.plZipcode} />
                </ModalTemp>
                <ModalTemp saveAction={this.saveContactHandler} closeAction={this.clearContactModalData} header="Edit contacts" id="contactsModal" withRemoveButton={false}>
                    <Input onChange={this.editInputHandler} dataType="contact" name="contactPhone" label='Phone number' value={this.state.contact.contactPhone} />
                    <Input onChange={this.editInputHandler} dataType="contact" name="contactExt" label='Phone number extension' value={this.state.contact.contactExt} />
                    <Input onChange={this.editInputHandler} dataType="contact" name="contactEmail" label='Email' value={this.state.contact.contactEmail} />
                </ModalTemp>
                <ModalTemp saveAction={this.saveContactPersonHandler} header="Create contact person" id="createPersonContacts" withRemoveButton={false}>
                    <Input onChange={this.editInputHandler} required={true} dataType="createPersonContact" name="firstName" label='First name' value='' />
                    <Input onChange={this.editInputHandler} dataType="createPersonContact" name="middleName" label='Middle name' value='' />
                    <Input onChange={this.editInputHandler} required={true} dataType="createPersonContact" name="lastName" label='Last name' value='' />
                    <Input onChange={this.editInputHandler} dataType="createPersonContact" name="title" label='Title' value='' />
                    <Input onChange={this.editInputHandler} dataType="createPersonContact" name="officePhone" label='Office phone' value='' />
                    <Input onChange={this.editInputHandler} dataType="createPersonContact" name="fax" label='Fax' value='' />
                    {/* <Checkbox label='Primary contact' checked={false} /> */}
                </ModalTemp>
            </div>
        );
    }


    initContactModalData = () => {
        const phone = this.props.store.Leads.currentLead.contactPhone
        const ext = this.props.store.Leads.currentLead.contactExt
        const email = this.props.store.Leads.currentLead.contactEmail
        this.setState({
            contact: {
                contactPhone: phone,
                contactExt: ext,
                contactEmail: email,
            },
        })
    }
    saveContactHandler = () => {
        
    }

    clearContactModalData = () => {
        this.setState({
            contact: {
                contactPhone: '',
                contactExt: '',
                contactEmail: '',
            },
        })
    }

   

    editInputHandler = e => {
        console.log(e.target.name)
        const type = e.target.dataset.type;
        this.setState({
            [type]: {
                ...this.state[type],
                [e.target.name]: e.target.value
            }
        })
    }

    saveContactPersonHandler = () => {
        if(!this.state.createPersonContact.firstName || !this.state.createPersonContact.lastName) return false;
        LeadsActions.createNewContact(this.state.createPersonContact);
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
