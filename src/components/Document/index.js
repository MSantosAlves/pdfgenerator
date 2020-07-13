import React from "react";
import {
  Document,
  PDFDownloadLink,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";

import { Button } from "../../pages/Home/styles";
import {
  Page,
  Category,
  CategoryBox,
  Grid,
  Product,
  Name,
  StepGrid,
  Price,
  LogoBox,
  Email,
  Footer,
  StyledText,
  StepBox,
  // ------,
  BannerContainer,
  ImageContainer,
  RoutinesText,
  StepGridContainer,
  BannerTextContainer,
  Divider,
  HighlightedBannerText,
  BannerText,
  ProductBox,
  SectionTitle,
  StepTitle,
  StepText,
} from "./styles";

import TestImg from "../../assets/images/produtoTeste.jpg";
import Banner from "../../assets/images/banner.jpg";
import Passo1 from "../../assets/images/passo1.jpeg";
import Passo2 from "../../assets/images/passo2.jpeg";
import Passo3 from "../../assets/images/passo3.jpeg";
import Passo4 from "../../assets/images/passo4.jpeg";
import Passo4Night from "../../assets/images/passo4Night.jpeg";
import Passo5 from "../../assets/images/passo5.jpeg";
import Passo6 from "../../assets/images/passo6.jpeg";
import Logo from "../../assets/images/eb_logo5.png";

// const data = {
//   "Limpeza facial": [{ name: "Hair 1", price: "32,90" }],
//   "tônico/água micelar ": [{ name: "Make 1", price: "32,90" }],
//   "vitamina c": [{ name: "Skin 1", price: "32,90" }],
//   antissinais: [{ name: "Sombra 1", price: "32,90" }],
//   "hidratante facial": [{ name: "Sombra 1", price: "32,90" }],
//   "protetor solar facial": [{ name: "Sombra 1", price: "32,90" }],
//   "protetor solar facial 2": [{ name: "Sombra 1", price: "32,90" }],
//   "protetor solar facial 3": [{ name: "Sombra 1", price: "32,90" }],
//   "protetor solar facial 4": [{ name: "Sombra 1", price: "32,90" }],
//   "protetor solar facial 5": [{ name: "Sombra 1", price: "32,90" }],
// };

const mourningSteps = [
  {
    title: "Passo 1",
    content: "Limpar com sabonete ou gel de limpeza",
    image: Passo1,
  },
  {
    title: "Passo 2",
    content: "Aplicar água micelar",
    image: Passo2,
  },
  {
    title: "Passo 3",
    content: "Aplicar Vitamina C",
    image: Passo3,
  },
  {
    title: "Passo 4",
    content: "Aplicar hidratante",
    image: Passo4,
  },
  {
    title: "Passo 5",
    content: "Aplicar	protetor solar",
    image: Passo5,
  },
  {
    title: "Passo 6",
    content: "Aplicar reparador",
    image: Passo6,
  },
];

const nightSteps = [
  {
    title: "Passo 1",
    content: "Limpar com sabonete ou gel de limpeza",
    image: Passo1,
  },
  {
    title: "Passo 2",
    content: "Aplicar tônico",
    image: Passo2,
  },
  {
    title: "Passo 3",
    content: "Aplicar os produtos para tratamento, como antissinais",
    image: Passo3,
  },
  {
    title: "Passo 4",
    content: "Aplicar produtos para a área dos olhos",
    image: Passo4Night,
  },
  {
    title: "Passo 5",
    content: "Aplicar hidratante",
    image: Passo4,
  },
];

// Create Document Component
const MyDocument = ({ data, user }) => (
  <Document>
    {console.log("doc products", data)}

    <Page size="A4">
      <BannerContainer img={Banner}>
        <Image
          src={Banner}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            opacity: "0.5",
          }}
        />
        <LogoBox>
          <Image
            src={Logo}
            style={{ width: "250px", height: "120px", objectFit: "contain" }}
          />
        </LogoBox>
        <BannerTextContainer>
          <HighlightedBannerText>
            Veja suas recomendações de dermocosméticos.
          </HighlightedBannerText>
          <BannerText>
            Siga até o fim e descubra como ganhar até R$ 20,00 pela compra.
          </BannerText>
        </BannerTextContainer>
      </BannerContainer>
      {Object.keys(data).map((category, index) => {
        const keys = Object.keys(data);
        const size = keys.length;
        return (
          <>
            <CategoryBox key={category} break={index === 2}>
              <Category>{category}</Category>
              <ProductBox>
                {data[category].map((product) => (
                  <Product key={product.name}>
                    <Image
                      src={product.image.base64}
                      style={{
                        width: "150px",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Name>{product.name}</Name>
                    <Price>R$ {product.price}</Price>
                  </Product>
                ))}
              </ProductBox>
            </CategoryBox>
            {index !== size - 1 && <Divider />}
          </>
        );
      })}
      <SectionTitle break>Rotina diária de cuidados com a pele</SectionTitle>
      <RoutinesText style={{ textAlign: "center" }}>Passo a passo</RoutinesText>
      <Divider style={{ marginTop: "5px" }} />
      <RoutinesText
        style={{ marginBottom: "20px", textTransform: "uppercase" }}
      >
        Cuidados matinais
      </RoutinesText>
      <StepGridContainer>
        <StepGrid>
          {mourningSteps.map((step) => {
            return (
              <StepBox step={step.title}>
                <Image
                  src={step.image}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                />
                <StepTitle>{step.title}</StepTitle>
                <StepText>{step.content}</StepText>
              </StepBox>
            );
          })}
        </StepGrid>
      </StepGridContainer>
      <SectionTitle break>Rotina diária de cuidados com a pele</SectionTitle>
      <RoutinesText style={{ textAlign: "center" }}>Passo a passo</RoutinesText>
      <Divider style={{ marginTop: "5px" }} />
      <RoutinesText
        style={{ marginBottom: "20px", textTransform: "uppercase" }}
      >
        Cuidados noturno
      </RoutinesText>
      <StepGridContainer>
        <StepGrid>
          {nightSteps.map((step) => {
            return (
              <StepBox step={step.title}>
                <Image
                  src={step.image}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                />
                <StepTitle>{step.title}</StepTitle>
                <StepText>{step.content}</StepText>
              </StepBox>
            );
          })}
        </StepGrid>
      </StepGridContainer>
      <SectionTitle break style={{ textAlign: "left", fontSize: "16px" }}>
        Ganhe R$10,00 nas compras acima de R$150,00 ou R$20,00 nas compras acima
        de R$200,00.
      </SectionTitle>
      <Divider style={{ marginTop: "5px" }} />
      <Footer>
        <StyledText
          style={{ textDecoration: "underline", marginBottom: "40px" }}
        >
          REGRAS:
        </StyledText>
        <StyledText>
          1) Basta fazer uma compra de produtos recomendados pela Encontre
          Beleza no seu site de preferência.
        </StyledText>
        <StyledText>
          2) Enviar um email para marketing@encontrebeleza.com com uma impressão
          do seu pedido de compra, com seus dados pessoais e dados da compra
          <span style={{ textDecoration: "underline" }}>legíveis.</span>
        </StyledText>
        <StyledText>
          3) Incluir no mesmo email o seu Nome Completo, Banco, Agência, Conta e
          CPF para que possamos efetuar o depósito.
        </StyledText>
        <StyledText>
          4) A solicitação para depósito, com envio dos dados, deverá ser
          realizada até às 23h59 do dia 17/07/2020.
        </StyledText>
        <StyledText>
          <span style={{ textDecoration: "underline" }}>Importante:</span>{" "}
          promoção limitada a R$ 20,00 por CPF.
        </StyledText>
      </Footer>
    </Page>
  </Document>
);

export const DownloadLink = ({ data }) => (
  <div>
    <PDFDownloadLink
      document={<MyDocument data={data} />}
      fileName="recomendacoes.pdf"
    >
      <Button border primary>
        Baixar PDF
      </Button>
    </PDFDownloadLink>
  </div>
);

export const Preview = ({ data, user }) => (
  <PDFViewer style={{ width: "100%", minHeight: "900px" }}>
    <MyDocument data={data} user={user} />
  </PDFViewer>
);
