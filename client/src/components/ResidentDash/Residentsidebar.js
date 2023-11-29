import React from "react";
import "./residentsidebar.scss";
import { MdOutlineCake } from "react-icons/md";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { MdMedicalServices } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";

const Residentsidebar = ({name,dateofbirth,photo,patientId}) => {

  let isoDate = dateofbirth
  let birthdate = moment.utc(isoDate).format("MMM Do, YYYY");

  return (
    <div className="ressidebar-container">
      <div className="profile-imageholder">
        <img
          src={photo}
          alt="resident"
        />
      </div>
      <div className="profile-detail">
        <h4>{name}</h4>
        <p>
          <MdOutlineCake /> &nbsp; <span>{birthdate}</span>
        </p>
      </div>
      <div className="profile-sideitems">
        <ul>
          <Link to="/">
            <li>
              <BsFileEarmarkPersonFill />
              <span>about me</span>
            </li>
          </Link>
       
          <Link to={`/resident/${patientId}/progressnote`}>
            {" "}
            <li>
              <CgNotes />
              progress notes
            </li>
          </Link>
          <Link to="/">
            {" "}
            <li>
              <MdMedicalServices />
              Medical terms
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Residentsidebar;
