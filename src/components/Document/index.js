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
} from "./styles";

// Create Document Component
const MyDocument = ({ data, user }) => (
  <Document>
    {console.log("doc products", data)}

    <Page size="A4">
      <LogoBox>
        <Image
          src={"/LogoGeral.jpg"}
          style={{ width: "100px", height: "100px", objectFit: "contain" }}
        />
      </LogoBox>
      {Object.keys(data).map((category) => {
        return (
          <CategoryBox key={category}>
            <Category>{category}</Category>
            <Grid>
              {data[category].map((product) => (
                <Product key={product.name} wrap={false}>
                  <Image
                    src={product.image.base64}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <Name>{product.name}</Name>
                  <Price>Preço: R$ {product.price}</Price>
                </Product>
              ))}
            </Grid>
          </CategoryBox>
        );
      })}
      {user && <Email>{user.email}</Email>}
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
  <PDFViewer style={{ width: "100%", height: "100%" }}>
    <MyDocument data={data} user={user} />
  </PDFViewer>
);
