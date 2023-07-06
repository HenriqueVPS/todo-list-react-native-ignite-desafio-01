import {
  ButtonNewTask,
  Container,
  ContainerNewTask,
  Header,
  InputTask,
  Logo,
  ContainerAmountTasks,
  CreatedTasks,
  DoneTasks,
  NumberOfTasks,
  ContainerTasks,
} from "./style";
import { useTheme } from "styled-components/native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import logoImg from "../../assets/logo.png";
import { Text, FlatList, Alert, View, TextInput } from "react-native";
import { useRef, useState } from "react";
import { Task } from "../../components/Task";
import { TasksEmpty } from "../../components/TasksEmpty";

export function Home() {
  const { COLORS } = useTheme();
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [isFocusInput, setIsFocusInput] = useState(false);
  const inputRef = useRef<TextInput>(null);

  function handleAddTask() {
    if (newTask.trim().length !== 0) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    } else {
      Alert.alert(
        "Nova tarefa",
        "Por favor preencha a nova tarefa para adicionar"
      );
    }
  }

  function handleRemoveTask(deletedTask: string) {
    const removeTask = tasks.filter((task) => task !== deletedTask);
    setTasks(removeTask);
  }

  function taskRemove(task: string) {
    Alert.alert("Remover tarefa", "Tem certeza que deseja remover a tarefa?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => handleRemoveTask(task) },
    ]);
  }

  function teste() {}

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
      </Header>
      <ContainerNewTask>
        <InputTask
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={COLORS.GRAY_300}
          onChangeText={setNewTask}
          value={newTask}
          onBlur={() => setIsFocusInput(true)}
          style={{
            borderColor: inputRef.current?.isFocused()
              ? COLORS.PURPLE
              : COLORS.GRAY_700,
          }}
          ref={inputRef}
        />
        <ButtonNewTask onPress={handleAddTask}>
          <AntDesign name="pluscircleo" size={16} color="white" />
        </ButtonNewTask>
      </ContainerNewTask>

      <ContainerAmountTasks>
        <View style={{ flexDirection: "row" }}>
          <CreatedTasks>Criadas </CreatedTasks>
          <NumberOfTasks>
            <Text>{tasks.length}</Text>
          </NumberOfTasks>
        </View>
        <View style={{ flexDirection: "row" }}>
          <DoneTasks>Concluídas </DoneTasks>
          <NumberOfTasks>
            <Text>0</Text>
          </NumberOfTasks>
        </View>
      </ContainerAmountTasks>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ContainerTasks>
            <Task key={item} removeTask={() => taskRemove(item)} title={item} />
          </ContainerTasks>
        )}
        ListEmptyComponent={() => <TasksEmpty />}
      />
    </Container>
  );
}
