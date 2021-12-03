/**
 * @ Author: Zefey
 * @ Create Time: 2020-01-02 11:28:04
 * @ Modified by: 泽锋
 * @ Modified time: 2020-08-12 23:27:22
 * @ Description:
 */

import React, { PureComponent } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import TextTicker from './TextTicker';

interface Props {
    style: any;
    textSize: number;
    textStyle: any;
    number: number;
    duration: number;
}

interface State {}

export default class NumberTicker extends PureComponent<Props, State> {
    state: State = {};

    render() {
        const { style, textSize, textStyle, number, duration } = this.props;
        const styles = generateStyles(textSize);
        return (
            <View style={style}>
                <View style={{ flexDirection: 'row' }}>
                    {/* 数字先转为字符串再转数组 */}
                    {`${number}`.split('').map((item, index) => {
                        // 小数点处理
                        if (item === '.') {
                            return (
                                <Text key={item} style={[styles.text, textStyle]}>
                                    {item}
                                </Text>
                            );
                        }
                        // 其他数字
                        return (
                            <TextTicker
                                key={`${item}+${index}`}
                                textSize={textSize}
                                textStyle={textStyle}
                                targetNumber={parseFloat(item)}
                                duration={duration}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }
}

const generateStyles = (textSize: any) =>
    StyleSheet.create({
        container: {
            width: textSize * 0.62,
            height: textSize,
            alignItems: 'center',
            justifyContent: 'flex-end',
            overflow: 'hidden',
        },
        text: {
            fontSize: textSize,
            lineHeight: textSize,
        },
    });
