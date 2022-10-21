import React from "react";
import { Route } from "react-router-dom";
import DisplayPage from "../Pages/DisplayPage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormInput.css";

const FormInput = () => {
    const registetHandler =()=>{
       

    }
  return (
    <Form onSubmit={registetHandler}>
      <div className="top-container">
        <h1>Student Portal</h1>
      </div>
      <div className="main-container">
        <div>
          <div>
            <label htmlFor="sname"> Student Name: </label>
            <input
              type="text"
              id="sname"
              className="sdata"
              placeholder="Enter your Name"
            />
          </div>

          <div>
            <label htmlFor="semail"> Student Email: </label>
            <input
              type="email"
              id="semail"
              className="sdata"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label htmlFor="snumber"> Student Mobile Number: </label>
            <input
              type="number"
              min="1"
              max="10"
              id="snumber"
              className="sdata"
            />
          </div>
          <div className="gender-container">
            <label>Gender: </label>
            <div className="male-container">
              <input type="radio" name="gender" id="smale" value="Male" />
              <label htmlFor="smale">Male</label>
            </div>
            <div className="female-container">
              <input type="radio" name="gender" id="sfemale" value="Female" />
              <label htmlFor="sfemale">Female</label>
            </div>
          </div>

          <div>
            <label>Department</label>
            <select id="sdepartment">
              <option value=" ">Please Choose an Option</option>
              <option value="ComputerScience">Computer Science</option>
              <option value="InformationTechnology">
                Information Technology
              </option>
              <option value="DataScience">Data Science</option>
              <option value="DevOps">Dev Ops</option>
            </select>
          </div>
          <div className="checkbox-conatiner">
            <label htmlFor="scheckbox"> Do you agree to submit? </label>
            <input type="checkbox" />
          </div>
          <div className="buttons-container">
            <Button className="register-button" variant="secondary">
              Register
            </Button>
            <Button className="cancel-button" variant="secondary">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default FormInput;
