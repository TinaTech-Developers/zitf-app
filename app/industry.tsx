import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const exhibitors = [
  {
    id: "1",
    name: " ICT Industry",
  },
  {
    id: "2",
    name: "Chemicals Industry",
  },
  {
    id: "3",
    name: "Electrical industry/Electronic industry",
  },
  {
    id: "4",
    name: "Automative industry",
  },
  {
    id: "5",
    name: "Glass,Ceramics, stone Industry",
  },
  {
    id: "6",
    name: "Plastic Industry",
  },
  {
    id: "7",
    name: "Food Industry",
  },
  {
    id: "8",
    name: "Machinery and plastic engineering",
  },
  {
    id: "9",
    name: "Metals Industry",
  },
  {
    id: "10",
    name: "Pharmeceuticals industry",
  },
  {
    id: "11",
    name: "Cleaning Industry",
  },
  {
    id: "12",
    name: "Other",
  },
  {
    id: "13",
    name: "Building and construction industry",
  },
  {
    id: "14",
    name: "Other",
  },
];

export default function Industry() {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredExhibitors = exhibitors
    .filter((exhibitor) =>
      exhibitor.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
        <TextInput
          style={{
            width: "100%",
            borderBottomWidth: 2,
            paddingVertical: 10,
            marginBottom: 20,
            fontSize: 16,
          }}
          placeholder="Search for Industry/Sector Solutions"
          value={searchText}
          onChangeText={setSearchText}
        />

        <FlatList
          data={filteredExhibitors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isSelected = item.id === selectedId;
            const isHovered = item.id === hoveredId;
            return (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  backgroundColor: isSelected
                    ? "#d3d3d3"
                    : isHovered
                    ? "#f0f0f0"
                    : "white",
                  height: 45,
                }}
                onPress={() => setSelectedId(isSelected ? null : item.id)}
                onPressIn={() => setHoveredId(item.id)}
                onPressOut={() => setHoveredId(null)}
              >
                <Text style={{ fontSize: 14, flex: 1, paddingHorizontal: 2 }}>
                  {item.name}
                </Text>
                <Ionicons size={20} name="chevron-forward" color="#003366" />
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={
            <Text style={{ fontSize: 18, color: "gray" }}>
              No exhibitors found
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
