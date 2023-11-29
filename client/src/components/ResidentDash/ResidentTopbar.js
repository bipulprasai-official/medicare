import React from 'react'
import { Link } from 'react-router-dom'
import {CiGlass} from 'react-icons/ci'
import {GiKnifeFork} from 'react-icons/gi'
import {GiBackPain} from 'react-icons/gi'
import {VscPerson} from 'react-icons/vsc'
import {FiAlertTriangle} from 'react-icons/fi'
import './residentTopbar.scss'
const ResidentTopbar = ({patientId}) => {
  return (
    <nav>
  <Link to={`/resident/${patientId}/fluidchart`}><CiGlass/><span>Fluid Chart</span></Link>
  <Link to={`/resident/${patientId}/foodchart`}><GiKnifeFork/><span>Food Chart</span></Link>
  <Link to={`/resident/${patientId}/painchart`}><GiBackPain/><span>Pain Chart</span></Link>
  <Link to={`/resident/${patientId}/behaviourchart`}><VscPerson/><span>Behaviour Chart</span></Link>
  <Link to={`/resident/${patientId}/others`}><FiAlertTriangle/><span>Important</span></Link>
    </nav>
  )
}

export default ResidentTopbar