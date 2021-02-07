import React from 'react'
import {getFunName} from '../helpers'



class StorePicker extends React.Component{
    
    
    myInput = React.createRef();


    gotToStore = (event) =>{
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`)
    }
    render(){
        return (
            <form action="" className="store-selector" onSubmit={this.gotToStore}>
            <h2>Please enter a store</h2>
            <input 
            type="text" 
            required placeholder="Store Name" 
            defaultValue={getFunName()}
            ref={this.myInput}
            />
            <button type="submit">Visit Store</button>
        </form>
        )
    }
}

export default StorePicker;