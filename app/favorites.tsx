import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";
import { firestore, auth } from "@/src/firebase/firebaseConfig";
import { collection, getDocs, doc, getDoc } from "firebase/firestore"; // Firestore functions

const FavoritesScreen: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]); // State to store the favorite exhibitors
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      const userId = auth.currentUser?.uid;
      if (userId) {
        try {
          // Get the "favorites" collection inside the user's document
          const favoritesRef = collection(
            firestore,
            "users",
            userId,
            "favorites"
          );
          const snapshot = await getDocs(favoritesRef);

          // Get the details for each favorite exhibitor
          const favoriteExhibitors = await Promise.all(
            snapshot.docs.map(async (favoriteDoc) => {
              const exhibitorId = favoriteDoc.id; // The favorite exhibitor ID
              const exhibitorDocRef = doc(firestore, "exhibitors", exhibitorId);
              const exhibitorDoc = await getDoc(exhibitorDocRef);

              if (exhibitorDoc.exists()) {
                return { id: exhibitorDoc.id, ...exhibitorDoc.data() }; // Store the exhibitor details
              }
              return null;
            })
          );

          // Filter out any null values (exhibitors that don't exist anymore)
          setFavorites(
            favoriteExhibitors.filter((exhibitor) => exhibitor !== null)
          );
        } catch (error) {
          console.error("Error fetching favorites:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchFavorites();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ccff" />
      ) : favorites.length === 0 ? (
        <Text style={styles.noDataText}>You have no favorites yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.exhibitorItem}>
              <Image
                source={{ uri: item.logo }} // Assuming logo is a URL in Firestore
                style={styles.logo}
              />
              <Text style={styles.exhibitorName}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  exhibitorItem: {
    backgroundColor: "#f9f9f9",
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3, // Add shadow for iOS
    borderWidth: 1,
    borderColor: "#ddd",
  },
  logo: {
    width: 80,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
    resizeMode: "contain",
  },
  exhibitorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  noDataText: {
    fontSize: 18,
    textAlign: "center",
    color: "#888",
    marginTop: 20,
  },
});

export default FavoritesScreen;
