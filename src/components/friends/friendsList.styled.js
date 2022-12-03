import styled from '@emotion/styled';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 2px;
  width: 352px;
  background-color: #FFFFFF;
  border-radius: 4px;
`;

export const FriendsItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  background-color: aqua;
  border: 2px solid #393e46;
  border-radius: 1px;
`;

export const FriendsStatus = styled.span`
  display: block;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => {
    return p.status ? 'green' : 'red';
  }};
`;

export const FriendsName = styled.p`
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #000;
`;