import React, { Component } from "react";
import MartinsBucketList from "./MartinsBucketList";
import UpdateBuketList from "./UpdateBuketList"
class App extends Component {
    state = {
       Bucketlist:[
          {id:1, content:"buy some milk"},
          {id:2, content:"play mairo cart"}
       ]
      } 
  deleteMartinsBucketList = (id) => { 
   const newDelete = this.state.Bucketlist.filter(martData=>{
     return martData.id !== id
   })
   this.setState(
     {Bucketlist: newDelete }
   )
  }
  addBucketList = (add) =>{
      console.log(add);  
      add.id = Math.random();
      const addContent = [...this.state.Bucketlist, add]
      this.setState(
        { Bucketlist:addContent}
      )
  }

  render(){
     return(
       <div className="container">
         <h1 className ="center blue-text">Martins BucketList</h1>
         <MartinsBucketList BucketList ={this.state.Bucketlist} deleteMartinsBucketList ={this.deleteMartinsBucketList}/>
         <UpdateBuketList addBucketList={this.addBucketList}/>
       </div>
     ) 

  }
}

export default App;