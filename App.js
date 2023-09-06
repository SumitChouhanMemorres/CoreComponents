// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   Button,
//   Pressable,
//   Modal,
// } from "react-native";
// import { useState } from "react";
// const logoImg = require("./assets/adaptive-icon.png");

// export default function App() {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   return (
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//       <Button
//         title="Press"
//         onPress={() => setIsModalVisible(true)}
//         color="midnightblue"
//       />
//       <Modal
//         visible={isModalVisible}
//         onRequestClose={() => setIsModalVisible(false)}
//         animationType="slide"
//         presentationStyle="pageSheet"
//       >
//         <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
//           <Text>Modal Content</Text>
//           <Button
//             title="Close"
//             color="midnightblue"
//             onPress={() => setIsModalVisible(false)}
//           />
//         </View>
//       </Modal>
//     </View>
//   );
// }

// import {
//   View,
//   StatusBar,
//   Button,
//   ActivityIndicator,
//   Alert,
// } from "react-native";
// import { useState } from "react";

// export default function App() {
//   const [showStatusBar, setShowStatusBar] = useState(false);
//   return (
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//       {/* <StatusBar
//         backgroundColor="lightgreen"
//         barStyle="dark-content"
//         hidden={showStatusBar}
//       />
//       <Button
//         title="Press Me"
//         color="midnightblue"
//         onPress={() => setShowStatusBar(!showStatusBar)}
//       /> */}
//       {/* <ActivityIndicator size="large" color="midnightblue" /> */}
//       <Button title="Alert" onPress={() => Alert.alert("Invalid Data!!")} />
//       <Button
//         title="Alert2"
//         onPress={() => Alert.alert("Invalid Data!!", "DOB incorrect")}
//       />
//       <Button
//         title="Alert3"
//         onPress={() =>
//           Alert.alert("Invalid Data!!", "DOB incorrect", [
//             { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
//             { text: "OK", onPress: () => console.log("OK Pressed") },
//           ])
//         }
//       />
//     </View>
//   );
// }

// import { View } from "react-native";
// import Greet from "./components/Greet";

// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//       <Greet name="Bruce" />
//       <Greet name="Wayne" />
//     </View>
//   );
// }

import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>Style Inheritance</Text>
      </View>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.boxShadow]}>
        <Text>LightGreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333", //This is the only property that works on both iOS and Android
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    //This object is made only for Android
    elevation: 10,
  },
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
});
