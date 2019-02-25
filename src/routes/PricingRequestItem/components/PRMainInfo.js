import React from 'react';
import moment from 'moment';
import dotIcon from '../../../resources/img/icon-dot-warning.svg'
import { NavLink } from 'react-router-dom';

export function PRMainInfo(props) {
    const {lead, leadId, date, person, status, note} = props
    return (
        <section class="border-bottom">
            <div class="p-2r">
                <div class="row">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-4">
                        <div class="row mb-2">
                            <div class="col-4">
                                <div class="c-gray-400">Lead</div>
                            </div>
                            <div class="col-8">
                                <div class="c-gray-500 text-left">
                                    <NavLink to={`/leads/${leadId}`}>{lead}</NavLink>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4">
                                <div class="c-gray-400">Date</div>
                            </div>
                            <div class="col-8">
                                <div class="c-gray-500 text-left">{moment(date).format('MMM, Do, hha')}</div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4">
                                <div class="c-gray-400">Person</div>
                            </div>
                            <div class="col-8">
                                <div class="c-gray-500 text-left">{person}</div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4">
                                <div class="c-gray-400">Status</div>
                            </div>
                            <div class="col-8">
                                <div class="media"><img class="mr-2" src={dotIcon} alt="dot icon" />
                                    <div class="media-body">
                                        <div class="t-400 c-gray-500 text-left">{status ? 'Completed' : 'Pending'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-4 mb-2 mb-sm-0">
                                <div class="c-gray-400">Note</div>
                            </div>
                            <div class="col-12 col-sm-8">
                                <div class="c-gray-500 text-left">{note}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}