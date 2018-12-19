import React from 'react';

class Confpage extends component{

    handleClick(){
       
    }
    render(){
        return(
            <div>
                <button onClick={(ev) => this.handleClick(ev)}>Next</button>
            </div>
        )
    }
}

export default Confpage;