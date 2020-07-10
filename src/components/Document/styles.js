import styled from "@react-pdf/styled-components";

export const Page = styled.Page`
  flex-direction: column;
  background: #fff;
  align-items: center;
`;

export const CategoryBox = styled.View`
  padding: 0px 12% 10px;
`;

export const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Divider = styled.View`
  background: #ccc;
  height: 2px;
  margin: 20px 12%;
`;

export const LogoBox = styled.View`
  margin: 10px 0px;
  width: 100%;
  align-items: center;
`;

export const Product = styled.View`
  margin: 10px 0px;
  width: 200px;
  align-items: center;
`;

export const Category = styled.Text`
  margin: 0px 0px 5px;
  color: #320054;
  font-weight: bold;
  font-size: 32px;
`;
export const Name = styled.Text`
  margin: 5px 0px;
  font-size: 18px;
`;
export const Price = styled.Text`
  margin: 5px 0px;
  font-weight: bold;
  font-size: 18px;
`;

export const Email = styled.Text`
  text-align: center;
  margin: 5px auto;
  color: #320054;
  font-size: 18px;
`;

export const Footer = styled.View`
  padding: 5px 20px;
`;

export const StyledText = styled.Text`
  margin-bottom: 5px;
  font-size: 14px;
`;
