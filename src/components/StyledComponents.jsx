import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- styled components -</Title>
      <button>FIGHT!!</button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`;
