import React from 'react'
import {
  Document,
  PDFDownloadLink,
  Image,
  PDFViewer,
} from '@react-pdf/renderer'

import { Button } from '../../pages/Home/styles'
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
  Divider,
  StepBox,
} from './styles'

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

const mourningSteps = [
  {
    title: 'Passo 1',
    content: 'Limpar com sabonete ou gel de limpeza. A cada 15 dias Esfoliação',
  },
  {
    title: 'Passo 2',
    content: 'Aplicar 2	Água micelar ',
  },
  {
    title: 'Passo 3',
    content: 'Aplicar 3 Vitamina c',
  },
  {
    title: 'Passo 4',
    content: 'Aplicar 4	Hidratante',
  },
  {
    title: 'Passo 5',
    content: 'Aplicar	o Protetor Solar',
  },
  {
    title: 'Passo 6',
    content: 'Aplicar o	Protetor/Reparador labial',
  },
]

const nightSteps = [
  {
    title: 'Passo 1',
    content:
      'Limpar com Sabonete ou Gel de Limpeza A cada 15 dias Máscara Facia',
  },
  {
    title: 'Passo 2',
    content: 'Aplicar o Tônico',
  },
  {
    title: 'Passo 3',
    content:
      'Aplicar os	Tratamentos (Antissinais/Antiacne com cremes ou séruns específicos)',
  },
  {
    title: 'Passo 4',
    content: 'Usar os produtos de	Cuidado com a Área dos olhos',
  },
  {
    title: 'Passo 5',
    content: 'Aplicar	o	Hidratante',
  },
]

// Create Document Component
const MyDocument = ({ data, user }) => (
  <Document>
    {console.log('doc products', data)}

    <Page size="A4" style={{ border: '1px solid red' }}>
      <LogoBox>
        <Image
          src={'/LogoHeader.jpg'}
          style={{
            width: '300px',
            height: '80px',
            objectFit: 'contain',
            marginBottom: '10px',
          }}
        />
      </LogoBox>
      <Footer>
        <StyledText>
          Veja a seguir suas recomendações de dermocosméticos. Siga até o fim
          para saber como ganhar até R$20,00
        </StyledText>
      </Footer>
      {Object.keys(data).map((category, index) => {
        return (
          <>
            <CategoryBox
              key={category}
              break={index > 0 && (index + 1) % 3 === 0}
            >
              <Category>{category}</Category>
              <Grid>
                {data[category].map((product) => (
                  <Product key={product.name}>
                    <Image
                      src={product.image.base64}
                      style={{
                        width: '150px',
                        height: '100px',
                        objectFit: 'contain',
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
        )
      })}
      {user && <Email>{user.email}</Email>}
      <Footer break>
        <StyledText>Rotina matinal</StyledText>
      </Footer>
      <StepGrid>
        {mourningSteps.map((step) => {
          return (
            <StepBox>
              <StyledText>{step.title}</StyledText>
              <StyledText>{step.content}</StyledText>
            </StepBox>
          )
        })}
      </StepGrid>
      <Footer>
        <StyledText>Rotina noturna</StyledText>
      </Footer>
      <StepGrid>
        {nightSteps.map((step) => {
          return (
            <StepBox>
              <StyledText>{step.title}</StyledText>
              <StyledText>{step.content}</StyledText>
            </StepBox>
          )
        })}
      </StepGrid>
      <Footer break>
        <StyledText>
          Ganhe R$10,00 nas compras acima de R$150,00 ou R$20,00 nas compras
          acima de R$200,00.{' '}
        </StyledText>
        <StyledText>Regras:</StyledText>
        <StyledText>
          1) Basta fazer uma compra de produtos recomendados pela Encontre
          Beleza no seu site de preferência.
        </StyledText>
        <StyledText>
          2) Enviar um email para marketing@encontrebeleza.com com uma impressão
          do seu pedido de compra, com seus dados pessoais e dados da compra bem
          legíveis.
        </StyledText>
        <StyledText>
          3) Incluir no mesmo email o seu Nome Completo, Banco, Agência, Conta e
          CPF para que possamos efetuar o depósito.
        </StyledText>
        <StyledText>
          Importante: promoção limitada a R$20,00 por CPF.”
        </StyledText>
      </Footer>
    </Page>
  </Document>
)

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
)

export const Preview = ({ data, user }) => (
  <PDFViewer style={{ width: '100%', minHeight: '900px' }}>
    <MyDocument data={data} user={user} />
  </PDFViewer>
)
