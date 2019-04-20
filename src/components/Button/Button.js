import React, { PureComponent } from "react";
import { TouchableOpacity, ActivityIndicator, Text } from "react-native";
import styles from "./ButtonStyles";

export default class Button extends PureComponent {

  renderChildren() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          size='small'
          style={styles.loading}
          color={this.props.activityIndicatorColor || '#c0c0c0'}
        />
      )
    }
    let childElements = [];
    React.Children.forEach(this.props.children, item => {
      if (typeof item === 'string' || typeof item === 'number') {
        const element = (
          <Text
            style={[styles.Text, this.props.textStyle]}
            allowFontScaling={this.props.allowFontScaling}
            key={item}>
            {item}
          </Text>
        );
        childElements.push(element);
      } else if (React.isValidElement(item)) {
        childElements.push(item);
      }
    });
    return (childElements);
  }

  render() {
    let { testID, accessibilityLabel, onPress, onPressIn, onPressOut, onLongPress, activeOpacity, delayLongPress, delayPressIn, delayPressOut, disabled, isLoading } = this.props
    activeOpacity = activeOpacity ? activeOpacity : 0.5
    if (isLoading) {
      disabled = true
    }
    let touchableProps = {
      testID,
      accessibilityLabel,
      onPress,
      onPressIn,
      onPressOut,
      onLongPress,
      activeOpacity,
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled
    };
    return (
      <TouchableOpacity
        {...touchableProps}
        style={[styles.Button, this.props.style]}
        >
        {this.renderChildren()}
      </TouchableOpacity>
    )
  }
}