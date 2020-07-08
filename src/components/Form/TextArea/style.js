import styled from "styled-components";

export const TextArea = styled.textarea`
  border: none;
  border-radius: 2px;
  box-shadow: none;
  margin: 10px 0 0 0;
  padding: 5px 10px;
  width: 50%;
  font-family: "Lato", sans-serif;
  font-size: 15px;
  @media (max-width: 600px) {
    width: 100%;
  }

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
