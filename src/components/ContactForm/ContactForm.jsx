import PropTypes from 'prop-types';
import { Component } from 'react';

import { Container, Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { onSubmit, contacts } = this.props;
        const { name, number } = this.state;
        const duplicateName = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase());

        if (duplicateName) {
            alert(`${name} is already in contacts`);
            this.setState({ name: '', number: '', });
            return;
        }

        onSubmit(name, number);
        this.setState({ name: '', number: '', });
    };

    render() {
        const { name, number } = this.state;

        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Label>
                        Name
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            onChange={this.handleChange}
                        />
                    </Label>
                    <Label>
                        Number
                        <Input
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            onChange={this.handleChange}
                        />
                    </Label>
                    <Button type="submit">Add contact</Button>
                </Form>
            </Container>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.array,
};