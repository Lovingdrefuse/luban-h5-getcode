import PropTypes from '@luban-h5/plugin-common-props'
import { getDataItemValue } from 'echarts/lib/util/model'

const placeholderImg = 'data:image/png;base64,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'
export default {
  name: 'lbp-picture',
  render () {
    return <img class="lbp_img" style={{position:'absolute'}} src={this.imgSrc || placeholderImg} style={{ objectFit: this.fillType }} alt="" srcset="" width="100%" />
  },
  props: {
    imgSrc: PropTypes.image(),
    fillType: {
      type: String,
      default: 'contain',
      editor: {
        type: 'a-select',
        label: '填充方式',
        props: {
          options: [
            { label: 'contain 短边缩放', value: 'contain' },
            { label: 'cover 长边缩放', value: 'cover' },
            { label: 'fill 拉伸', value: 'fill' },
            { label: 'none 原始', value: 'none' },
            { label: 'scale-down 弹性缩放', value: 'scale-down' }
          ]
        }
      }
    }
  },
  
  data: () => ({
    placeholderImg
  }),
  methods: {
    async f1(image){
        // this.getBase64Image(image).then(res=>{return res})
        // await this.getBase64Image(image).then(res=>{return res})
    },
    
  }

  
}
