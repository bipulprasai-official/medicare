import React, { useEffect } from "react";
import "./residents.scss";
import ListofResidents from "../../components/ListofResidents/ListofResidents";
import { MdOutlineNavigateNext } from "react-icons/md";
import residents from "../../assets/residentsdata";
import { useParams } from "react-router-dom";
import { usePatientContext } from "../../Context/patientContext";

const Residents = () => {
 const { getPatientByBlock, patient,ispatientLoading} = usePatientContext() 
 const {categoryId} = useParams();

 useEffect(()=>{
   getPatientByBlock(categoryId)
 },[])


  return (
      <div className="residents-container">
      <div className='pagenavigation'>
      <p>Block 1 <MdOutlineNavigateNext/> list of residents</p>
      </div>
      <div className='residents-grid'>


 {patient.map(item =>(
        <ListofResidents item={item} key={item._id} />
     ))}
   
      </div>
 
       
      </div>

  );
};

export default Residents;
