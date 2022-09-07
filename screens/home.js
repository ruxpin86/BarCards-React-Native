import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("Register")}
        title="Create Account"
      />
    </View>
  );
};

export default Home;
