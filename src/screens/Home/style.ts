import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(SafeAreaView)`
  ${({ theme }: any) => css`
    background: ${theme.COLORS.GRAY_600};
  `}
  flex: 1;
`;

export const Header = styled.View`
  background: ${({ theme }: any) => theme.COLORS.GRAY_700};
  height: 25%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const ContainerNewTask = styled.View`
  padding: 0 24px;
  transform: translateY(-25px);
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const InputTask = styled(TextInput)`
  ${({ theme }: any) => css`
    background: ${theme.COLORS.GRAY_600};
    border: 1px solid ${theme.COLORS.GRAY_700};
    background: ${theme.COLORS.GRAY_500};
    flex: 1;
    width: 50px;
    height: 50px;
    border-radius: 6px;
    padding-left: 16px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ButtonNewTask = styled(TouchableOpacity)`
  ${({ theme }: any) => css`
    background: ${theme.COLORS.BLUE_DARK};
    width: 50px;
    height: 48px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
  `}
`;

export const ContainerAmountTasks = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 0 24px;
  margin-bottom: 20px;
`;

export const CreatedTasks = styled.Text`
  ${({ theme }: any) => css`
    color: ${theme.COLORS.BLUE};
  `}
`;

export const DoneTasks = styled.Text`
  ${({ theme }: any) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.PURPLE};
    font-size: 14px;
    font-weight: 700;
  `}
`;

export const NumberOfTasks = styled.Text`
  ${({ theme }: any) => css`
    color: ${theme.COLORS.GRAY_100};

    background: ${theme.COLORS.GRAY_400};
    border-radius: 8px;
    padding: 0px 6px;
    justify-content: center;
    align-items: center;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ContainerTasks = styled.View`
  padding: 0 24px;
  margin-top: 7px;
`;
