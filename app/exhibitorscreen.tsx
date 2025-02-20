// ExhibitorScreen.tsx
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { getDoc, doc } from "firebase/firestore"; // Corrected imports for Firestore methods
import { firestore } from "@/src/firebase/firebaseConfig"; // Assuming firestore is initialized in this config
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types"; // Import the root stack param list for navigation types

type ExhibitorScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ExhibitorScreen"
>;

interface Exhibitor {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  contact: string;
}

interface ExhibitorScreenProps {
  route: { params: { exhibitorId: string } };
  navigation: ExhibitorScreenNavigationProp;
}

const ExhibitorScreen: React.FC<ExhibitorScreenProps> = ({
  route,
  navigation,
}) => {
  const { exhibitorId } = route.params;
  const [exhibitor, setExhibitor] = useState<Exhibitor | null>(null);

  useEffect(() => {
    const fetchExhibitorDetails = async () => {
      try {
        const exhibitorRef = doc(firestore, "exhibitors", exhibitorId); // Reference to the exhibitor document
        const exhibitorSnapshot = await getDoc(exhibitorRef); // Fetch the document snapshot

        if (exhibitorSnapshot.exists()) {
          const data = exhibitorSnapshot.data();
          setExhibitor({
            id: exhibitorSnapshot.id,
            name: data.name,
            description: data.description,
            logo: data.logo,
            website: data.website,
            contact: data.contact,
          });
        } else {
          console.log("No such exhibitor!");
        }
      } catch (error) {
        console.error("Error fetching exhibitor details:", error);
      }
    };

    fetchExhibitorDetails();
  }, [exhibitorId]);

  if (!exhibitor) {
    return (
      <SafeAreaView>
        <Text>Loading exhibitor details...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <ScrollView>
        <Image
          source={{ uri: exhibitor.logo }}
          style={{
            width: 150,
            height: 100,
            resizeMode: "contain",
            marginBottom: 20,
          }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {exhibitor.name}
        </Text>
        <Text style={{ fontSize: 18, marginVertical: 10 }}>
          {exhibitor.description}
        </Text>
        <Text style={{ fontSize: 16, color: "blue" }}>
          <a href={exhibitor.website}>{exhibitor.website}</a>
        </Text>
        <Text style={{ fontSize: 16 }}>Contact: {exhibitor.contact}</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExhibitorScreen;
