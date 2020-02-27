import React, { Component } from 'react'
import {connect} from 'react-redux'

 class NoteForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noteTile: '',
            noteContent: '',

        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        //console.log(name);
        //console.log(value);
        this.setState({
            [name]: value
        })
    }

    addData = (title,content) => {
        var item = {}
        item.noteTitle = title;
        item.noteContent = content;

        // //console.log(item);
        // // gửi item lên trên app để app xử lý
        // this.props.getData(item);
        //item = JSON.stringify(item);

        this.props.addDataStore(item);
    }

    render() {

        return (
            <div className="col-4">
                <h3>Sửa nội dung </h3>
                <form>


                    <div className="form-group">
                        <label >Tiêu đề note</label>
                        <input onChange={(event) =>  this.isChange(event) } name="noteTile" className="form-control" placeholder="Tiêu đề note" />
                        <small id="helpId" className="form-text text-muted">Điền tiêu đề </small>
                    </div>
                    <div className="form-group">
                        <label >Nội dung note</label>
                        <textarea onChange={(event) =>  this.isChange(event) } name="noteContent" className="form-control" placeholder="Nội dung note" defaultValue={" "} />
                        <small id="helpId" className="form-text text-muted">Điền nội dung</small>
                    </div>
                    <button type="reset" onClick = {() => this.addData(this.state.noteTile,this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>

                </form>
            </div>

        )
    }
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:'ADD_DATA',getItem})
        }
    }
}

export default connect(null,mapDispatchToProps)(NoteForm)