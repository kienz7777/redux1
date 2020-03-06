import React, { Component } from 'react'
import {connect} from 'react-redux'

 class NoteForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noteTitle: '',
            noteContent: '',
            id : ''
        }
    }

    UNSAFE_componentWillMount() {
        if(this.props.editItem){
            this.setState({
                noteTitle : this.props.editItem.noteTitle,
                noteContent : this.props.editItem.noteContent,
                id : this.props.editItem.id

            })
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

        if(this.state.id){      //Sửa
            var editobject = {}
            editobject.id = this.state.id;
            editobject.noteTitle = this.state.noteTitle;
            editobject.noteContent = this.state.noteContent;

            this.props.editDataStore(editobject);
            this.props.changeEditStatus();  //đóng form

            this.props.changeAlertStatus(); //thay đổi trạng thái hiển thị Alert
        }

        else{               //Thêm
            var item = {}
            item.noteTitle = title;
            item.noteContent = content;
    
            // //console.log(item);
            // // gửi item lên trên app để app xử lý
            // this.props.getData(item);
            //item = JSON.stringify(item);
    
            this.props.addDataStore(item);

            this.props.changeAlertStatus();//thay đổi trạng thái hiển thị Alert
        }
       
    }

    render() {

        return (
            <div className="col-4">
                <h3>{this.props.title} ghi chú</h3>
                <form>


                    <div className="form-group">
                        <label >Tiêu đề note</label>
                        <input defaultValue = {this.props.editItem.noteTitle} onChange={(event) =>  this.isChange(event) } name="noteTitle"  className="form-control" placeholder="Tiêu đề note" />
                        <small id="helpId" className="form-text text-muted">Điền tiêu đề </small>
                    </div>
                    <div className="form-group">
                        <label >Nội dung note</label>
                        <textarea defaultValue = {this.props.editItem.noteContent} onChange={(event) =>  this.isChange(event) } name="noteContent" className="form-control" placeholder="Nội dung note"  />
                        <small id="helpId" className="form-text text-muted">Điền nội dung</small>
                    </div>
                    <button type="reset" onClick = {() => this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>

                </form>
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        title : state.title
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:'ADD_DATA',getItem})
        }
        ,
        editDataStore: (getItem) => {
            dispatch({type:'EDIT',getItem})
        },
        changeEditStatus: () => {
            dispatch({type : "CHANGE_EDIT_STATUS"})
        },
        changeAlertStatus: () => {
            dispatch({type : "CHANGE_ALERT_STATUS"})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteForm)