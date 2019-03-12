import React from "react";
import { Form, } from "semantic-ui-react";

class ContactForm extends React.Component {
  state = { name: "", description: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ name: "", description: "", });
    // Call a function to add a contact to state
    // Where should this function be defined???
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 

  
  render() {
    return (
      
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          
          <Form.Input 
            fluid 
            label="State" 
            placeholder="State" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            label="Capital" 
            placeholder="Capital" 
            name="Capital" 
            value={this.state.phone} 
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default ContactForm;