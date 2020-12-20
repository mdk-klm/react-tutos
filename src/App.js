import React, { Component } from "react";
import Table from "./Table";
import OtherTable from "./OtherTable";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],

    animals: [
      {
        name: "georges",
        genre: "dog",
      },
      {
        name: "fabrice",
        genre: "cat",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    const { animals } = this.state;

    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <OtherTable animalData={animals} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
