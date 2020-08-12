import { BackHandler } from 'react-native';

// 直接传入 closeModal 方法
export const registerBackHand = (closeModal) => {
    this.closeModal = closeModal;
    this.backSubscription = BackHandler.addEventListener('hardwareBackPress', this.hardwareBackPress);
};

export const unregisterBackHand = () => {
    this.backSubscription && this.backSubscription.remove();
};

hardwareBackPress = (e) => {
    if (this.closeModal) {
        this.closeModal();
        this.closeModal = null;

        this.backSubscription && this.backSubscription.remove();
        return true;
    }
    return false;
};
