import PropTypes from 'prop-types';

import { Item, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div>
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <Item key={id}>
                            {name}: {number}
                            <Button
                                type="button"
                                onClick={() => onDeleteContact(id)}
                            >Delete</Button>
                        </Item>
                    );
                })}
            </ul>
        </div>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};