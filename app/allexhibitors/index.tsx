import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router"; // Correct import for Expo Router
import {
  SafeAreaView,
  TextInput,
  SectionList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  firestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "../../src/firebase/firebaseConfig";
import Toast from "react-native-toast-message";
import { getAuth } from "firebase/auth";
import { FontAwesome } from "@expo/vector-icons";
interface Exhibitor {
  id: string;
  name: string;
  logo: string;
}

const ExhibitorsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [exhibitors, setExhibitors] = useState<Exhibitor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchExhibitors = async () => {
      try {
        const exhibitorRef = collection(firestore, "exhibitors"); // Firestore collection
        const snapshot = await getDocs(exhibitorRef);

        if (snapshot.empty) {
          console.log("No exhibitors found");
        } else {
          const exhibitorList = snapshot.docs.map((doc) => ({
            id: doc.id, // Document ID from Firestore
            name: doc.data().name,
            logo: doc.data().logo,
          }));
          setExhibitors(exhibitorList);
        }
      } catch (error) {
        console.error("Error fetching exhibitors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExhibitors();
  }, []);

  const filteredExhibitors = exhibitors
    .filter((exhibitor) =>
      exhibitor.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

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

  const sections = Object.keys(groupedExhibitors).map((letter) => ({
    title: letter,
    data: groupedExhibitors[letter],
  }));

  // Add exhibitor to favorites
  const addToFavorites = async (exhibitorId: string) => {
    const user = getAuth().currentUser;

    if (user) {
      try {
        const userFavoritesRef = collection(
          firestore,
          "users",
          user.uid,
          "favorites"
        );
        const favoriteDocRef = doc(userFavoritesRef, exhibitorId);

        // Add the exhibitor to the user's favorites collection
        await setDoc(favoriteDocRef, {
          exhibitorId,
          timestamp: new Date(),
        });

        // Show success toast
        Toast.show({
          type: "success",
          text1: "Successfully added to favourites!",
          text2: "Redirecting to Exhibitors...",
        });
      } catch (error) {
        console.error("Error adding to favorites:", error);
        Toast.show({
          type: "success",
          text1: "Unable add to favourites!",
          text2: "Redirecting to Exhibitors...",
        });
      }
    } else {
      alert("Please log in to add exhibitors to your favorites.");
    }
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };
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

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id} // Use document ID as key
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
              <TouchableOpacity
                onPress={() => router.push(`/allexhibitors/${item.id}`)} // Use id as dynamic route parameter
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // gap: 10,
                }}
              >
                <View className="flex flex-row justify-between items-center">
                  <Image
                    source={{ uri: item.logo }}
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
                </View>
                <TouchableOpacity onPress={() => addToFavorites(item.id)}>
                  <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                    <FontAwesome
                      name={favorites.includes(item.id) ? "star" : "star-o"}
                      size={24}
                      color={favorites.includes(item.id) ? "gold" : "gray"}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          )}
          renderSectionHeader={({ section }) => (
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
        />
      </View>
    </SafeAreaView>
  );
};

export default ExhibitorsScreen;
