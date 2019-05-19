import { Dimensions } from "react-native";

const { width } = Dimensions.get("window")

export default (val:number) => width / 750 * val