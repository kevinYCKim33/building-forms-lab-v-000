import React, { Component } from 'react';
import Band from './Band'; //version where I turn Band into component
class Bands extends Component {
  render(){
    // debugger;
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <Band band={band} key={index} />
      // return <li key={index}>{band}</li>
    })
    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;
//comment out lines 2 and 7,
//comment back in line 8 to pass Flatiron tests
