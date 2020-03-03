import React, { Component } from 'react'
import { Alert, AlertContainer } from "react-bs-notifier";

import { connect } from 'react-redux';

class AlertInfo extends Component {

    render() {
        if (this.props.alertShow === false) return null;
        return (
            <AlertContainer position = "top-left" >
                <Alert onDismiss type="info">{this.props.title} thành công!</Alert>

            </AlertContainer>


        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        title: state.title
    }
}

export default connect(mapStateToProps, null)(AlertInfo)

