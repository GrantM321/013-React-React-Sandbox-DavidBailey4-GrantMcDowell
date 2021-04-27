import React from 'react'
import './Header.css'

export default function Header({title}) {
  //  const title = "Geography"
  return (
    <div>
    <h1> <a href="#">{title}</a> </h1>
    </div>
          );
}