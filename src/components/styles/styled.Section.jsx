import styled from "styled-components";
import img1 from "../../assets/2.png";

const InfoSectionThree = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <Image src={img1} alt="..." />
        </Right>
        <Left>
          <Title>Why Choose Us?</Title>
          <Header>IT lifecycle managment all in one place</Header>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            impedit delectus, optio libero harum sint ex quam reprehenderit
            soluta neque nisi enim facilis quidem nostrum blanditiis voluptate
            dolorum autem dignissimos?
          </Description>
          <List>
            <ListItem>list item</ListItem>
            <ListItem>list item</ListItem>
            <ListItem>list item</ListItem>
            <ListItem>list item</ListItem>
            <ListItem>list item</ListItem>
            <ListItem>list item</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionThree;

export const Container = styled.div`
  padding: 10px 20px;
  padding-top: 4%;
  background: ${(props) => props.theme.colors.bgDefault};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  margin: 0 140px;

  @media only screen and (max-width: 600px) {
    margin: 0;
  }

  @media only screen and (min-width: 600px) {
    margin: 0;
  }

  @media only screen and (min-width: 992px) {
    margin: 0 140px;
  }
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary};

  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 25px;
  }

  @media only screen and (min-width: 600px) {
    font-size: 25px;
    text-align: center;
  }

  @media only screen and (min-width: 992px) {
    font-size: 35px;
    text-align: left;
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  margin-bottom: 10px;

  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 20px;
  }

  @media only screen and (min-width: 600px) {
    text-align: center;
  }

  @media only screen and (min-width: 992px) {
    text-align: left;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.textDark};

  @media only screen and (max-width: 600px) {
    font-weight: bold;
    text-align: center;
  }

  @media only screen and (min-width: 600px) {
    font-weight: bold;
    padding-right: 5%;
    text-align: center;
  }

  @media only screen and (min-width: 992px) {
    font-size: 20px;
    font-weight: lighter;
    padding-right: 0;
    padding: 10px 0;
    text-align: left;
  }
`;

export const Right = styled.div`
  width: 40%;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    width: 50%;
    margin: 0 5% 0 0;
  }

  @media only screen and (min-width: 992px) {
    width: 40%;
  }
`;

export const Image = styled.img`
  width: 100%;
  padding-right: 20px;
`;

export const Left = styled.div`
  width: 60%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 55%;
  }

  @media only screen and (min-width: 992px) {
    width: 55%;
  }
`;

export const List = styled.div`
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-left: 5px solid ${(props) => props.theme.colors.primary};
  min-width: 200px;
  text-align: left;
  margin: 5px;
  padding: 20px;
  -webkit-box-shadow: 5px 4px 15px -8px #000;
  box-shadow: 5px 4px 15px -8px #000;

  @media only screen and (max-width: 600px) {
    margin: 2px;
    padding: 10px;
  }

  @media only screen and (min-width: 600px) {
    margin: 5px;
    padding: 10px;
  }

  @media only screen and (min-width: 992px) {
    padding: 20px;
  }
`;
