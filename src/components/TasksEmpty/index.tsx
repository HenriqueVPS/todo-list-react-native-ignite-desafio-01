import { BorderDivisor, Container, TextEmptyTasks } from "./style";
import { Image } from "react-native";

import ClipboardImg from "../../assets/Clipboard.png";
import { useTheme } from "styled-components";

export function TasksEmpty() {
  const { COLORS } = useTheme();
  return (
    <>
      <BorderDivisor />
      <Container>
        <Image source={ClipboardImg} />
        <TextEmptyTasks style={{ color: COLORS.GRAY_200, marginTop: 16 }}>
          Você ainda não tem tarefas cadastradas
        </TextEmptyTasks>
        <TextEmptyTasks>
          Crie tarefas e organize seus itens a fazer
        </TextEmptyTasks>
      </Container>
    </>
  );
}
