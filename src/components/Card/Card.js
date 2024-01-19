import { Component } from "react";
import classes from "./Card.module.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classes.block}>
        <div>Имя: {this.props.person.name}</div>
        <div>Рост: {this.props.person.height}</div>
        <div>Возраст: {this.props.person.birth_year}</div>
        <div>
          Пол:{" "}
          {this.props.person.gender === "n/a"
            ? "Не указан"
            : this.props.person.gender}
        </div>
      </div>
    );
  }
}

export default Card;
