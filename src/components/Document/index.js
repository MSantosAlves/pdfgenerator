import React, { Fragment } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

import { Button } from "../../pages/Home/styles";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = ({ data }) => (
  <Document>
    {console.log("doc products", data)}

    <Page size="A4" style={styles.page}>
      {Object.keys(data).map((category) => {
        return (
          <View style={styles.section} key={category}>
            <Text>Categoria: {category}</Text>
            {data[category].map((product) => (
              <Fragment key={product.name}>
                <Text>Nome: {product.name}</Text>
                <Image
                  src={product.image.base64}
                  style={{ width: "200px", height: "200px" }}
                />
                <Text>Preço: R$ {product.price}</Text>
              </Fragment>
            ))}
          </View>
        );
      })}
    </Page>
  </Document>
);

export const DownloadLink = ({ data }) => (
  <div>
    <PDFDownloadLink document={<MyDocument data={data} />} fileName="test.pdf">
      <Button border primary>
        Baixar PDF
      </Button>
    </PDFDownloadLink>
  </div>
);
