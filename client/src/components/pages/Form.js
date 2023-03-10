import React, { useState } from "react";
import SignUpInfo from "./sendVerification";
import PersonalInfo from "./Tags";
import OtherInfo from "./userEditor";
import Other1 from "./OtherInfo.js";
import Other2 from "../Rewards";
import Other from "../Team";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    tags: "",
  });

  const FormTitles = ["Start your campaign", "Choose up a catagory to describe your business", "Campaign editor", "Campaign content"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if  (page === 1)  {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } 
    else if  (page === 2)  {
      return <Other1 formData={formData} setFormData={setFormData} />;
    } 
    else if  (page === 3)  {
      return <Other2 formData={formData} setFormData={setFormData} />;
    } 
    else {
        return <Other formData={formData} setFormData={setFormData} />;
      }
  };



  
  return (
    
    <div className="wrapper">
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - -1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - -1 ? "Submit" : "Next"}

          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Form;