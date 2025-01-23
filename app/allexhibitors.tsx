import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const exhibitors = [
  {
    id: "1",
    name: "ZITF-logo",
    logo: require("../assets/images/ZITF-logo.png"),
  },
  {
    id: "2",
    name: "Tinasoft Nexus",
    logo: require("../assets/images/tinasoft.png"),
  },
];

export default function Allexhibitors() {
  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const router = useRouter();

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredExhibitors = exhibitors
    .filter((exhibitor) =>
      exhibitor.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
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
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <Image
                source={item.logo}
                style={{
                  width: 80,
                  height: 60,
                  marginRight: 10,
                  borderRadius: 2,
                  resizeMode: "contain",
                  borderWidth: 1,
                  borderColor: "#003366",
                  padding: 4,
                }}
              />

              <TouchableOpacity
                onPress={() => router.navigate("/hall5")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 45,
                }}
              >
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                <FontAwesome
                  name={favorites.includes(item.id) ? "star" : "star-o"}
                  size={24}
                  color={favorites.includes(item.id) ? "gold" : "gray"}
                />
              </TouchableOpacity>
            </View>
          )}
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
