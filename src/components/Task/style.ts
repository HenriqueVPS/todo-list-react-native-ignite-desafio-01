import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const ContentOfTask = styled.View`
  ${({ theme }: any) => css`
    border: 1px solid ${theme.COLORS.GRAY_400};
    background: ${theme.COLORS.GRAY_400};
    border-radius: 5px;
    min-height: 50px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const TaskCheckbox = styled(TouchableOpacity)``;

export const TaskText = styled.Text`
  ${({ theme }: any) => css`
    color: ${theme.COLORS.GRAY_100};
    width: 80%;
  `}
`;

export const TaskTextChecked = styled.Text`
  ${({ theme }: any) => css`
    color: ${theme.COLORS.GRAY_300};
    width: 80%;
    text-decoration: line-through;
  `}
`;
