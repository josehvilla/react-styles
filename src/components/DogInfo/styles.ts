import styled from "styled-components";

const Content = styled.main`
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 30px;
`;

const DogImage = styled.img`
  width: 100%;
  height: 350px;
  vertical-align: middle;
  object-fit: cover;
  border-radius: 4px;
`;

const DogName = styled.h2`
  padding: 16px 0;
  font-size: ${(props) => props.theme.fonts.size.extraLarge};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
`;

const DogData = styled.li`
  list-style: none;
  font-size: ${(props) => props.theme.fonts.size.small};
  line-height: 26px;
`;

export { Content, DogImage, DogName, DogData };
