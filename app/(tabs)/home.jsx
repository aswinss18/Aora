import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={[
          { id: 1 },
          { id: 5 },
          { id: 7 },
          { id: 4 },
          { id: 2 },
          { id: 6 },
        ]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text style={styles.text}>{item.id}</Text>}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={styles.headerSubContainer}>
                <Text style={styles.welcomeText}>Welcome Back</Text>
                <Text style={styles.nameText}>Aswin</Text>
              </View>
              <View style={styles.imgContainer}>
                <Image
                  source={images.logoSmall}
                  style={styles.img}
                  resizeMode="contain"
                  alt="icon"
                />
              </View>
            </View>
            <SearchInput />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: { fontSize: 20, color: "white" },
  mainContainer: { backgroundColor: "#161622" },
  headerContainer: {
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  headerSubContainer: {
    marginBottom: 40,
  },
  welcomeText: { color: "white" },
  nameText: { color: "white", fontSize: 22, fontWeight: 600 },
  imgContainer: { marginTop: 10 },
  img: { width: 40, height: 40 },
});
