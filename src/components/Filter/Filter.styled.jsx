import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 200px;
  border-radius: 4px;
  padding: 2px 7px;
  height: 20px;
  border: 2px solid black;
  margin-top: 7px;
  &:focus {
    border-radius: 4px;
    outline: none;
    border: 2px solid rgb(73, 167, 230);
  }
`;