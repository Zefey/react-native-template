
/**
 * @ Author: Zefey
 * @ Create Time: 2020-01-02 11:28:04
 * @ Modified by: Zefey
 * @ Modified time: 2020-08-12 23:27:02
 * @ Description:
 */

import React, { PureComponent } from 'react';
import {
    Animated, Easing, StyleSheet, Text, View,
} from 'react-native';

interface Props {
    targetNumber : any;
    textSize : number;
    textStyle : any;
    duration : number;
}

interface State {
    numberList : any;
    animatedValue : any;
}

export default class TextTicker extends PureComponent<Props,State> {
    constructor(props:Props) {
        super(props);
        const numberList = [];
        for (let i = 0; i <= props.targetNumber; i++) {
            numberList.push(i);
        }
        this.state = {
            numberList,
            animatedValue: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        const { animatedValue } = this.state;
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: this.props.duration,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start();
    };

    render() {
        const { animatedValue, numberList } = this.state;
        const { textSize, textStyle } = this.props;
        const styles = generateStyles(textSize);

        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateY: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [textSize * numberList.length, 0],
                                }),
                            },
                        ],
                    }}
                >
                    {numberList.map((item:any, index:number) => (
                        <Text key={index} style={[styles.text, textStyle]}>
                            {item}
                        </Text>
                    ))}
                </Animated.View>
            </View>
        );
    }
}

const generateStyles = (textSize:any) => StyleSheet.create({
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
