import React, { Component } from "react";

class Items extends Component{
    render(){
        const {item} = this.props;
        const thenItem = item.map( solo_item => {
            return(
                <div key={solo_item.id}>
                    <div>{solo_item.id}</div>
                    <div>{solo_item.name}</div>
                    <div>{solo_item.age}</div>
                    <div>{solo_item.count}</div>
                    <div>_______________</div>
                </div>
            )
        })
        return(
            <div>
                {thenItem}
            </div>
        )
    }
}

export default Items;