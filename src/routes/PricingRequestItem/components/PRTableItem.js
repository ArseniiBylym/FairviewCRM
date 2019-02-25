import React from 'react';

export function PRTableItem(props) {

    const {approved, approvedPrice, expectedPrice , itemData: {itemname, price}, itemcode, pricingRequestId, volume} = props.config
    return (
        <div class="c-tr">
            <div class="c-td" data-heading="Item name">
                <div class="t-400-h">{itemcode}</div>
                <div class="c-gray-400">{itemname}</div>
            </div>
            <div class="c-td" data-heading="List Price, $">{price}</div>
            <div class="c-td" data-heading="Approved price, $">
                <div class="input-group mt-2 mt-md-0">
                    <input class="form-control" type="text" defaultValue={approvedPrice} />
                    <div class="input-group-append">
                        <button class="btn btn-light">Save</button>
                    </div>
                </div>
            </div>
            <div class="c-td" data-heading="Requested price, $">{expectedPrice}</div>
            <div class="c-td" data-heading="Monthly usage"></div>
        </div>
    )
}