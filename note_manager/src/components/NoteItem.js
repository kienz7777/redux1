import React, { Component } from 'react'

import {connect} from 'react-redux';

class NoteItem extends Component {

    twoAction = () => {
        this.props.changeEditStatus();
        console.log(this.props.note);

        this.props.getEditData(this.props.note);
    }

    deleteData = () => {
        this.props.getDeleteData(this.props.note.id)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.id} aria-expanded="true" aria-controls="noteContent1">
                            {this.props.noteTitle}
                        </a>

                        <div className = "btn-group float-right">
                            <button onClick ={() => this.twoAction()} className = "btn btn-outline-info"> Sửa </button>
                            <button onClick ={() => this.deleteData()} className = "btn btn-outline-secondary"> Xóa </button>
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.id} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>

        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type : "CHANGE_EDIT_STATUS"})
        },

        getEditData: (editObject) => {
            dispatch({
                type : "GET_EDIT_DATA",
                editObject
            })
        }
        ,
        getDeleteData: (deleteID) => {
            dispatch({
                type : "DELETE",
                deleteID
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(NoteItem)