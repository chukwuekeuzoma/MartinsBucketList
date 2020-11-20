import React from "react";

const MartinsBucketList = ({BucketList, deleteMartinsBucketList}) =>{
       
    const martinsBucketList = BucketList.length ? (
        BucketList.map(value =>{
            return(
                <div className ="collection-item" key = {value.id}>
                     <span onClick= {() => {deleteMartinsBucketList(value.id)}}>{value.content}</span>
                </div>
            )
        })
    ) : (
        <p className= "center  bg" > you need a bucketlist from Martins </p>
    )
return(
        <div className = "martinsBucketList collection">
            { martinsBucketList }
        </div>
    )
}

export default MartinsBucketList;