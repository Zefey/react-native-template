import { StyleSheet } from "react-native";
import rpx from "../../utils/rpx";

export default StyleSheet.create(
  {
    header: {
      position: "relative",
      height: rpx(88),
    },
    headerLeft: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      maxWidth: rpx(140)
    },
    headerTitle: {
      position: "absolute",
      left: rpx(140),
      right: rpx(140),
      top: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
    },
    headerTitleText: {
      fontSize: rpx(32),
    },
    headerRight: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      maxWidth: rpx(140),
      alignItems: "flex-end"
    }
  }
)