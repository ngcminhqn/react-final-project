import React, { useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

export default function Loading({ isLoading = false }) {
  const ref = React.useRef(null);
  useLayoutEffect(() => {
    const element = document.getElementById("loading");
    ref.current = element
  
  
  }, [ref.current])

  useEffect(() => {
    if (ref.current) {
     if (isLoading) {
       ref.current.style.visibility = 'visible'
     }else{
      ref.current.style.visibility = 'hidden'
     }
    } 
  
  }, [isLoading,ref.current])
  
  return<></>
}
