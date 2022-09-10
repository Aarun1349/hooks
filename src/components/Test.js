import React from "react";
// import {useEffect} from 'react'
function Test() {
  const str = "I am Arun. I am from Delhi";
  const splitString = str.split(" ");
  let obj = {};
  let word = [];
  for (let i = 0; i < splitString.length; i++) {
    if (word === "" || word != splitString[i]) {
        if(!word.includes(splitString[i]))
      word.push(splitString[i]);
      console.log(word);
    }
  }

  return (
    <>
      <div>Test</div>
      {}
    </>
  );
}

export default Test;
