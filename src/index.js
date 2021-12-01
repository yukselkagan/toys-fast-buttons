import React from 'react'
import styles from './styles.module.css'



export const ToysButton1 = ({ children, type }) => {

  let targetType = "";

  switch(type) {
    case "primary":
      targetType = styles.toysbuttonprimary;
      break;
    case "default":
      targetType = "";
      break;
    case "dashed":
      targetType = styles.toysbuttondashed;
      break;
    case "text":
      targetType = styles.toysbuttontext;
      break;
    case "link":
      targetType = styles.toysbuttonlink;
      break;
    default:
      targetType = "";
  }

  
  let className = styles.toysbutton+" "+targetType;


  return (
  <button className={className} >{children}</button>
  )

}


