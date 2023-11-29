import React from "react";
import moment from 'moment';

const Noteslist = ({posts,loading}) => {

  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <ul className="list-group">
   {posts.map(post =>(
    <li key={post._id}>
    <p className="note-time">{moment(`${post.createdAt}`).format('YYYY-MM-DD h:mm:ss a')}</p>
    <p className="note-body">{post.notes}</p>
    </li>
   ))}
    </ul>
  );
};

export default Noteslist;
