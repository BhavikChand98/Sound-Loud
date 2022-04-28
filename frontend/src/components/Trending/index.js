import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { getSongs } from "../../store/songs";

const Trending = ({ songs }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  console.log("Hello Trending Component!");

  useEffect(() => {
    dispatch(getSongs(songs));
  }, [dispatch]);

  
  return (
    <p1>
      Discover Index Component
    </p1>
  )
}


export default Trending;