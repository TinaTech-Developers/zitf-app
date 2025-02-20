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
import FlipAnimation from "@/components/FlipAnimation";

const product = [
  {
    id: "1",
    name: "Agricultural Products",
    image:
      "https://content.jdmagicbox.com/comp/def_content/agriculture-product-dealers/76d9600ff1-agriculture-product-dealers-1-gsq6l.jpg", // Agricultural products
  },
  {
    id: "2",
    name: "Livestock and Animal Products",
    image: "https://images.unsplash.com/photo-1582117791380-4f9d7ff4452e", // Livestock
  },
  {
    id: "3",
    name: "Construction and Building Materials",
    image: "https://images.unsplash.com/photo-1606101414536-91f0ae579db1", // Construction materials
  },
  {
    id: "4",
    name: "Food and Beverages",
    image: "https://images.unsplash.com/photo-1556742089-3c52d6e83c7e", // Food and beverages
  },
  {
    id: "5",
    name: "Manufacturing and Industrial Products",
    image: "https://images.unsplash.com/photo-1567290575-bd1c7ab51f61", // Manufacturing
  },
  {
    id: "6",
    name: "Technology and Electronics",
    image: "https://images.unsplash.com/photo-1586736972655-1b9206220785", // Technology and electronics
  },
  {
    id: "7",
    name: "Health and Wellness",
    image: "https://images.unsplash.com/photo-1555685818-59d8659eb34c", // Health and wellness
  },
  {
    id: "8",
    name: "Tourism and Travel",
    image: "https://images.unsplash.com/photo-1499875954291-83b4ef4b63ae", // Tourism and travel
  },
  {
    id: "9",
    name: "Fashion and Apparel",
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664", // Fashion and apparel
  },
  {
    id: "10",
    name: "Education and Training Services",
    image: "https://images.unsplash.com/photo-1581287072114-1009c5475b99", // Education and training
  },
  {
    id: "11",
    name: "Financial Services",
    image: "https://images.unsplash.com/photo-1571107170161-bfe2a6d9c30b", // Financial services
  },
  {
    id: "12",
    name: "Arts and Crafts",
    image: "https://images.unsplash.com/photo-1549312266-82ccfa569c0b", // Arts and crafts
  },
  {
    id: "13",
    name: "Environmental and Green Products",
    image: "https://images.unsplash.com/photo-1575544328-0888f3745f7a", // Environmental products
  },
  {
    id: "14",
    name: "Logistics and Transport",
    image: "https://images.unsplash.com/photo-1593157015152-1b81d6d76d24", // Logistics and transport
  },
  {
    id: "15",
    name: "Entertainment and Media",
    image: "https://images.unsplash.com/photo-1560278891-e6048d5087ca", // Entertainment and media
  },
  {
    id: "16",
    name: "Automotive Industry",
    image: "https://images.unsplash.com/photo-1589402490525-60f3d61a8d32", // Automotive industry
  },
  {
    id: "17",
    name: "Plastic and Packaging Industry",
    image: "https://images.unsplash.com/photo-1607747360785-9b1d95ff61f7", // Plastic and packaging
  },
  {
    id: "18",
    name: "Pharmaceuticals Industry",
    image: "https://images.unsplash.com/photo-1517671565228-b0dff11d97f6", // Pharmaceuticals
  },
  {
    id: "19",
    name: "Cleaning and Hygiene Products",
    image: "https://images.unsplash.com/photo-1587736825684-12a235e11093", // Cleaning and hygiene
  },
  {
    id: "20",
    name: "Real Estate and Property Development",
    image: "https://images.unsplash.com/photo-1560278671-74f47b925211", // Real estate
  },
  {
    id: "21",
    name: "Renewable Energy and Solar Solutions",
    image: "https://images.unsplash.com/photo-1587609465501-e49d9f53857d", // Renewable energy
  },
  {
    id: "22",
    name: "Mining and Natural Resources",
    image: "https://images.unsplash.com/photo-1495572297402-ecc1531e2f34", // Mining
  },
  {
    id: "23",
    name: "Telecommunications and Internet Services",
    image: "https://images.unsplash.com/photo-1584821966921-850330d0f362", // Telecommunications
  },
  {
    id: "24",
    name: "Cosmetics and Personal Care",
    image: "https://images.unsplash.com/photo-1581496493025-019b1a0b1a00", // Cosmetics
  },
  {
    id: "25",
    name: "Event Management and Services",
    image: "https://images.unsplash.com/photo-1518154101575-7f4b66b7414d", // Event management
  },
  {
    id: "26",
    name: "Retail and Wholesale",
    image: "https://images.unsplash.com/photo-1592223061952-839f4d9911ac", // Retail and wholesale
  },
  {
    id: "27",
    name: "Printing and Packaging Services",
    image: "https://images.unsplash.com/photo-1603483576265-90db58747662", // Printing and packaging
  },
  {
    id: "28",
    name: "Legal and Consultancy Services",
    image: "https://images.unsplash.com/photo-1559347110-e7b59d01a370", // Legal and consultancy
  },
  {
    id: "29",
    name: "Transport and Fleet Management",
    image: "https://images.unsplash.com/photo-1533296165183-41acda633f0d", // Transport fleet
  },
  {
    id: "30",
    name: "Sports Equipment and Gear",
    image: "https://images.unsplash.com/photo-1536045266149-4655446de513", // Sports equipment
  },
  {
    id: "31",
    name: "Public Health and Safety",
    image: "https://images.unsplash.com/photo-1569716761-02fae67cd071", // Public health
  },
  {
    id: "32",
    name: "Government and Non-Governmental Organizations (NGOs)",
    image: "https://images.unsplash.com/photo-1581091012187-d003b1109d52", // NGOs
  },
  {
    id: "33",
    name: "Consumer Electronics and Gadgets",
    image: "https://images.unsplash.com/photo-1570853870030-c991bf8e8b38", // Consumer electronics
  },
  {
    id: "34",
    name: "Textiles and Fabrics",
    image: "https://images.unsplash.com/photo-1519174041475-6f5993d3a02e", // Textiles
  },
  {
    id: "35",
    name: "Waste Management and Recycling",
    image: "https://images.unsplash.com/photo-1568300220-4b1d85e8f6ae", // Waste management
  },
  {
    id: "36",
    name: "Luxury Goods and Services",
    image: "https://images.unsplash.com/photo-1600197373132-5a338ad16a18", // Luxury goods
  },
  {
    id: "37",
    name: "Security and Surveillance Solutions",
    image: "https://images.unsplash.com/photo-1564401229-dfc2a25c87a1", // Security surveillance
  },
  {
    id: "38",
    name: "Creative and Digital Design Services",
    image: "https://images.unsplash.com/photo-1586827275741-7689a24f708e", // Digital design
  },
  {
    id: "39",
    name: "Technology Startups and Innovation",
    image: "https://images.unsplash.com/photo-1557130731-b7758817816a", // Technology startup
  },
];

export default function products() {
  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
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
    .sort((a, b) => a.name.localeCompare(b.name)); // Sorting alphabetically by name

  return (
    <FlipAnimation>
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
            placeholder="Search Products & Services"
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
                  justifyContent: "space-between", // Added to space the items
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
                    source={{ uri: item.image }}
                    style={{
                      width: 80,
                      height: 60,
                      marginRight: 10,
                      borderRadius: 2,
                      borderWidth: 1,
                      resizeMode: "contain",
                      padding: 4,
                    }}
                  />
                  <Text style={{ fontSize: 14 }}>{item.name}</Text>
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
            ListEmptyComponent={
              <Text style={{ fontSize: 18, color: "gray" }}>
                No exhibitors found
              </Text>
            }
          />
        </View>
      </SafeAreaView>
    </FlipAnimation>
  );
}
