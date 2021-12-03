import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { SafeAreaView, NavigationScreenProps } from 'react-navigation';

import styles from './FoundStyles';

interface Props {}
interface State {}

export default class Found extends PureComponent<Props & NavigationScreenProps, State> {
    static navigationOptions = () => {
        return {
            headerTitle: 'Found',
        };
    };

    state: State = {};

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Found</Text>
            </SafeAreaView>
        );
    }
}
