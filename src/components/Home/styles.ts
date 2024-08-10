import styled from "styled-components";

const Grid = styled.main`
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
`;

const Dogs = styled.article`
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 15px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  height: 345px;
  box-sizing: border-box;
`;

const DogsImage = styled.img`
  width: 100%;
  height: 250px;
  vertical-align: middle;
  object-fit: cover;
  border-radius: 4px;
`;

const DogsName = styled.h2`
  padding: 7px 0;
  font-size: ${(props) => props.theme.fonts.size.medium};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
`;

const DogsBredFor = styled.p`
  padding: 5px 0;
  font-size: ${(props) => props.theme.fonts.size.extraSmall};
`;

export { Grid, Dogs, DogsImage, DogsName, DogsBredFor };
