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
    name: "Manufacturing and Industrial Innovation",
  },
  {
    id: "2",
    name: "Agribusiness and Agro-processing",
  },
  {
    id: "3",
    name: "Technology and ICT Solutions",
  },
  {
    id: "4",
    name: "Mining and Natural Resources",
  },
  {
    id: "5",
    name: "Renewable Energy and Sustainability",
  },
  {
    id: "6",
    name: "Healthcare and Medical Innovations",
  },
  {
    id: "7",
    name: "Youth and Entrepreneurship Initiatives",
  },
  {
    id: "8",
    name: "Trade and Export Promotion",
  },
  {
    id: "9",
    name: "Infrastructure and Development Projects",
  },
  {
    id: "10",
    name: "Public-Private Partnerships (PPP) Projects",
  },
  {
    id: "11",
    name: "Cultural and Creative Industries",
  },
  {
    id: "12",
    name: "Financial Services and Banking Innovations",
  },
  {
    id: "13",
    name: "Tourism and Hospitality Projects",
  },
  {
    id: "14",
    name: "Environmental Sustainability and Green Tech",
  },
  {
    id: "15",
    name: "Transport and Logistics Development",
  },
];

export default function ProjectGroups() {
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
      <View style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
        <TextInput
          style={{
            width: "100%",
            borderBottomWidth: 2,
            paddingVertical: 10,
            marginBottom: 20,
            fontSize: 16,
          }}
          placeholder="Search exhibitors"
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
