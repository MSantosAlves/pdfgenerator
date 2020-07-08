import React, { useRef, useState } from "react";
import { DownloadLink } from "../../components/Document";
import { Background, Container, Button, StyledText } from "./styles";
import {
  FormBox,
  InputContainer,
  FieldTitle,
  StyledMessage,
} from "../../components/Form/FormBox";

import TextInput from "../../components/Form/TextInput";

function Home() {
  const formRef = useRef();
  const [pdfData, setPdfData] = useState({});

  function handleSubmit(data) {
    const categories = Object.keys(pdfData);
    const product = {
      name: data.name,
      price: data.price,
    };
    const index = categories.indexOf(data.category);
    let aux = pdfData;
    const category = index >= 0 ? categories[index] : data.category;
    if (index >= 0) {
      aux[category].push(product);
    } else {
      aux[category] = [product];
    }
    setPdfData({ ...aux });
    console.log("categories", categories);
    console.log("data", data);
    console.log("products", pdfData);
  }

  return (
    <Background>
      <Container>
        <StyledMessage>
          <span>PDF generator v1.0</span>
        </StyledMessage>
        <FormBox red={formRef} onSubmit={handleSubmit}>
          <InputContainer>
            <FieldTitle>Categoria do produto</FieldTitle>
            <TextInput name="category" />
            <FieldTitle>Nome do produto</FieldTitle>
            <TextInput name="name" />
            <FieldTitle>Preço do produto</FieldTitle>
            <TextInput name="price" />
            <Button round primary>
              Adicionar produto
            </Button>
          </InputContainer>
        </FormBox>

        <DownloadLink data={pdfData} />

        {Object.keys(pdfData).map((category) => (
          <StyledText>
            <span>
              {category}: {pdfData[category].length} produto(s) adicionado(s).
            </span>
          </StyledText>
        ))}
      </Container>
    </Background>
  );
}

export default Home;
