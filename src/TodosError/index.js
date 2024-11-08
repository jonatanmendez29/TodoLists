import React from "react";
function TodosError () {
    return(
        <div className="flexError">
            <div className="pacman">
                <div className="pacman__eye"></div>
                <div className="pacman__mouth"></div>
                <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>
                <p>SONTING IS WORONG</p>
            </div>
        </div>
    );
}
 export {TodosError};