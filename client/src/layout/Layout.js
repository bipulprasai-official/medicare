import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Residentsidebar from '../components/ResidentDash/Residentsidebar'
import ResidentTopbar from '../components/ResidentDash/ResidentTopbar'
import { usePatientContext } from '../Context/patientContext'

const Layout = ({children}) => {

  const { getSinglePatient, singlepatient,issinglepatientLoading} = usePatientContext() 
  const {patientId} = useParams();
  // console.log(singlepatient)
  useEffect(()=>{
    getSinglePatient(patientId)
  },[])

  return (
    <div className="container">
    <Navbar />
    <div className="residentsprofile-wrapper">
      <div className="resident-sidebar">
        <Residentsidebar patientId={singlepatient._id} dateofbirth={singlepatient.dateofbirth} name={singlepatient.name} photo={singlepatient.photo} />
      </div>
      <div className="resident-contents">
        <div className="resident-topbar">
          <ResidentTopbar patientId={singlepatient._id} />
        </div>
        <div className="resident-context">
{children}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Layout