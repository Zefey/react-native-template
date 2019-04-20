import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";

import Iconfont from "../Iconfont/Iconfont";
import rpx from "../../utils/rpx";

export default class HeaderLeft extends PureComponent {
  render() {
    const { iconFontName, size, style, iconStyles, onPress } = this.props
    return (
      <TouchableOpacity
        style={{ height: rpx(87.4), minWidth: rpx(87.4), justifyContent: "center", alignItems: "center" }}
        onPress={onPress}
      >
        <Iconfont name={iconFontName || "left"} size={size || rpx(34)} style={iconStyles}/>
      </TouchableOpacity>
    )
  }
}