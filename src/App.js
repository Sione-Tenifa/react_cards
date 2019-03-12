import React, { Component } from 'react';
import { Container, Header, } from "semantic-ui-react"; 
import Cards from './Cards'
import './App.css';
import ContactForm from "./ContactForm";

class App extends Component {

  state = {
      cards: [ {id: 1, name: "California", description: "Sacramento", }], backCard: [ ]
  }


  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [card, ...this.state.cards], });
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card
    });
    this.setState({ cards: [...cards], });
  };
  
  render() {
    return (
      <div >
      <Container textAlign='center' style={{paddingTop: '25px',} }>
      <Header as="h1" block color="olive">Flash Cards</Header>
        <br/>
        <h1>Add Card</h1>
        <br/>
        <ContactForm add={this.addCard}/>
        <br/>
        <Cards cards={this.state.cards}  remove={this.removeCard} />
      </Container>
        
      </div>
    );
  }
}

export default App;
