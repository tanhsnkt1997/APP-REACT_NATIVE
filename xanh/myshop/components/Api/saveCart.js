import { AsyncStorage } from "react-native"

const saveCart = async (cartarray) => (
    await AsyncStorage.setItem('@cart', JSON.stringify(cartarray)) 
)
export default saveCart;