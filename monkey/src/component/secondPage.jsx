import React from "react";
import ActiveStatus from "./ActiveStatus";
import '../style/navBar.css'
import ImageSecondPage from "./iamgeSecondpage";
const SecondPage=()=>{
    return(
        <div className="active">
                    <ActiveStatus/>
                    <ImageSecondPage/>

        </div>
    )
}
export default SecondPage;