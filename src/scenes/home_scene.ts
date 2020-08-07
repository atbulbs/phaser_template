/**
 * @description 首页场景
 */
import BaseScene from './base_scene'

import { Text, TextStyle, BackgroundColor } from '../components/base'
import { designWidth, designHeight } from '../shared/constants'
import { Button } from '../components/common'

export default class LoadScene extends BaseScene {

  constructor () {
    super('HomeScene', true)
    window.__current_scene_name__ = 'LoadScene'
  }

  build () {
    BackgroundColor(0x00ffff)
    const { top, left } = this.background
    Button(left + 10, top + 10, 35, 35, 'back', '').onceClick(() => {
      this.navigator.push('LoadScene', {
        isTransitonOut: true,
      })
    })
    Text('HomeScene', TextStyle({
      color: 'pink',
      fontSize: 36,
    }), designWidth / 2, designHeight / 2, .5)
  }

}