import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Modal, Image } from "semantic-ui-react";

import style from "./PageBody.module.css";

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      display: "none"
    };
  }

  handleClick = e => {
    e.preventDefault();
    alert("Hello, I work!");
  };

  render() {
    const cats = [
      {
        name: "Floyd",
        age: "1 year, 9 months",
        breed: "Domestic Short Hair",
        URL: "https://adopt.hssvmil.org/photos//lostfound/124997.jpg",
        adopt:
          "https://adopt.hssvmil.org/animal/animalDetails.asp?animalType=2%2C15&pagesize=15&s=adoption&searchTypeId=4&sortby=6&submitbtn=Find+Animals&task=view&tpage=1&%5Fgac=1%2E245686832%2E1578166093%2EEAIaIQobChMIgvC%5F49bq5gIVSdbACh0IGQwwEAAYASAAEgLJVPD%5FBwE&%3F0%26utm%5Fterm=adopt%5Fcats&%5Fga=2%2E102955776%2E1871070970%2E1578166093%2D59562760%2E1578166093&searchType=4&animalid=124997"
      },
      {
        name: "Katie",
        age: "7 years, 3 months",
        breed: "Domestic Short Hair",
        URL: "https://adopt.hssvmil.org/photos/lostfound/125933_th_600.jpg",
        adopt:
          "ttps://adopt.hssvmil.org/animal/animalDetails.asp?animalType=2%2C15&pagesize=15&s=adoption&searchTypeId=4&sortby=6&submitbtn=Find+Animals&task=view&tpage=1&_gac=1%2E245686832%2E1578166093%2EEAIaIQobChMIgvC_49bq5gIVSdbACh0IGQwwEAAYASAAEgLJVPD_BwE&%3F0%26utm_term=adopt_cats&_ga=2%2E102955776%2E1871070970%2E1578166093-59562760%2E1578166093&searchType=4&animalid=125933"
      },
      {
        name: "Garcia",
        age: "8 years, 3 months",
        breed: "Domestic Short Hair",
        URL: "https://adopt.hssvmil.org/photos/lostfound/125931_th_600.jpeg",
        adopt:
          "https://adopt.hssvmil.org/animal/animalDetails.asp?animalType=2%2C15&pagesize=15&s=adoption&searchTypeId=4&sortby=6&submitbtn=Find+Animals&task=view&tpage=1&%5Fgac=1%2E245686832%2E1578166093%2EEAIaIQobChMIgvC%5F49bq5gIVSdbACh0IGQwwEAAYASAAEgLJVPD%5FBwE&%3F0%26utm%5Fterm=adopt%5Fcats&%5Fga=2%2E102955776%2E1871070970%2E1578166093%2D59562760%2E1578166093&searchType=4&animalid=125931"
      },
      {
        name: "Oakley",
        age: "8 years, 11 months",
        breed: "Domestic Short Hair",
        URL: "https://adopt.hssvmil.org/photos/lostfound/121134_th_600.jpg",
        adopt:
          "https://adopt.hssvmil.org/animal/animalDetails.asp?animalType=2%2C15&pagesize=15&s=adoption&searchTypeId=4&sortby=6&submitbtn=Find+Animals&task=view&tpage=1&%5Fgac=1%2E245686832%2E1578166093%2EEAIaIQobChMIgvC%5F49bq5gIVSdbACh0IGQwwEAAYASAAEgLJVPD%5FBwE&%3F0%26utm%5Fterm=adopt%5Fcats&%5Fga=2%2E102955776%2E1871070970%2E1578166093%2D59562760%2E1578166093&searchType=4&animalid=121134"
      },
      {
        name: "Mickey",
        age: "10 years, 3 months",
        breed: "Domestic Shorthair",
        URL: "https://adopt.hssvmil.org/photos/lostfound/125932_th_600.jpg",
        adopt:
          "https://adopt.hssvmil.org/animal/animalDetails.asp?animalType=2%2C15&pagesize=15&s=adoption&searchTypeId=4&sortby=6&submitbtn=Find+Animals&task=view&tpage=1&%5Fgac=1%2E245686832%2E1578166093%2EEAIaIQobChMIgvC%5F49bq5gIVSdbACh0IGQwwEAAYASAAEgLJVPD%5FBwE&%3F0%26utm%5Fterm=adopt%5Fcats&%5Fga=2%2E102955776%2E1871070970%2E1578166093%2D59562760%2E1578166093&searchType=4&animalid=125932"
      }
    ];
    return (
      <>
        <div className={style.pageBody}>
          {this.props.children}
          {cats.map(cat => {
            return (
              <div id="Roxana">
                <h1>{cat.name}</h1>
                <Modal
                  as="a"
                  href="#"
                  trigger={<Image width="60%" src={cat.URL} alt="Cat" />}
                  closeIcon
                >
                  <Modal.Content image>
                    <Image src={cat.URL} alt="big cat" />
                  </Modal.Content>
                </Modal>
                {/* <button id="myBtn">Open Modal</button>

<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div> */}

                <p>{cat.age}</p>
                <p>{cat.breed}</p>
                <a href={cat.adopt}> Adopt me :D </a>
              </div>
            );
          })}
          {/* <h3>Start editing to see some magic</h3>
          <p>
            This is the beginning of your very own app! Begin making changes to
            the index.js file, along with the components to get a feel for how
            React apps are structured.
          </p> */}
        </div>
      </>
    );
  }
}
