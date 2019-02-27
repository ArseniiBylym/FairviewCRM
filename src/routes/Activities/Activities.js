import React, { Component, Fragment } from 'react';
import './Activities.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import IconPlus from '../../resources/img/icon-plus-white.svg';
import DateRangeSelect from '../../components/SearchForm/DateRangeSelect/DateRangeSelect';
import FilterSelect from '../../components/SearchForm/FilterSelect/FilterSelect';
import Input from '../../components/Form/Input';
import { ActivitiesActions } from '../../actions/AllActions'
import { ModalActions } from '../../actions/AllActions'
import ModalTemp from '../../components/ModalTemp/ModalTemp'
import Select from '../../components/Form/Select';
import ActivitiesCard from '../../components/ActivitiesCard/ActivitiesCard';
import { observer, inject } from 'mobx-react';
import Spinner from '../../components/Spinner/Spinner'
import { ActivitiesStore } from '../../store/AllStores';

@inject('store')
@observer
class Activities extends Component {

    testHandler() {
        ActivitiesActions.createActivity()
    }

    postAndFetchActivity(data) {
        console.log(this.props.store)
        ActivitiesActions.postNewActivity(data)
    }

    createActivity() {
        ModalActions.configModalData({
            header: 'New Activity',
            withRemoveButton: false,
            content:<Fragment>
                        <Input config={{
                            label: 'DBA', 
                            value: 'this.props.store.Leads.currentLead.dba',
                            onChange: this.testHandler
                        }}/>
                    </Fragment>
        })

        console.log(this.props.store)
    }
    
    componentDidMount = async () => {
       await ActivitiesActions.fetchActivities();
       !this.props.store.Activities.types.length && await ActivitiesActions.fetchTypes();
    }

    componentWillUnmount = () => {
        ActivitiesActions.clearSearchField();
    }
    
    render() {
        console.log(this.props.store)
        let activities = null;

        if(this.props.store.Activities.filteredActivities.length > 0) {
            activities = this.props.store.Activities.filteredActivities.map(item => {
                console.log(item);
                return (
                    <ActivitiesCard key={item.id} config={item}/>
                )
            })
        }

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
                    <SearchForm searchAction={(value) => ActivitiesActions.searchFieldHandler(value)}>
                        <FilterSelect title={"Type"} id={"filter-type"} options={types} selectAction={value => ActivitiesActions.changeType(value)}/>
                        <div className="col-xl-3 col-lg-6">
                            <DateRangePicker startDate="1/1/2016" endDate="1/1/2020" className="col-xl-3 col-lg-6" onApply={(e, picker) => ActivitiesActions.setDatePickerDateField(picker.startDate, picker.endDate)}>
                                <DateRangeSelect />
                            </DateRangePicker>
                        </div>
                    </SearchForm>
                </section>
                <div className="p-2r">
                    <div className="row">
                        {activities ? activities : !this.props.store.Activities.activitiesFetched ? <Spinner /> : null}
                    </div>
                </div>
                <button className="button-floating" type="button" data-toggle="modal" data-target="#activityCreateModal" onClick={() => this.createActivity()}>
                    <span className="icon"><img src={IconPlus} /></span><span className="text">Create activity</span>
                </button>
                <ModalTemp header="Edit details" id="activityCreateModal" withRemoveButton={false} saveAction={data => this.postAndFetchActivity(data)}>
                    <Input label='Note' value={'TEST'}  />
                    <Input label='Provider ID' value={'C00085B'}  />
                    <Input label='Activity Type ID' value={1}  />
                    <Input label='Remind' value={true}  />
                    <Input label='Activity Time' value={'2019-02-26T09:00:36.000Z'}  />
                    <Input label='Remind At' value={null}  />
                    <Input label='Remind Before' value={null}  />
                    <Select label='Activity Type' 
                        options={[{value: 'All', selected: true}, ...ActivitiesStore.types.map(item => {
                            return {value: item.name, id: item.id, selected: false}
                        })]} 
                    />
                    {/* <div className="form-group">
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
                    /> */}
                </ModalTemp>
            </div>
        );
    }
}

export default Activities;