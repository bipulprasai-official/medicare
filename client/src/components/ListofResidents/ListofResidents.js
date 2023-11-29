import React from 'react'
import './listofresidents.scss'
import { Link } from 'react-router-dom'

const ListofResidents = ({item}) => {
  return (
    <Link to={`/resident/${item._id}`}>
<div className="resident-card">
<div className="resident-img">
<img src={item.photo} alt={item.name} className="res-photo"/>
</div>
<h2>{item.name}</h2>
</div>
    </Link>
  )
}

export default ListofResidents