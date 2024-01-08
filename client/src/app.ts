import { Component, PropsWithChildren } from 'react'
import Taro, { Config, useLaunch } from '@tarojs/taro'

import './app.less'

const App = (props: PropsWithChildren) => {
  useLaunch(() => {
    if (process.env.TARO_ENV === 'weapp') {
      console.log('init 2')
      Taro.cloud.init({
        traceUser: true,
        env: 'rmst-3gdk39lwc0ca885e'
      })
    }
  })

  return props.children
}

export default App
