import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { SafeAreaView, NavigationScreenProps } from 'react-navigation';
import withReducerState from '../../store/withReducerState';

import styles from './TestStyles';

interface Props {}
interface State {}

class Test extends PureComponent<Props & NavigationScreenProps, State> {
    static navigationOptions = () => {
        return {
            headerTitle: 'Test',
        };
    };

    state: State = {};

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ color: '#000' }}>Test</Text>
            </SafeAreaView>
        );
    }
}

export default withReducerState(Test);
