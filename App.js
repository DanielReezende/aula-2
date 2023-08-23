import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

export default function App() {

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./src/assets/images/logo.png')} />
        </View>

        <View style={styles.content}>
          <View style={styles.form}>
            <TextInput style={styles.input} placeholder='Adicione uma nova tarefa' placeholderTextColor="#808080" />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>
                <Feather name='plus-circle' color="#f2f2f2" size={18} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A"
  },

  header: {
    backgroundColor: "#0D0D0D",
    padding: 24,
    paddingBottom: 100,
    alignItems: 'center',
  },

  content: {
    flex: 1,
    width: "100%",
    padding: 24,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginTop: -60,
    paddingHorizontal: 24,
  },

  input: {
    flex: 1,
    fontSize: 16,
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0C0C0D",
  },

  button: {
    borderRadius: 6,
    padding: 18,
    height: 60,
    width: 60,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",

  },

  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
  }


});
