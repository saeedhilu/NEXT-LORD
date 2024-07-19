import React from "react";
import '../style/navBar.css'
const ActiveStatus = () => {
  return (
    <div className="p-10 ">
        <hr className="" / >
      <div className="flex justify-between ml-20 mr-20 mt-4">
        <div className="div">
          <h1 className="text-4xl font-semibold">50K</h1>
          <p>Our Active User</p>
        </div>
        <div className="div">
          <h1 className="text-4xl font-semibold">43K</h1>
          <p>Our Active User</p>
        </div>
        <div className="div">
          <h1 className="text-4xl font-semibold">38K</h1>
          <p>Our Active User</p>
        </div>
        <div className="div">
          <h1 className="text-4xl font-semibold">34K</h1>
          <p>Our Active User</p>
        </div>
      </div>
    <div className="mt-4">
    <hr />

    </div>
     
    </div>
  );
};
export default ActiveStatus;
