/**
 * @description 资源加载服务
 */

export default class AssetsLoader {

  handleComplete = () => {}
  handleProgress = (e) => {}

  constructor (private scene) {
    this.scene.load.crossOrigin = 'anonymous'
  }

  /**
   * @description 加载默认资源
   */
  public loadDefaultAssets (imagesConfig, soundsConfig, spritesConfig) {
    this.load([], [], imagesConfig, soundsConfig, spritesConfig)
  }

  // 加载
  public load (netImages, netSounds = [], imagesConfig = {}, soundsConfig = {}, spritesConfig = {}) {
    netImages.forEach(image => {
      if (image.match(/\.(jpg|png|jpeg|gif|svg)/)) {
        imagesConfig[image] = image
      }
    })
    netSounds.forEach(sound => {
      if (sound.match(/\.mp3/)) {
        soundsConfig[sound] = sound
      }
    })
    const assetsHash = {
      image: imagesConfig,
      audio: soundsConfig,
      multiatlas: spritesConfig,
    }
    Object.keys(assetsHash).forEach(assetsType => {
      const assets = assetsHash[assetsType]
      Object.keys(assets).forEach(key => {
        this.scene.load[assetsType](key, assets[key])
      })
    })
    this.scene.load.start()
    this.scene.load.on('progress', e => {
      this.handleProgress(e)
    })
    this.scene.load.once('complete', () => {
      this.handleComplete()
    })
  }

  public onceComplete (handleComplete = () => {}) {
    this.handleComplete = handleComplete
  }

  public onProgress (handleProgress = e => {}) {
    this.handleProgress = handleProgress
  }

}
