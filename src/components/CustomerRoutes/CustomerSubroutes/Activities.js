import React, { Component } from 'react';

class CustomerActivities extends Component {
    componentDidMount = () => {
        console.log('Activities mount')
    }
    render() {
        return (
            <div>Activities</div>
        )
    }
}

export {CustomerActivities};