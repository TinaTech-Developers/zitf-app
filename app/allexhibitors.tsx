import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  SectionList,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Define types for the exhibitor and sections
interface Exhibitor {
  id: string;
  name: string;
  logo: any;
}

interface SectionData {
  title: string;
  data: Exhibitor[];
}

const exhibitors: Exhibitor[] = [
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
  {
    id: "3",
    name: "Econet Wireless",
    logo: require("../assets/images/econet.png"),
  },
  {
    id: "4",
    name: "ZimTrade",
    logo: require("../assets/images/zimtrade.webp"),
  },
  {
    id: "5",
    name: "TelOne",
    logo: require("../assets/images/telone.png"),
  },
  {
    id: "6",
    name: "BancABC",
    logo: require("../assets/images/banc.png"),
  },
  {
    id: "7",
    name: "AgriBank",
    logo: require("../assets/images/Agribank.png"),
  },
  {
    id: "8",
    name: "Architectural Aluminium",
    logo: require("../assets/images/architectural-aluminium-logo.jpg"),
  },
  {
    id: "9",
    name: "Delta Beveranges",
    logo: require("../assets/images/Delta.jpg"),
  },
  {
    id: "10",
    name: "Creative",
    logo: require("../assets/images/creative.png"),
  },
  {
    id: "11",
    name: "FuserTech",
    logo: require("../assets/images/fusertech.jpg"),
  },
  {
    id: "12",
    name: "Grapenote",
    logo: require("../assets/images/grapenote.png"),
  },
  {
    id: "13",
    name: "Innovative Technologies",
    logo: require("../assets/images/inno.jpeg"),
  },
];

export default function Allexhibitors() {
  const [searchText, setSearchText] = useState<string>("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const router = useRouter();

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  // Filter exhibitors based on the search text
  const filteredExhibitors = exhibitors
    .filter((exhibitor) =>
      exhibitor.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  // Group exhibitors by the first letter of their name
  const groupedExhibitors = filteredExhibitors.reduce<{
    [key: string]: Exhibitor[];
  }>((groups, exhibitor) => {
    const firstLetter = exhibitor.name.charAt(0).toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(exhibitor);
    return groups;
  }, {});

  // Convert grouped exhibitors object into an array for SectionList
  const sections: SectionData[] = Object.keys(groupedExhibitors).map(
    (letter) => ({
      title: letter,
      data: groupedExhibitors[letter],
    })
  );

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

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                justifyContent: "space-between",
              }}
            >
              {/* TouchableOpacity for the exhibitor's logo and name */}
              <TouchableOpacity
                onPress={() => router.push("/hall5")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
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
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
              </TouchableOpacity>

              {/* TouchableOpacity for the star icon, placed outside */}
              <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                <FontAwesome
                  name={favorites.includes(item.id) ? "star" : "star-o"}
                  size={24}
                  color={favorites.includes(item.id) ? "gold" : "gray"}
                />
              </TouchableOpacity>
            </View>
          )}
          renderSectionHeader={({ section }: { section: SectionData }) => (
            <View
              style={{
                backgroundColor: "#003366",
                paddingVertical: 2,
                paddingLeft: 10,
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 14, color: "white" }}
              >
                {section.title}
              </Text>
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
