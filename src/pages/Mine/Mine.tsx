import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { SafeAreaView, NavigationScreenProps } from 'react-navigation';

import styles from './MineStyles';

interface Props {}
interface State {}

export default class Mine extends PureComponent<Props & NavigationScreenProps, State> {
    static navigationOptions = () => {
        return {
            header: null,
        };
    };

    state: State = {};

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Mine</Text>
            </SafeAreaView>
        );
    }
}
