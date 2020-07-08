import styled from "styled-components";
/**
 * @param border => true, white border,
 * @param round => true -> border-radius 20px
 * @param primary => background -> #320054
 */
const Button = styled.button`
  background: ${(props) =>
    props.primary
      ? "#320054 0% 0% no-repeat padding-box"
      : "#845891 0% 0% no-repeat padding-box"};
  border-radius: ${(props) => (props.round ? "20px" : "0px")};
  opacity: 1;
  text-align: left;
  letter-spacing: 0px;

  color: #ffffff;
  opacity: 1;
  border: ${(props) => (props.border ? "1px solid #FFFFFF" : "none")};
  padding-left: 27px;
  padding-right: 27px;

  :disabled {
    background: #f2f2f2 0% 0% no-repeat padding-box;
    color: #999;
    border: 1px solid #999;
    cursor: not-allowed;
  }

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export default Button;
