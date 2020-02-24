import React, { Component } from 'react';
import {connect} from 'react-redux';

class News extends Component {

    // useEditStatusInStore = ()=>{
    //     var dis = this.props.dispatch;  // = store1.dispatch gọi qua props
    //     dis({type : 'CHANGE_EDIT_STATUS'})
    // }

    render() {
        return (
            <div>
                <h2>Hello</h2>
                <button onClick={()=>this.props.useEditStatusInStore()}>Click di</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        edit: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStatusInStore: () => {
            dispatch({type : 'CHANGE_EDIT_STATUS'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);



