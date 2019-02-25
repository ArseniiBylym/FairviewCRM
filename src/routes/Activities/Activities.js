import React, { Component } from 'react';
import './Activities.scss';
import SearchForm from '../../components/SearchForm/SearchForm'
import DateRangeSelect from '../../components/SearchForm/DateRangeSelect/DateRangeSelect'
import FilterSelect from '../../components/SearchForm/FilterSelect/FilterSelect'
import { ActivitiesActions } from '../../actions/AllActions'
import { UserActions, LeadsActions } from '../../actions/AllActions'
import ActivitiesCard from '../../components/ActivitiesCard/ActivitiesCard';
import { observer, inject } from 'mobx-react';
import Spinner from '../../components/Spinner/Spinner'

@inject('store')
@observer
class Activities extends Component {

    componentDidMount = async () => {
       await ActivitiesActions.fetchActivities();
       !this.props.store.Activities.types.length && await ActivitiesActions.fetchTypes();
    }

    componentWillUnmount = () => {
        ActivitiesActions.clearSearchField();
    }
    
    render() {

        let activities = null;
        if(this.props.store.Activities.filteredActivities.length > 0) {
            activities = this.props.store.Activities.filteredActivities.map(item => {
                return (
                    <ActivitiesCard key={item.id} config={item}/>
                )
            })
        }

        console.log(this.props.store.Activities)
        const { types } = this.props.store.Activities
        return (
            <div className="Activities">
                <section className="border-bottom">
                    <div className="p-2r pb-3">
                    <div className="row">
                            <div className="col-12 text-left">
                                <h1 className="t-900-h mb-4">Activities</h1>
                            </div>
                        </div>
                    </div>
                    <SearchForm>
                        <FilterSelect title={"Type"} id={"filter-type"} options={types}/>
                        <DateRangeSelect />
                    </SearchForm>
                </section>
                <div className="p-2r">
                    <div className="row">
                        {activities ? activities : <Spinner />}
                    </div>
                </div>
            </div>
        );
    }
}

export default Activities;