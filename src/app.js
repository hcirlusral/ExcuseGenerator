/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["My", ""];
  let subject = ["grandma", "cat", "giraffe", "teacher"];
  let action = [
    "ate my",
    "threw my",
    "stole my",
    "yelled at my",
    "ran over my"
  ];
  let possession = ["homework", "toe", ""];
  let where = ["on the street", "in my bathroom", "in my car", "on my roof"];

  let pronounIndex = 0;
  let subjectIndex = 0;
  let actionIndex = 0;
  let possessionIndex = 0;
  let whereIndex = 0;

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
