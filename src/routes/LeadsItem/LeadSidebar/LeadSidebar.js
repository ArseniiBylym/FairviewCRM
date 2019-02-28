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
            dba: '',
            legalBusName: '',
            groupId: {
                value: '',
                options: []
            },
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

    componentDidMount = async () => {
        !this.props.store.Leads.customerGroups.length && await LeadsActions.fetchCustomerGroups()
    }

   
    initDetailsModalHandler = () => {
        const { dba, legalBusName } = this.props.store.Leads.currentLead;
        const options = this.props.store.Leads.customerGroups.map((item, i) => {
            return {value: item.groupCode, label: item.groupName}
        })
        const selectedGroup = options.find((item, i) => {
            return item.value == this.props.store.Leads.currentLead.groupId
        })
        this.setState({
            details: {
                dba: dba,
                legalBusName: legalBusName,
                groupId: {
                    value: selectedGroup && selectedGroup.value,
                    options: options
                },
            }
        })
    }

    initAddressModalData = () => {
        const { plAddress1, plAddress2, plCity, plState, plZipcode } = this.props.store.Leads.currentLead;
        this.setState({
            address: {
                plAddress1: plAddress1,
                plAddress2: plAddress2,
                plCity: plCity,
                plState: plState,
                plZipcode: plZipcode,
            }
        })
    }

    initContactModalData = () => {
        const { contactPhone, contactExt, contactEmail } = this.props.store.Leads.currentLead;
        this.setState({
            contact: {
                contactPhone: contactPhone,
                contactExt: contactExt,
                contactEmail: contactEmail,
            },
        })
    }

    render() {
        const {legalBusName, license, plAddress1, plAddress2, plCity, plState, plZipcode, plPhone, plFax, plEmail, contactLName, contactFName, contactMInitial, 
            contactTitle, contactPhone, contactExt, contactEmail, salesReps } = this.props.config;
        const customerGroup = this.props.store.Leads.customerGroups.find((item, i) => {
            return item.groupCode == this.props.store.Leads.currentLead.groupId
        })
        return (
            <div className="LeadSidebar page-sidebar">
                <div className="position-sticky-0">
                    <LeadSidebarCard editHandler={this.initDetailsModalHandler} withBorder={true} withEditButton={true} relatedModalId="detailsModal" header='Details'>
                        <SidebarDetailsRow name='Legal' value={legalBusName} />
                        <SidebarDetailsRow name='Rep' value={customerGroup && customerGroup.groupName} />
                        <SidebarDetailsRow name='Group' value={null} />
                        <SidebarDetailsRow name='Type' value={null} />
                    </LeadSidebarCard>
                    <LeadSidebarCard editHandler={this.initAddressModalData} withBorder={true} withEditButton={true} relatedModalId="addressModal" header='Address'>
                        <div className="row">
                            <div className="col-12 ml-2">
                                <div className="c-gray-500 text-left">
                                    {plAddress1 && <p>{plAddress1}</p>}
                                    {plAddress2 && <p>{plAddress2}</p>}
                                    <p>{`${plCity}, ${plState}, ${plZipcode}`}</p>
                                </div>
                            </div>
                        </div>
                    </LeadSidebarCard>
                    <LeadSidebarCard editHandler={this.initContactModalData} withBorder={true} withEditButton={true} relatedModalId="contactsModal" header='Contact'>
                        <div className="row">
                            <div className="col-12 ml-2">
                                <div className="c-gray-500 text-left">{`P. ${contactPhone ? contactPhone : ''} (ext. ${contactExt ? contactExt : ''})`}</div>
                                <div className="c-gray-500 text-left">{`F: ${plFax ? plFax : ''}`}</div>
                                <div className="c-gray-500 text-left">{`E: ${contactEmail}`}</div>
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
                <ModalTemp saveAction={this.saveDetailsHandler} closeAction={this.clearDetailsModalData} header="Edit details" id="detailsModal" withRemoveButton={false}>
                    <Input onChange={this.editInputHandler} dataType="details" name="dba"  label='DBA' value={this.state.details.dba}  />
                    <Input onChange={this.editInputHandler} dataType="details" name="legalBusName"  label='Legal Business Name' value={this.state.details.legalBusName}  />
                    <Select onChange={this.editSelectHandler} label='Business Group' dataType="details" name="groupId" value={this.state.details.groupId.value} 
                        options={this.state.details.groupId.options.map((item,i) => {
                            return ({value: item.value, label: item.label})
                        })}
                    />
                    <div className="form-group">
                      <button className="btn btn-light" type="button">Manage Business Groups</button>
                    </div>
                </ModalTemp>
                <ModalTemp saveAction={this.saveAddressHandler} closeAction={this.clearAddressModalData} header="Edit address" id="addressModal" withRemoveButton={false}>
                    <Input onChange={this.editInputHandler} dataType="address" name="plAddress1" label='Address 1' value={this.state.address.plAddress1} />
                    <Input onChange={this.editInputHandler} dataType="address" name="plAddress2" label='Address 2' value={this.state.address.plAddress2} />
                    <Input onChange={this.editInputHandler} dataType="address" name="plCity" label='City' value={this.state.address.plCity} />
                    <Input onChange={this.editInputHandler} dataType="address" name="plState" label='State' value={this.state.address.plState} />
                    <Input onChange={this.editInputHandler} dataType="address" name="plZipcode" label='Zip-code' value={this.state.address.plZipcode} />
                </ModalTemp>
                <ModalTemp saveAction={this.saveContactHandler} closeAction={this.clearContactModalData} header="Edit contacts" id="contactsModal" withRemoveButton={false}>
                    <Input onChange={this.editInputHandler} dataType="contact" name="contactPhone" label='Phone number' value={this.state.contact.contactPhone} />
                    <Input onChange={this.editInputHandler} dataType="contact" name="contactExt" label='Phone number extension' value={this.state.contact.contactExt} />
                    <Input onChange={this.editInputHandler} dataType="contact" name="contactEmail" label='Email' value={this.state.contact.contactEmail} />
                </ModalTemp>
                <ModalTemp saveAction={this.saveContactPersonHandler} closeAction={this.clearContactPersonModalData} header="Create contact person" id="createPersonContacts" withRemoveButton={false}>
                    <Input onChange={this.editInputHandler} required={true} dataType="createPersonContact" name="firstName" label='First name' value={this.state.createPersonContact.firstName} />
                    <Input onChange={this.editInputHandler} dataType="createPersonContact" name="middleName" label='Middle name' value={this.state.createPersonContact.middleName} />
                    <Input onChange={this.editInputHandler} required={true} dataType="createPersonContact" name="lastName" label='Last name' value={this.state.createPersonContact.lastName} />
                    <Input onChange={this.editInputHandler} dataType="createPersonContact" name="title" label='Title' value={this.state.createPersonContact.title} />
                    <Input onChange={this.editInputHandler} dataType="createPersonContact" name="officePhone" label='Office phone' value={this.state.createPersonContact.officePhone} />
                    <Input onChange={this.editInputHandler} dataType="createPersonContact" name="fax" label='Fax' value={this.state.createPersonContact.fax} />
                    {/* <Checkbox label='Primary contact' checked={false} /> */}
                </ModalTemp>
            </div>
        );
    }


