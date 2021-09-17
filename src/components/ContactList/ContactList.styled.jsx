import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-weight: 500;
  font-size: 18px;
  border: 2px solid grey;
  border-radius: 4px;
  width: 360px;
  margin-top: 5px;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: none;
  font-size: 12px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 4px rgba(114, 81, 81, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
`;