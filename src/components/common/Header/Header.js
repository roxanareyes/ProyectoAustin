import React from "react";
import ReactDOM from "react-dom";
import { Image } from "semantic-ui-react";

import style from "./Header.module.css";

export default class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className={style.header}>
          CatTube
          <Image
            style={{ borderRadius: "50px" }}
            src="https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-320-80.jpg"
            alt="kitten"
            width="10%"
            align="right"
          />
        </div>
      </div>
    );
  }
}
