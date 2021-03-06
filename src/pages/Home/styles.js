import styled from "styled-components";
import StyledButton from "../../components/Button";

export const Background = styled.div`
  width: 100vw;
  height: 100vw;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 80vw;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(StyledButton)`
  margin: 20px auto;
  padding: 10px;
`;

export const StyledText = styled.span`
  font-family: "Lato", sans-serif;
  margin: 5px auto;
  span {
    color: #320054;
    font-weight: bold;
    font-size: 20px;
    @media (max-width: 600px) {
      font-size: 1.2em;
    }
  }
`;

export const ErrorText = styled.span`
  font-family: "Lato", sans-serif;
  margin: 5px auto;
  color: #d8000c;
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

export const FileInput = styled.input.attrs({
  type: "file",
})`
  margin: 0px auto 20px;
`;
