import styled from '@emotion/styled';

export const InputBox = styled.div`
  position: relative;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  outline: none;
  background: transparent;
  :valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 1rem;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;

export const ErrorMesege = styled.p`
  position: absolute;
  top: -5px;
  right: 0;
  font-size: 0.54rem;
  color: #a80a0a;
`;
