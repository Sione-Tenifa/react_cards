import React, { Component } from 'react';
import { Container, Header, } from "semantic-ui-react"; 
import Cards from './Cards'
import './App.css';

class App extends Component {

  state = {
      cards: [ {id: 1, name: "California", description: "Sacramento", }], backCard: [ ]
  }
  render() {
    return (
      <div >
      <Container textAlign='center' style={{paddingTop: '25px',} }>
      <Header as="h1" block color="olive">Flash Cards</Header>
        <Cards cards={this.state.cards}/>
      </Container>
        
      </div>
    );
  }
}

export default App;
