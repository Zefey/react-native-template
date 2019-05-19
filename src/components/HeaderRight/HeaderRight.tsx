import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";

import Iconfont from "../Iconfont/Iconfont";
import rpx from "../../utils/rpx";

interface Props {
  iconFontName ?: any;
  size ?: any;
  iconStyles ?: any;
  children ?: any;
  onPress ?: () => void;
}

export default class HeaderRight extends PureComponent<Props> {

  renderChildren() {
    let { iconFontName, size, children, iconStyles } = this.props

    if (iconFontName) {
      children = <Iconfont name={iconFontName} size={size || rpx(34)} style={iconStyles} />
    }

    return children
  }

  render() {
    let { onPress } = this.props
    return (
      <TouchableOpacity
        style={{ height: rpx(87.4), minWidth: rpx(87.4), justifyContent: "center", alignItems: "center" }}
        onPress={onPress}
      >
        {this.renderChildren()}
      </TouchableOpacity>
    )
  }
}