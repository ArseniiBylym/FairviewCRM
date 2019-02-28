import React, { Component, Fragment } from 'react';
import './Activities.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import IconPlus from '../../resources/img/icon-plus-white.svg';
import DateRangeSelect from '../../components/SearchForm/DateRangeSelect/DateRangeSelect';
import FilterSelect from '../../components/SearchForm/FilterSelect/FilterSelect';
import Input from '../../components/Form/Input';
import TextArea from '../../components/Form/TextArea';
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
    state = {
        // note: 'Test',
        providerId: 'C00085B',
        activityTypeId: 1,
        remind: true,
        activityTime: '2019-02-26T09:00:36.000Z',
        // remindAt: null,
        // remindBefore: null,
        activityType: null,
        desciption: ''
    }

    testHandler() {
        ActivitiesActions.createActivity()
    }

    postAndFetchActivity() {
        const inputsValues = this.state
        ActivitiesActions.postNewActivity(inputsValues)
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

    }
    
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
                    <ActivitiesCard key={item.id} config={item} widthLg={4} widthXl={3}/>
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
                <ModalTemp saveAction={(inpu) => this.postAndFetchActivity()} header="Edit details" id="activityCreateModal" withRemoveButton={false}>
                    <Select onChange={(e) => this.setState({activityType: e.target.value})} label='Activity Type' value={this.state.activityType}
                        options={[{value: 'All', label: 'All'}, ...ActivitiesStore.types.map(item => {
                            return {value: item.name, id: item.id, label: item.name}
                        })]}
                    />
                    <DateRangePicker startDate="1/1/2016" endDate="1/1/2020" className="col-xl-3 col-lg-6" onApply={(e, picker) => ActivitiesActions.setDatePickerDateField(picker.startDate, picker.endDate)}>
                                <DateRangeSelect title='Due Date'/>
                    </DateRangePicker>
                    <Select onChange={(e) => this.setState({remind: e.target.value === 'Not remind' ? false : true})} label='Remind' value={this.state.remind}
                        options={[
                            {value: 'Remind', label: 'Remind'},
                            {value: 'Not remind', label: 'Not remind'},
                        ]}
                    />
                    <TextArea onChange={(e) => this.setState({desciption: e.target.value})} label='Desciption'/>
                    {/* <Input onChange={(e) => this.setState({note: e.target.value})} label='Note' value={this.state.note}  />
                    <Input onChange={(e) => this.setState({providerId: e.target.value})} label='Provider ID' value={this.state.providerId}  />
                    <Input onChange={(e) => this.setState({activityTypeId: e.target.value})} label='Activity Type ID' value={this.state.activityTypeId}  />
                    <Input onChange={(e) => this.setState({remind: e.target.value})} label='Remind' value={this.state.remind}  />
                    <Input onChange={(e) => this.setState({activityTime: e.target.value})} label='Activity Time' value={this.state.activityTime}  />
                    <Input onChange={(e) => this.setState({remindAt: e.target.value})} label='Remind At' value={this.state.remindAt}  />
                    <Input onChange={(e) => this.setState({remindBefore: e.target.value})} label='Remind Before' value={this.state.remindBefore}  /> */}
                    
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