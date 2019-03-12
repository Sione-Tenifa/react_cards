import React from "react";
import { Button, Table, } from "semantic-ui-react";



const Card = ({ name, description }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    {/* <Table.Cell>{description}</Table.Cell> */}
    <Table.Cell>
      <Button color="blue">
        Flip
      </Button>
    </Table.Cell>
  </Table.Row> 
);

export default Card;