import { styled } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const TextEmptyTasks = styled.Text`
  color: ${({ theme }): any => theme.COLORS.GRAY_300};
  margin-top: 3px;
  font-size: 14px;
`;

export const BorderDivisor = styled.View`
  border: 0.5px solid ${({ theme }: any) => theme.COLORS.GRAY_400};
  margin: 0 24px;
`;
