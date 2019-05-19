import { StyleSheet } from "react-native";
import rpx from "../../utils/rpx";

export default StyleSheet.create({
    container: {
      flex: 1,
      padding:rpx(40)
    },
    text:{
      color:"#000",
      fontSize: rpx(30),
      fontWeight: '500',
      paddingBottom:rpx(20)
    }
})