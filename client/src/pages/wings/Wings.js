import React, { useEffect, useState } from "react";
import "./wings.scss";
import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../Context/categoryContext";
import Loading from "../../components/Loading/Loading";


const Wings = () => {
  const [selectedParentCategory, setSelectedParentCategory] = useState("");
  const navigate = useNavigate();
  const { isLoading, category } = useCategoryContext();


  const getSelectedCategory= (e) => {
    const parentId = e.target.value;
    setSelectedParentCategory(parentId);
  };

  const handlefetch = () =>{
 navigate(`/residents/${selectedParentCategory}`)
  }
  


  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="wings-wrapper">
      <div className="form">
        <label>Select your Wings/block:</label>
        <>    <select className="select-wings" onChange={getSelectedCategory}>
        <option selected>---select Wings ---</option>
          {category?.categoryList?.map((parentCategory) => {
          
            return (
              <option key={parentCategory._id} value={parentCategory._id}>{parentCategory.name}</option>
            );
          })}
        </select></>
        <button className="btn-submit" onClick={handlefetch}>
          show
        </button>
      </div>
    </div>
  );
};

export default Wings;
