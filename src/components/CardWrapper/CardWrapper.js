import React, { Component } from 'react';
// import './CardWrapper.scss';
import iconMenu from '../../resources/img/icon-menu.svg'
import { observer, inject } from 'mobx-react';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';


@inject('store')
@observer
class CardWrapper extends Component {

    render() {
        let activities = null

        activities = this.props.cardsCategory.array.map(item => {
            return <ActivitiesCard config={item} />
        })

        return (
            <div className="col-12 text-left">
                <div className="p-2r pb-0">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="t-800-h"><img className="pb-2 mr-4 cursor-pointer" src={iconMenu} /><span>{this.props.cardsCategory.name}</span></h2>
                        </div>
                    </div>
                </div>
                <div className="p-2r pb-0">
                    <div className="row">
                        {activities}
                    </div>
                </div> 
            </div>
        );
    }
}

export default CardWrapper;