import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  margin: 10px;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.hoverColor} 50%,
      ${(props) => props.theme.colors.bgDefault} 50%
    )
    right bottom/200% 100%;
  transition: all 0.5s ease-out;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;

  &:hover {
    color: ${(props) => props.theme.colors.text};
    background-position: left bottom;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 350px;
  }

  @media only screen and (min-width: 992px) {
    width: 350px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ padding }) => padding};
  height: 100%;
  max-height: fit-content;
`;

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  padding: 5px 0;
`;

export const Description = styled.div`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 15px;
  text-align: left;
`;

export const Button = styled.a`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  margin: 10px 0;
  cursor: pointer;
`;

export const CardImage = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
`;
