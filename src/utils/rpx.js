import { Dimensions } from "react-native";

const { width } = Dimensions.get("window")

export default val => width / 750 * val