//Clear handlers on modals close action
    clearContactPersonModalData = () => {
        this.setState({
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
        })
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
    clearAddressModalData = () => {
        this.setState({
            address: {
                plAddress1: '',
                plAddress2: '',
                plCity: '',
                plState: '',
                plZipcode: '',
            },
        })
    }
    clearDetailsModalData = () => {
        this.setState({
            details: {
                dba: '',
                legalBusName: '',
                groupId: {
                    value: '',
                    options: []
                },
                relationType: '',
                drugLicenseType: '',
                fetched: false,
            },
        })
    }

    //Modals save button handlers
    saveDetailsHandler = () => {
        LeadsActions.updateCustomerData({
            dba: this.state.details.dba,
            legalBusName: this.state.details.legalBusName,
            groupId: this.state.details.groupId.value
        });
    }
    saveAddressHandler = () => {
        LeadsActions.updateCustomerData(this.state.address)
    }
    saveContactHandler = () => {
        LeadsActions.updateCustomerData(this.state.contact)
    }
    saveContactPersonHandler = () => {
        if(!this.state.createPersonContact.firstName || !this.state.createPersonContact.lastName) return false;
        LeadsActions.createNewContact(this.state.createPersonContact);
    }


//Inputs and selects handlers
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
    editSelectHandler = (e) => {
        const type = e.target.dataset.type;
        const name = e.target.name;
        this.setState({
            [type]: {
                ...this.state[type],
                [name]: {
                    options: this.state[type][name].options.slice(),
                    value: e.target.value
                }
            }
        })
    }
    //Inputs and selects handlers

    
}

export default LeadSidebar;
