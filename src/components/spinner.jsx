import React from "react";


export default function SpinnerMessage(props) {
    
    let message = props.message; 

    return (
        <div className="snipper">
            <button className="btn btn-dark text-nowrap" type="button">
                <span className="spinner-border spinner-border-sm mr-10"></span>
                {message}
            </button>
        </div>
  );
}
