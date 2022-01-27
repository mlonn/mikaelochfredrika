import styled from 'styled-components';

export default styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  line-height: inherit;
  font-family: inherit;
  font-size: inherit;
`;
