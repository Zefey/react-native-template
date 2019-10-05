import Toast from 'react-native-root-toast'

/**
 * react-native-root-toast组件
 * 轻提示，但会被 modal 遮盖
 */
export default (text = '', option = {}) => {
  option = Object.assign(
    {
      position: Toast.positions.BOTTOM, // toast位置
      shadow: true, // toast是否出现阴影
      animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
      hideOnPress: false, // 是否可以通过点击事件对toast进行隐藏
      delay: 0, // toast显示的延时
      onShow: () => {
        // toast出现回调（动画开始时）
      },
      onShown: () => {
        // toast出现回调（动画结束时）
      },
      onHide: () => {
        // toast隐藏回调（动画开始时）
      },
      onHidden: () => {
        // toast隐藏回调（动画结束时）
      }
    },
    option
  )
  //toast自动配置多语言
  Toast.show(text, option);
}