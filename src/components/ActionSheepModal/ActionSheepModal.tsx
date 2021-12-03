/**
 * @ Author: Zefey
 * @ Create Time: 2020-05-26 11:36:44
 * @ Modified by: Zefey
 * @ Modified time: 2020-08-12 22:09:50
 * @ Description:通用ActionSheep弹窗
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Modal from '../Modal/Modal';
import * as ScreenUtil from '../../utils/ScreenUtil';

interface Props {}

interface State {
    isVisible: boolean;
    options?: Object[];
    onPicker?: Function;
    onCannel?: Function;
}

export default class ActionSheepModal extends PureComponent<Props, State> {
    state: State = {
        isVisible: false,
        options: [],
        onPicker: () => {},
        onCannel: () => {},
    };

    showModal = (
        data = {
            options: [],
            onPicker: () => {},
            onCannel: () => {},
        },
    ) => {
        this.setState({
            isVisible: true,
            ...data,
        });
    };

    hideModal = () => {
        this.setState({
            isVisible: false,
        });
    };

    render() {
        const { isVisible, options, onPicker, onCannel } = this.state;

        return (
            <Modal
                visible={isVisible}
                transparent={true}
                onRequestClose={this.hideModal} // 如果是Android设备 必须有此方法
            >
                <View style={styles.modalContainer}>
                    <View style={styles.contentView}>
                        <View
                            style={{
                                backgroundColor: 'rgba(255,255,255,.9)',
                                marginHorizontal: ScreenUtil.scaleSize(10),
                                borderRadius: ScreenUtil.scaleSize(12),
                                overflow: 'hidden',
                            }}
                        >
                            {options &&
                                options.map((item: any, index: number) => {
                                    const isLastItem = index == options.length - 1;
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            activeOpacity={1}
                                            onPress={() => {
                                                this.hideModal();
                                                onPicker && onPicker(item);
                                            }}
                                            style={{
                                                height: ScreenUtil.scaleSize(50),
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderBottomWidth: isLastItem ? 0 : 1,
                                                borderBottomColor: '#CDCED2',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: ScreenUtil.setSpText(16),
                                                    color: '#0076FF',
                                                    fontWeight: '500',
                                                    lineHeight: ScreenUtil.scaleSize(24),
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {item.name || item}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                this.hideModal();
                                onCannel && onCannel();
                            }}
                            style={{
                                margin: ScreenUtil.scaleSize(10),
                                backgroundColor: '#fff',
                                height: ScreenUtil.scaleSize(50),
                                borderRadius: ScreenUtil.scaleSize(12),
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: ScreenUtil.setSpText(16),
                                    color: '#0076FF',
                                    fontWeight: '500',
                                    lineHeight: ScreenUtil.scaleSize(24),
                                    textAlign: 'center',
                                }}
                            >
                                取消
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.4)',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    contentView: {
        width: ScreenUtil.screenW,
        paddingBottom: ScreenUtil.bottomPadding,
    },
});
