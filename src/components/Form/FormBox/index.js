import styled from "styled-components";
import { Form } from "@unform/web";

export const FormBox = styled(Form)`
  width: 90vw;
  max-width: 900px;
  margin: 20px auto;
  padding: 40px 0;
  background: #eee;
  border: 1px solid #ddd;
  border-radius: 24px;
  box-shadow: 24px 24px 24px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

export const InputContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const FieldTitle = styled.span`
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  color: #320054;
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  margin-top: 20px;
`;

export const StyledMessage = styled.div`
  font-family: "Lato", sans-serif;
  margin: 20px auto;
  span {
    color: #320054;
    font-weight: bold;
    font-size: 28px;
    @media (max-width: 600px) {
      font-size: 1.2em;
    }
  }
`;
