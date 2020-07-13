import styled from "@react-pdf/styled-components";

export const Page = styled.Page`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const BannerContainer = styled.View`
  width: 100vw;
  height: 200px;
  position: relative;
  background-color: #a16bac;
  margin-bottom: 20px;
`;

export const LogoBox = styled.View`
  position: absolute;
  left: 5vw;
`;

export const BannerTextContainer = styled.View`
  flex-direction: column;
  top: 100px;
  position: absolute;
  left: 5vw;
  width: 300px;
`;

export const HighlightedBannerText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
`;

export const BannerText = styled.Text`
  margin-top: 5px;
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
`;

export const CategoryBox = styled.View`
  width: 80vw;
  height: 28vh;
  margin-left: 10vw;
`;

export const Category = styled.Text`
  color: #85598b;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Divider = styled.View`
  width: 80vw;
  height: 5px;
  background: #85598b;
  margin: 20px 0;
  margin-left: 10vw;
`;

export const ProductBox = styled.View`
  width: 100%;
  align-items: center;
`;

export const Product = styled.View`
  width: 250px;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.Text`
  width: 100%;
  text-align: center;
  margin: 5px 0px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;
export const Price = styled.Text`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  font-weight: bold;
`;

export const SectionTitle = styled.Text`
  color: #85598b;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  width: 80vw;
  text-align: center;
  margin: 10vw 10vw 0px;
`;

export const RoutinesText = styled.Text`
  color: #85598b;
  font-size: 18px;
  font-weight: bold;
  width: 80vw;
  text-align: left;
  margin-left: 10vw;
`;

export const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StepGridContainer = styled.View`
  width: 80vw;
  margin-left: 10vw;
`;

export const StepGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 80px;
`;

export const StepBox = styled.View`
  width: 30%;
  align-items: center;
  margin-right: ${(props) =>
    props.step === "Passo 3" || props.step === "Passo 6" ? "0px" : "5%"};
  margin-bottom: 25px;
`;

export const StepTitle = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: #85598b;
  font-size: 14px;
  width: 100%;
  text-align: center;
  margin-top: 5px;
`;

export const StepText = styled.Text`
  color: #85598b;
  font-weight: bold;
  font-size: 12px;
  width: 100%;
  text-align: center;
  margin-top: 8px;
`;

export const Footer = styled.View`
  width: 80vw;
  margin-left: 10vw;
`;

export const StyledText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`;
