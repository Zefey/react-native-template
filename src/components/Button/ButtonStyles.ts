import { StyleSheet } from "react-native";
import rpx from "../../utils/rpx";

export default StyleSheet.create(
  {
    Button: {
      backgroundColor: "#f2f3f4",
      height: rpx(100),
      justifyContent: "center",
      alignItems: "center"
    },
    Text: {
      color: "#1576da",
      fontSize: rpx(30)
    }
  }
)