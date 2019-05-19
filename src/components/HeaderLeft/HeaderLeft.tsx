import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";

import Iconfont from "../Iconfont/Iconfont";
import rpx from "../../utils/rpx";

interface Props {
  iconFontName ?: any;
  size ?: any;
  style ?: any;
  iconStyles ?: any;
  onPress ?: () => void;
}

export default class HeaderLeft extends PureComponent<Props> {
  render() {
    const { iconFontName, size, style, iconStyles, onPress } = this.props
    return (
      <TouchableOpacity
        style={[{ height: rpx(87.4), minWidth: rpx(87.4), justifyContent: "center", alignItems: "center" },style]}
        onPress={onPress}
      >
        <Iconfont name={iconFontName || "left"} size={size || rpx(48)} style={iconStyles}/>
      </TouchableOpacity>
    )
  }
}