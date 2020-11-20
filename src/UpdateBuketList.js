import {Component} from "react";

class UpdateBuketList extends Component{
  
    state ={
           content:""
        }
    updateInput = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addBucketList(this.state)

    }

    render(){
        return(
            <div className ="collection-item">
            <form onSubmit={this.onSubmit}>
                <label>Add to martins list:</label>
                <input type="text" onChange={this.updateInput} id="content"/>
            </form>
            </div>
        )
    }
}

export default UpdateBuketList;