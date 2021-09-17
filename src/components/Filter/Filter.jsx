import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
    return (
        <Label>
            Filter contacts by name
            <Input
                type="text"
                value={filter}
                onChange={onChange} />
        </Label>
    );
};