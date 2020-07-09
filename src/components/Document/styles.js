import styled from '@react-pdf/styled-components'

export const Page = styled.Page`
  flex-direction: column;
  background: #fff;
  align-items: center;
`

export const CategoryBox = styled.View`
  margin: 20px 0px;
  align-items: center;
`

export const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`

export const LogoBox = styled.View`
  margin: 10px 0px;
  width: 100%;
  align-items: center;
`

export const Product = styled.View`
  margin: 10px 0px;
  width: 45%;
  align-items: center;
`

export const Category = styled.Text`
  margin: 5px 0px;
  color: #320054;
  font-weight: bold;
  font-size: 32px;
`
export const Name = styled.Text`
  margin: 5px 0px;
  color: #444;
  font-size: 22px;
`
export const Price = styled.Text`
  margin: 5px 0px;
  color: #444;
  font-weight: bold;
  font-size: 22px;
`
