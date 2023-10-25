import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  color: black;
  border-radius: 10px;
`;

export const GridWrappper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  h2,
  p {
    padding: 0.8rem 0.25rem;
  }
`;

export const NameWrapper = styled(GridWrappper)`
  background-color: #c4c4c4;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 1px solid #9e9e9e;
  h2 {
    font-size: 1.2rem;
  }
`;

export const InfoWrapper = styled(GridWrappper)`
  border-bottom: 1px solid #c4c4c4;
  cursor: pointer;
  p {
    font-size: 0.8rem;
  }
  :hover {
    background-color: #c4c4c4;
  }
`;

export const FooterTable = styled.div`
  width: 100%;
  height: 50px;
  background-color: #c4c4c4;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  border-top: 1px solid #9e9e9e;
`;
