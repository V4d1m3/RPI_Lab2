import React from "react";
import Card from "../card/Card";
import s from "./List.module.css";

function List(props) {
  return (
    <div className={s.poets}>
      {props.filteredPersons.map((person, i) => (
        <Card key={i} person={person} />
      ))}
    </div>
  );
}

export default List;
