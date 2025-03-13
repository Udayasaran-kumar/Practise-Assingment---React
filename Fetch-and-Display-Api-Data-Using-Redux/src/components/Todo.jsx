import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from '../redux/action';

const Todo = () => {
    const dispatch=useDispatch();
    const{posts,loading,error}=useSelector((state)=>state);
    useEffect(()=>{
        dispatch(fetchData());
    },[])
    if(loading){
        return (<>
        Loading....
        </>);
    }
    if(error){
        return(<>{error}</>);
    }
  return (
    <div>
      {posts.map((post)=>(
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div> 
      ))}
    </div>
  );
};

export default Todo;
