/**
 * @ Author: Zefey
 * @ Create Time: 2020-05-26 11:36:44
 * @ Modified by: Zefey
 * @ Modified time: 2020-08-12 22:14:12
 * @ Description:通用Alert弹窗
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ScreenUtil from '../../utils/ScreenUtil';
import Modal from '../Modal/Modal';

interface Props {}

interface State {
    isVisible: boolean;
    title: string;
    content: string;
    buttons: Object[];
}

export default class AlertModal extends PureComponent<Props, State> {
    state: State = {
        isVisible: false,
        title: '',
        content: '',
        buttons: [],
    };

    showModal = (
        options = {
            title: '',
            content: '',
            buttons: [],
        },
    ) => {
        this.setState({
            isVisible: true,
            ...options,
        });
    };

    hideModal = () => {
        this.setState({
            isVisible: false,
        });
    };

    render() {
        const { isVisible, title, content, buttons } = this.state;
        const length = buttons.length;
        const direction = length > 2 ? 'column' : 'row';

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
                                paddingHorizontal: ScreenUtil.scaleSize(15),
                                paddingVertical: ScreenUtil.scaleSize(24),
                            }}
                        >
                            {!!title && (
                                <Text
                                    style={{
                                        fontSize: ScreenUtil.setSpText(17),
                                        color: '#000',
                                        fontWeight: '500',
                                        lineHeight: ScreenUtil.scaleSize(24),
                                        textAlign: 'center',
                                    }}
                                >
                                    {title}
                                </Text>
                            )}
                            {!!content && (
                                <Text
                                    style={{
                                        marginTop: ScreenUtil.scaleSize(12),
                                        fontSize: ScreenUtil.setSpText(12),
                                        color: '#000',
                                        fontWeight: '400',
                                        lineHeight: ScreenUtil.scaleSize(16),
                                        textAlign: 'center',
                                    }}
                                >
                                    {content}
                                </Text>
                            )}
                        </View>
                        <View
                            style={{
                                width: ScreenUtil.scaleSize(270),
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: direction,
                                borderColor: '#CDCED2',
                                borderTopWidth: 1,
                            }}
                        >
                            {buttons.map((item: any, index: number) => {
                                const isLastItem = index == length - 1;
                                let buttonWidth = ScreenUtil.scaleSize(270);
                                if (direction == 'row') {
                                    buttonWidth = ScreenUtil.scaleSize(270) / length;
                                }
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={1}
                                        onPress={() => {
                                            this.hideModal();
                                            item.onPress && item.onPress();
                                        }}
                                        style={{
                                            height: ScreenUtil.scaleSize(44),
                                            width: buttonWidth,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderColor: '#CDCED2',
                                            borderRightWidth:
                                                direction == 'row' && isLastItem ? 0 : 1,
                                            borderBottomWidth:
                                                direction == 'column' && isLastItem ? 0 : 1,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: ScreenUtil.setSpText(17),
                                                color: '#0076FF',
                                                fontWeight: item.style == 'cancel' ? '500' : '400',
                                                lineHeight: ScreenUtil.scaleSize(22),
                                                textAlign: 'center',
                                            }}
                                        >
                                            {item.text}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentView: {
        width: ScreenUtil.scaleSize(270),
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.9)',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: ScreenUtil.scaleSize(13),
    },
});
