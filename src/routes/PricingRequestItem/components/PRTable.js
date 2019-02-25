import React from 'react';
import {PRTableItem} from './PRTableItem'
import iconArrowDown from '../../../resources/img/icon-chevron-down.svg'

export function PRTable(props) {
    return (
        <div class="p-2r pb-0">
            <div class="row">
                <div class="col-12">
                    <div class="c-data-table">
                        <div class="c-thead">
                            <div class="c-tr">
                                <div class="c-th">
                                    <div class="c-th-name">Item</div>
                                    <div class="c-th-sort"><img src={iconArrowDown} /></div>
                                </div>
                                <div class="c-th">
                                    <div class="c-th-name">List Price, $</div>
                                    <div class="c-th-sort"></div>
                                </div>
                                <div class="c-th">
                                    <div class="c-th-name">Approved price, $</div>
                                    <div class="c-th-sort"></div>
                                </div>
                                <div class="c-th">
                                    <div class="c-th-name">Requested price, $</div>
                                    <div class="c-th-sort"></div>
                                </div>
                                <div class="c-th">
                                    <div class="c-th-name">Monthly usage</div>
                                    <div class="c-th-sort"></div>
                                </div>
                            </div>
                        </div>
                        <div class="c-tbody">
                            {props.items.map((item, i) => {
                                return <PRTableItem key={item.id} config={item}/>
                            })}    
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}