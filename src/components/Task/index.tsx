import {
  ContentOfTask,
  TaskText,
  TaskCheckbox,
  TaskTextChecked,
} from "./style";
import { Text, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { useTheme } from "styled-components";
import { AntDesign, Entypo } from "@expo/vector-icons";

interface PropsTasks {
  title: string;
  removeTask: () => void;
}

export function Task({ title, removeTask }: PropsTasks) {
  const { COLORS } = useTheme();
  const [taskChecked, setTaskChecked] = useState(false);

  return (
    <ContentOfTask>
      <TaskCheckbox onPress={() => setTaskChecked(!taskChecked)}>
        {taskChecked ? (
          <AntDesign name="checkcircleo" size={18} color={COLORS.PURPLE} />
        ) : (
          <Entypo name="circle" size={18} color={COLORS.BLUE} />
        )}
      </TaskCheckbox>

      {taskChecked ? (
        <TaskTextChecked>{title}</TaskTextChecked>
      ) : (
        <TaskText>{title}</TaskText>
      )}

      <FontAwesome5
        onPress={removeTask}
        name="trash-alt"
        size={20}
        color={COLORS.GRAY_300}
      />
    </ContentOfTask>
  );
}
