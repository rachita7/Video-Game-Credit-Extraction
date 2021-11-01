import { useEffect } from "react";


const PersonList = ({persons}) => {
    if (persons!=null){
    return (  
        <div className="person-list">
        <h4>{persons}</h4>
        </div>
    );}
    return(<h1>Empty person list!</h1>)
}
 
export default PersonList;