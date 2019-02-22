import React, { Component } from 'react';
import LeadSidebarCard from './LeadSidebarCard/LeadSidebarCard';
import SidebarDetailsRow from '../../../components/SidebarDetailsRow/SidebarDetailsRow';
import SidebarContactPersonItem from '../../../components/SidebarContactPersonItem/SidebarContactPersonItem';

class LeadSidebar extends Component {
    render() {
        const {legalBusName, license, plAddress1, plCity, plState, plZipcode, plPhone, plFax, plEmail, contactLName, contactFName, contactMInitial, 
            contactTitle, contactPhone, contactExt, contactEmail, salesReps } = this.props.config;
        return (
            <div className="LeadSidebar page-sidebar">
                <div className="position-sticky-0">
                    <LeadSidebarCard header='Details'>
                        <SidebarDetailsRow name='Legal' value={legalBusName} />
                        <SidebarDetailsRow name='Rep' value={null} />
                        <SidebarDetailsRow name='Group' value={null} />
                        <SidebarDetailsRow name='Type' value={null} />
                        <SidebarDetailsRow name='License' value={license} />
                    </LeadSidebarCard>
                    <LeadSidebarCard header='Address'>
                        <div className="row">
                            <div className="col-12">
                                <div className="c-gray-500">{`${plAddress1}, ${plCity}, ${plState}, ${plZipcode}, ${plPhone}, ${plFax}, ${plEmail}`}</div>
                            </div>
                        </div>
                    </LeadSidebarCard>
                    <LeadSidebarCard header='Contact'>
                        <div className="row">
                            <div className="col-12">
                                <div className="c-gray-500">{`P. ${contactPhone} (ext. ${contactExt})`}</div>
                                <div className="c-gray-500">{`F: ${plFax}`}</div>
                                <div className="c-gray-500">{`E: ${contactEmail}`}</div>
                            </div>
                        </div>
                    </LeadSidebarCard>
                    <LeadSidebarCard header='Contact persons'>
                        <div className="col-12 mb-4">
                            {salesReps.map(item => (
                                <SidebarContactPersonItem key={item.id} isActive={true} name={item.name} position={null} phone={null} />
                            ))}
                            
                        </div>
                        <div className="col-12">
                            <div className="px-3">
                                <div className="mx-3">
                                    <button className="btn btn-primary btn-block" type="button" data-toggle="modal" data-target="#leadContactPersonCreateModal">Add a Contact</button>
                                </div>
                            </div>
                        </div>
                    </LeadSidebarCard>
                </div>
            </div>
        );
    }
}

export default LeadSidebar;
