import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { firestore, doc, getDoc } from "@/src/firebase/firebaseConfig"; // Firestore imports

interface Exhibitor {
  id: string;
  name: string;
  logo: string;
  description: string;
  address: string;
  phone: string;
}

const ExhibitorDetailScreen: React.FC = () => {
  const [exhibitor, setExhibitor] = useState<Exhibitor | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useLocalSearchParams<{ id: string }>(); // Use the correct ID from params

  useEffect(() => {
    const fetchExhibitorDetails = async () => {
      if (typeof id !== "string") {
        console.error("Invalid ID");
        setLoading(false);
        return;
      }

      try {
        const exhibitorRef = doc(firestore, "exhibitors", id); // Correct usage of `doc`
        const docSnap = await getDoc(exhibitorRef);

        if (docSnap.exists()) {
          const exhibitorData = docSnap.data();
          setExhibitor({
            id: docSnap.id,
            name: exhibitorData.name,
            logo: exhibitorData.logo,
            description: exhibitorData.description,
            address: exhibitorData.address,
            phone: exhibitorData.phone,
          });
        } else {
          console.log("No such exhibitor found!");
        }
      } catch (error) {
        console.error("Error fetching exhibitor details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExhibitorDetails();
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#003366" />
      </SafeAreaView>
    );
  }

  if (!exhibitor) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Exhibitor not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: exhibitor.logo }} style={styles.logo} />
        <Text style={styles.name}>{exhibitor.name}</Text>
        <Text style={styles.name}>{exhibitor.address}</Text>
        <Text style={styles.description}>{exhibitor.description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  detailsContainer: {
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 20,
    borderRadius: 8,
    resizeMode: "contain",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginHorizontal: 20,
  },
  errorText: {
    fontSize: 18,
    textAlign: "center",
    color: "red",
  },
});

export default ExhibitorDetailScreen;
