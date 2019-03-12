import React from 'react';
import './App.css'
import {  Table, } from "semantic-ui-react";
import Card from './Card'
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
         <Card key={card.id} {...card} />
         ))
      }
    </Table.Body>
  </Table>
);

export default Cards;