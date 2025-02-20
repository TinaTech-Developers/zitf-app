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
  ActivityIndicator, // Import ActivityIndicator for the loader
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import FlipAnimation from "@/components/FlipAnimation";

const product = [
  {
    id: "1",
    name: "Agricultural Products",
    image:
      "https://content.jdmagicbox.com/comp/def_content/agriculture-product-dealers/76d9600ff1-agriculture-product-dealers-1-gsq6l.jpg", // Agricultural products
  },
  // Add more products if needed...
];

export default function solutions() {
  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // State for loading
  const router = useRouter();

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredExhibitors = product
    .filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort();

  // Simulate a loading state when filtering products
  const handleSearch = (text: string) => {
    setLoading(true);
    setSearchText(text);

    setTimeout(() => {
      setLoading(false); // Stop loading after data has been filtered
    }, 1000); // Adjust timeout for loading simulation
  };

  return (
    <FlipAnimation>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
          {/* Search Input */}
          <TextInput
            style={{
              width: "100%",
              borderBottomWidth: 2,
              paddingVertical: 10,
              marginBottom: 20,
              fontSize: 16,
            }}
            placeholder="Search Products & Services"
            value={searchText}
            onChangeText={handleSearch} // Use the handleSearch function to show loading
          />

          {/* Show loader while filtering or fetching */}
          {loading ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <ActivityIndicator size="large" color="#003366" />
              <Text style={{ marginTop: 10, color: "#003366" }}>
                Loading...
              </Text>
            </View>
          ) : (
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
                    justifyContent: "space-between",
                  }}
                >
                  {/* Touchable for image and name */}
                  <TouchableOpacity
                    onPress={() => router.push("/hall5")}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
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
                      onError={(e) => {
                        console.log(
                          "Error loading image:",
                          e.nativeEvent.error
                        );
                      }}
                    />
                    <Text style={{ fontSize: 14 }}>{item.name}</Text>
                  </TouchableOpacity>

                  {/* Favorite button */}
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
          )}
        </View>
      </SafeAreaView>
    </FlipAnimation>
  );
}
