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
} from "./styles";

// Create Document Component
const MyDocument = ({ data }) => (
  <Document>
    {console.log("doc products", data)}

    <Page size="A4">
      {Object.keys(data).map((category) => {
        return (
          <CategoryBox key={category}>
            <Category>{category}</Category>
            <Grid>
              {data[category].map((product) => (
                <Product key={product.name} wrap={false}>
                  <Image
                    src={product.image.base64}
                    style={{ width: "100%", height: "250px" }}
                  />
                  <Name>{product.name}</Name>
                  <Price>Preço: R$ {product.price}</Price>
                </Product>
              ))}
            </Grid>
          </CategoryBox>
        );
      })}
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

export const Preview = ({ data }) => (
  <PDFViewer style={{ width: "100%", height: "100%" }}>
    <MyDocument data={data} />
  </PDFViewer>
);
