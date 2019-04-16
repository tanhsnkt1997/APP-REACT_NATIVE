import { AsyncStorage } from "react-native"

const savetoken = async (token) => {

    await AsyncStorage.setItem('@token',token)
}
export default savetoken