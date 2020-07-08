import styled from "styled-components";

export const InputText = styled.input`
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-family: "Lato", sans-serif;
  font-size: 15px;
  border: 1px solid #ddd;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: "#999";
    @media (max-width: 600px) {
      color: #320054;
      font-weight: bold;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: #d8000c;
`;
