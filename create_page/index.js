/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */

const fs = require('fs')

const pageName = process.argv[2]

if (!pageName) {
  console.log('模版名称不能为空！')
  console.log('示例：npm run tep test')
  process.exit(0)
}

// 页面模版
const jsTep = `import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import styles from './${pageName}Styles'
import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft'

export default class ${pageName} extends PureComponent {
  static navigationOptions = props => {
    return {
      headerTitle: '${pageName}',
      headerLeft:<HeaderLeft onPress={() => {props.navigation.goBack()}}/>
    }
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{color: '#000'}}>${pageName}</Text>
      </SafeAreaView>
    )
  }
}`

// 样式文件
const stylesTep = `import { StyleSheet } from 'react-native'
import rpx from '../../utils/rpx'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})`





fs.mkdirSync(`./src/pages/${pageName}`) // mkdir $1
process.chdir(`./src/pages/${pageName}`) // cd $1

fs.writeFileSync(`${pageName}.js`, jsTep)
fs.writeFileSync(`${pageName}Styles.js`, stylesTep)


console.log(`模版${pageName}已创建`)


process.exit(0)
