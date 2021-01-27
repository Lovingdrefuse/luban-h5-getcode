import './gallery.scss'
import PersonalTab from './tabs/personal.js'
import PixabayTab from './tabs/pixabay.js'

export default {
  name: 'lbs-image-gallery',
  components: {
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    tabs: [
      {
        value: 'personal',
        label: '我的图库'
      },
      {
        value: 'pixabay',
        label: 'Pixabay图库'
      }
    ],
    activeTab: 'personal',
    innerVisible: false,
    pixabayList: []
  }),
  computed: {
  },
  watch: {
    visible (value) {
      this.innerVisible = value
    }
  },
  methods: {
    showGallery () {
      this.innerVisible = true
    },
    handleClose () {
      this.innerVisible = false
    },
    changeTab ({ key }) {
      this.activeTab = key
    },
    handleSelectImage (item) {
    
      var image1 = document.createElement("img")
      image1.src = item.url
      image1.setAttribute('crossOrigin','Anonymous')
      image1.onload =async ()=>{
        
      var canvas = document.createElement("canvas");
        canvas.width = image1.width
        canvas.height = image1.height
        var ctx = canvas.getContext("2d")
       await ctx.drawImage(image1,0,0,image1.width,image1.height)
       this.$emit('change', canvas.toDataURL('image/png'))
       this.handleClose()
      }
     
    },
    renderContent () {
      switch (this.activeTab) {
        case 'personal':
          return <PersonalTab onChangeItem={item => {
            this.handleSelectImage(item)
          }}/>
        case 'pixabay':
          return <PixabayTab onChangeItem={item => {
            this.handleSelectImage(item)
          }}/>
      }
    },
    // getBase64Image(image) {
    //   // var image='https://cdn.pixabay.com/photo/2016/08/28/23/24/sunflower-1627193_150.jpg'
    //   // return new Promise((resolve,reject)=>{
    //     if(image){
    //       var image1 = document.createElement("img")
    //       image1.src = image
    //       image1.setAttribute('crossOrigin','Anonymous')
    //       image1.onload =async ()=>{
            
    //       var canvas = document.createElement("canvas");
    //         canvas.width = image1.width
    //         canvas.height = image1.height
    //         var ctx = canvas.getContext("2d")
    //        await ctx.drawImage(image1,0,0,image1.width,image1.height)
    //        return canvas.toDataURL('image/png')
    //       }
    //     }
    //   // })

    // },
    renderDefaultActivator () {
      const activatorWithoutImg = (
        <div
          class="default-activator cursor-pointer empty-bg-activator"
          onClick={this.showGallery}
        >
          <a-icon type="plus" />
        </div>
      )

      const activatorWithImg = (
        <div onClick={this.showGallery}>
          <div class="default-activator cursor-pointer "><img src={this.value} width="50%" style={{ margin: 'auto' }} /></div>
          <div class="flex-space-between" style="margin-top: 8px;">
            <a-button size="small">更换</a-button>
            {/* <a-button size="small" onClick={e => {
              e.stopPropagation()
            }}>裁剪</a-button> */}
            <a-button size="small" onClick={(e) => {
              e.stopPropagation()
              this.handleSelectImage({ url: '' })
            }}>移除</a-button>
          </div>
        </div>
      )
      return (this.value ? activatorWithImg : activatorWithoutImg)
    }
  },
  render (h) {
    return (
      <div>
        <slot>{this.renderDefaultActivator()}</slot>
        <a-modal
          closable
          title="图片库"
          width="65%"
          visible={this.innerVisible}
          onOk={this.handleClose}
          onCancel={this.handleClose}
          bodyStyle={{ margin: 0, padding: 0 }}
        >
          <a-layout style="height: 500px; position: relative;">
            <a-layout-sider width="200px" style="background-color: white;">
              <a-menu mode="inline" defaultSelectedKeys={['personal']} onClick={this.changeTab}>
                {
                  this.tabs.map((tab, index) => (
                    <a-menu-item key={tab.value} >
                      <a-icon type="user" />
                      <span>{tab.label}</span>
                    </a-menu-item>
                  ))
                }
              </a-menu>
            </a-layout-sider>
            <a-layout-content>
              {this.renderContent()}
            </a-layout-content>
          </a-layout>
        </a-modal>
      </div>
    )
  }
}