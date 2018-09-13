import {
  AsyncStorage,
} from 'react-native';

async function saveKeyFirstLoad(value) {
  try {
    await AsyncStorage.setItem('@firstLoad', value);
  } catch (error) {
    // console.log("Error saving data" + error);
  }
}

async function clearStorage() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
  // console.log("Error clear data" + error);
  }
}

export { saveKeyFirstLoad, clearStorage };
