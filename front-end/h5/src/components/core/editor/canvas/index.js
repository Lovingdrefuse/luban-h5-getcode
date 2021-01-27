import { mapState, mapActions } from 'vuex'

import RenderEditCanvas from './edit'
import RenderPreviewCanvas from '@/components/core/editor/canvas/preview'
import {downHtml} from '../../../../views/work-manager/h'
// import {downHtml} from '@/views/work-manager/h'
export default {
  name: 'EditorCanvas',
  data: () => ({
    isPreviewMode: false,
    visible:false,
    page:[],
  }),
  computed: {
    ...mapState('editor', {
      editingPage: state => state.editingPage,
      editingElement: state => state.editingElement,
      elements: state => state.editingPage.elements,
      pages: state => state.work.pages,
      work: state => state.work,
      scaleRate: state => state.scaleRate
    }),
    ...mapState('loading', [
      'saveWork_loading',
      'previewWork_loading',
      'setWorkAsTemplate_loading',
      'uploadWorkCover_loading'
    ])
  },
  methods: {
    ...mapActions('editor', [
      'elementManager',
      'pageManager',
      'saveWork',
      'createWork',
      'fetchWork',
      'updateWork',
      'setWorkAsTemplate',
      'setEditingElement',
      'setEditingPage'
    ]),
    handleSave () {
     
      //  console.log("111111111111111")
      this.saveWork({ isSaveCover: true })
      // this.testHandler()
      downHtml("preview")
      // console.log("22222222")
    //  this.getHtml(this.work)
    
     
      
    },
    handleToggleMode (isPreviewMode) {
      this.isPreviewMode = isPreviewMode
      if (isPreviewMode) {
        // 当切换到预览模式的时候，清空当前编辑元素
        this.setEditingElement() // 相当于  setEditingElement(null)
      }
    }


  },
  render (h) {
    return (
      <a-layout id="canvas-outer-wrapper">
        <div style={{display:'none'}}>
          <div id="preview">
       {
         this.work.pages.map(item=>{
           return  <RenderPreviewCanvas  elements={item.elements} style={{height:'100%'}} />
         })
         
       }
       </div>
       </div>
        <a-button size="small"
            onClick={this.handleSave}
            style={{width:'100px', height:'50px',position:'absolute', right:'470px', top:'125px', zIndex:'1000'}}>下载</a-button>
        <a-radio-group style={{position:'absolute'}}
          class="mode-toggle-wrapper"
          size="small"
          value={this.isPreviewMode}
          onInput={this.handleToggleMode}
        > 
          {/* 编辑模式、预览模式 */}
          <a-radio-button label={false} value={false}>{this.$t('editor.centerPanel.mode.edit')}</a-radio-button>
          <a-radio-button label={true} value={true}>{this.$t('editor.centerPanel.mode.preview')}</a-radio-button>
        </a-radio-group>
        <a-layout-content style={{ transform: `scale(${this.scaleRate})`, 'transform-origin': 'center top' }}>
          <div class='canvas-wrapper' style={{
            height: `${this.work.height}px`
          }}>
            { this.isPreviewMode
              ? <RenderPreviewCanvas id="preview" elements={this.elements}/>
              : <RenderEditCanvas
              id="preview"
                class="edit-mode"
                elements={this.elements}
              />
            }
           
          </div>

        </a-layout-content>
      </a-layout>
    )
  }
}
