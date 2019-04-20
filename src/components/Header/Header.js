import React, { PureComponent } from "react";
import { View, SafeAreaView, Text } from "react-native";


import styles from "./HeaderStyles";

export default class Header extends PureComponent {
  render() {
    const { headerStyle, headerLeft, headerRight, bgColor, headerTitleTexStyle, headerTitle, safeAreaViewStyle } = this.props
    let _bgColor = { backgroundColor: bgColor || "#fff" }
    return (
      <SafeAreaView style={[_bgColor,safeAreaViewStyle]} >
        <View style={[styles.header, headerStyle]}>
          <View style={styles.headerLeft}>
            {headerLeft}
          </View>

          <View style={styles.headerTitle}>
            <Text style={[styles.headerTitleText, headerTitleTexStyle]}>
              {headerTitle}
            </Text>
          </View>

          <View style={styles.headerRight}>
            {headerRight}
          </View>
        </View>
      </SafeAreaView>
    )
  }
}