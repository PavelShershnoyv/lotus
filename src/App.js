import { Component, createRef } from "react";
import classes from "./App.module.css";
import logo from "./assets/LOGO_LOTUS.svg";
import Card from "./components/Card/Card.js";

class App extends Component {
  state = {
    persons: [],
    value: "",
  };
  inputRef = createRef();

  async getPersons() {
    const url = "https://swapi.dev/api/people"; // Не стал убирать в env, чтобы Вам не создавать файл
    let response = await fetch(url);
    if (response.status >= 200 && response.status < 300) {
      let answer = await response.json();
      this.setState({ persons: answer["results"] });
    }
  }

  handleClick = () => {
    this.setState({ value: this.inputRef.current.value });
  };

  initInput = () => {
    if (!this.inputRef.current.value) {
      this.setState({ value: "" });
    }
  };

  componentDidMount() {
    this.getPersons();
  }

  render() {
    const { persons } = this.state;
    const { value } = this.state;
    return (
      <div className={classes.main}>
        <header className={classes.header}>
          <img src={logo} />
          LOTUS
        </header>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.control}>
              <input
                placeholder="Введите имя"
                ref={this.inputRef}
                onChange={this.initInput}
              />
              <button onClick={this.handleClick}>Найти</button>
            </div>

            <div className={classes.list}>
              {persons.length === 0 ? (
                <div>Загрузка...</div>
              ) : (
                persons
                  .filter((el) =>
                    el.name.toLowerCase().startsWith(value.toLowerCase())
                  )
                  .map((el) => {
                    return <Card person={el} />;
                  })
              )}
              {/* {persons
                .filter((el) =>
                  el.name.toLowerCase().startsWith(value.toLowerCase())
                )
                .map((el) => {
                  return <Card person={el} />;
                })} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
