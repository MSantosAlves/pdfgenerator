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
  Price,
  LogoBox,
  Email,
  Footer,
  StyledText,
  Divider,
} from "./styles";

// import TestImg from "../../assets/test.jpg";

// const layoutTest = {
//   Hair: [
//     { name: "Hair 1", price: "32,90" },
//     { name: "Hair 2", price: "22,90" },
//     { name: "Hair 3", price: "16,90" },
//   ],
//   Make: [
//     { name: "Make 1", price: "32,90" },
//     { name: "Make 1", price: "32,90" },
//   ],
//   Skin: [{ name: "Skin 1", price: "32,90" }],
//   Sombra: [
//     { name: "Sombra 1", price: "32,90" },
//     { name: "Sombra 2", price: "22,90" },
//     { name: "Sombra 3", price: "16,90" },
//     { name: "Sombra 4", price: "16,90" },
//     { name: "Sombra 5", price: "16,90" },
//   ],
// };

// Create Document Component
const MyDocument = ({ data, user }) => (
  <Document>
    {console.log("doc products", data)}

    <Page size="A4" style={{ border: "1px solid red" }}>
      <LogoBox>
        <Image
          src={"/LogoGeral.jpg"}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
            marginBottom: "40px",
          }}
        />
      </LogoBox>
      {Object.keys(data).map((category) => {
        return (
          <>
            <CategoryBox key={category}>
              <Category>{category}</Category>
              <Grid>
                {data[category].map((product) => (
                  <Product key={product.name}>
                    <Image
                      src={product.image.base64}
                      style={{
                        width: "200x",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <Name>{product.name}</Name>
                    <Price>R$ {product.price}</Price>
                  </Product>
                ))}
              </Grid>
            </CategoryBox>
            <Divider />
          </>
        );
      })}
      {user && <Email>{user.email}</Email>}
      <Footer>
        <StyledText>
          Gostou das dicas? Compre os produtos recomendados no site de sua
          preferência e receba R$10,00 na sua conta para cada R$100,00 em
          compras de dermocosméticos.
        </StyledText>
        <StyledText>
          Basta enviar uma imagem do comprovante de compra para
          marketing@encontrebeleza.com e os dados da sua conta para depósito.
        </StyledText>
        <StyledText>Limitado ao pagamento de R$20,00 por CPF.</StyledText>
        <StyledText>
          Importante: O depósito será realizado no mesmo CPF que consta na nota
          fiscal de compra do dermocosmético.
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
