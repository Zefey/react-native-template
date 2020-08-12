import {
    StyleSheet, View, Animated, BackHandler,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    defaultModalStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
});
const backHandler = null;
class ModalContainer extends Component {
    static displayName = 'ModalContainer';

    static propTypes = {
        ...Animated.View.propTypes,
        visible: PropTypes.bool,
    };

    static defaultProps = {
        visible: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
        };
        this.once = false;
        this.realod = true;
    }

    componentDidMount() {
        const { onShow } = this.props;
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        onShow && onShow();
    }

    onBackAndroid = () => {
        const { onRequestClose, visible } = this.props;
        if (onRequestClose && visible) {
            onRequestClose();
            return true;
        }
        return false;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.once && !nextProps.visible && this.realod) {
            this.realod = false;
            nextProps.onDismiss && nextProps.onDismiss();
        }
        if (!this.realod && nextProps.visible) {
            nextProps.onShow && nextProps.onShow();
        }
        if (nextProps.visible) {
            this.realod = true;
        }
        if (!this.once) {
            this.once = true;
        }
        return true;
    }

    componentWillUnmount() {
        const { onDismiss } = this.props;
        onDismiss && onDismiss();
        this.backHandler && this.backHandler.remove();
        // BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.visible !== this.props.visible) {
            this.setState({
                visible: this.props.visible,
            });
        }
    }

    render() {
        const { props } = this;
        return this.state.visible ? (
            <View
              {...props}
              style={props.style || styles.defaultModalStyle}
            />
        ) : null;
    }
}

export default ModalContainer;
export class AnimatedModalContainer extends ModalContainer {
    render() {
        console.log(this.state.visible);
        const { props } = this;
        return this.state.visible ? (
            <Animated.View
              {...props}
              style={props.style || styles.defaultModalStyle}
            />
        ) : null;
    }
}
