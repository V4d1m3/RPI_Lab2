import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Video from "./video";
import s from "./Videos.module.css";

const Videos = (props) => {
  return (
    <div className={s.wrapper}>
      <h1>{"videos"}</h1>
      <Container className={s.videos}>
        {props.links.map((link, i) => (
          <Video key={i} link={link} />
        ))}
      </Container>
    </div>
  );
};

export default Videos;
