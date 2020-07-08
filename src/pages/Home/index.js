import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Preview } from "../../components/Document";
import {
  Background,
  Container,
  Button,
  StyledText,
  FileInput,
  ErrorText,
} from "./styles";
import {
  FormBox,
  InputContainer,
  FieldTitle,
  StyledMessage,
} from "../../components/Form/FormBox";

import TextInput from "../../components/Form/TextInput";

function Home() {
  const formRef = useRef();
  const fileInputRef = useRef();
  const [pdfData, setPdfData] = useState({});
  const [selectedFile, setFile] = useState(null);
  const [error, setError] = useState(false);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        category: Yup.string().required("*Por favor informe uma categoria"),
        name: Yup.string().required("*Por favor informe um nome"),
        price: Yup.string().required("*Por favor informe um preço"),
      });

      if (!selectedFile) {
        setError(true);
        throw new Error();
      }

      await schema.validate(data, {
        abortEarly: false,
      });

      const categories = Object.keys(pdfData);
      const product = {
        name: data.name,
        price: data.price,
        image: selectedFile,
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
      formRef.current.setErrors({});
      fileInputRef.current.value = null;
      reset();
      toast.success("Produto adicionado com sucesso!");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
      }
      toast.warn("Erro ao adicionar produto.");
    }
  }

  function handleUploadFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFile({ base64: reader.result, nome: file.name });
      setError(false);
    };
  }

  return (
    <Background>
      <Container>
        <ToastContainer autoClose={2000} />
        <StyledMessage>
          <span>PDF generator v1.0</span>
        </StyledMessage>
        <FormBox ref={formRef} onSubmit={handleSubmit}>
          <InputContainer>
            <FieldTitle>Categoria do produto</FieldTitle>
            <TextInput name="category" />
            <FieldTitle>Nome do produto</FieldTitle>
            <TextInput name="name" />
            <FieldTitle>Preço do produto</FieldTitle>
            <TextInput name="price" placeholder="Ex.: 29,90" />
            <FieldTitle style={{ margin: "20px auto" }}>
              Imagem do produto
            </FieldTitle>
            <FileInput
              onChange={(e) => handleUploadFile(e)}
              ref={fileInputRef}
            />
            {error && <ErrorText>*Por favor selecione uma imagem</ErrorText>}
            <Button round primary>
              Adicionar produto
            </Button>
          </InputContainer>
        </FormBox>
        <Preview data={pdfData} />
        {Object.keys(pdfData).map((category) => (
          <StyledText key={category}>
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
