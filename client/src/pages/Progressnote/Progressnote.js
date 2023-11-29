import React, { useEffect, useState } from "react";
import "./progressnote.scss";
import Noteslist from "./Noteslist";
import Pagination from "../../components/pagination/Pagination";
import { useNotesContext } from "../../Context/progressNoteContext";
import { useParams } from "react-router-dom";

const Progressnote = () => {
  const [text,setText] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);


  const { getNoteByPatient,notes,isnotesLoading,addNotesTopatient} = useNotesContext() 
  const {patientId} = useParams();
  // console.log(patientId)
  useEffect(() => {
    getNoteByPatient(patientId)
  }, []);
  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = Array.from(notes).slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlechangeText = (e)=>{
setText(e.target.value);
  }
  const newData = {
    notes:text,
    patient:patientId
  }
  const handleSubmitNote = (e) =>{
    e.preventDefault(); 
    addNotesTopatient(newData)   
  }
  return (

        <div className="resident-contents">

          <div className="resident-context">
            <div className="notes-list">
              <Noteslist posts={currentPosts}/>
            </div>
            <div>
              <Pagination
                postsPerPage={postsPerPage}
                totalPages={notes.length}
                paginate={paginate}
  />
            </div>
            <div className="input-text">
            <form onSubmit={handleSubmitNote} className="formnotes">
            <textarea
            cols="34"
            rows="6"
            placeholder="Promo Text"
            autoComplete="off"
            autoCorrect="off"
            autoFocus={true}
            value={text}
            onChange={handlechangeText}
          ></textarea>
          <button type="submit" className="btn-save">Save Note</button>
            </form>
            </div>
          </div>
        </div>
  

  );
};

export default Progressnote;
