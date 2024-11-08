import React from "react";
const buttonsCatalog =[
    {type: "complete", iconName: "check_circle"},
    {type: "delete", iconName: "delete_forever"},
    {type: "cancel", iconName: "close"},
    {type: "newTask", iconName: "note_stack_add"},
    {type: "edit", iconName: "edit"},
    {type: "loading", iconName: "rotate_left"}
];
function TodoIcon(type){
    const text = buttonsCatalog.find(
        (icono)=> icono.type === type.type
    );
    return(
        <i className="material-symbols-outlined">
            {text.iconName}
        </i>
    );
}
export {TodoIcon};