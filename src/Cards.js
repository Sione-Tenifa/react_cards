import React from 'react';
import './App.css'
import {  Table, Card } from "semantic-ui-react";
import Flash from './Flash'


const Cards = ({ cards }) => (
  
 
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>State</Table.HeaderCell>
       {/* <Table.HeaderCell>Capital</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
         cards.map( card => ( 
         <Flash key={card.id} {...card} />
         ))
      }
    </Table.Body>
  </Table>
  
);

export default Cards;