import React from "react";
import "./TodosLoading.css"
function TodosLoading () {
    return(
        <div className="flexLoad">
            <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
            <div>
                <p>STARTING</p>
            </div>
        </div>
    );
}
 export {TodosLoading};