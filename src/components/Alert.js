import React from 'react';
const propTypes = {};
const defaultProps = {};

/**
 * 
 */

const Alert = (props) => {
    const capitalize = (word)=>{
    const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return <>
          
          {/* <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message} 
        </div>}
        </div> */}
        {/* error in below line but if u put it in the the div another it works fine try to find why && is outside div */}
        {/* putting function on message works */}
        <div style={{height: '50px'}}>
        {props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{capitalize(props.alert.type)}</strong>: {capitalize(props.alert.message)}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div> }
      </div>
      
    </>;
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
// #endregion

export default Alert;