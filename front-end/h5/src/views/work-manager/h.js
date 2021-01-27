import axios from 'axios'
export default async function head(html) {
    var bbb = 'sss'
    await getcss().then((res) => {
        bbb = res
            //  console.log(bbb)
    })
    return `<html>

    <head>
        <meta charset="UTF-8">
        <title>
        </title>
        <meta name="viewport" id="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
        <meta content="yes" name="apple-mobile-web-app-capable">
        <meta content="black" name="apple-mobile-web-app-status-bar-style">
        <meta content="telephone=no" name="format-detection">
        <meta content="email=no" name="format-detection">
        <style>`
    + bbb +
    `</style>
    <body style="margin:0px;padding:0px;" ontouchstart="clickthrough(event)" onmousedown="clickthrough(event)">
    <script>
            window.onload = function(){
                window.setInterval(showMyAd, 400)
                setTimeout(() => {
                    window.clearInterval
                    //n秒后关闭定时器
                }, 3000);
            }
        </script>
    <div id="preview" style="position:'relative'">`
     + html +
    `</div>
     <button id="unmuteButton"></button>
    </body>
    <script src="mraid.js"></script>
    <script>
        function resetCSS(){
            var preview = document.getElementById('preview');
            preview.height            = "100%";
            preview.width             = "100%";
        }
        function clickthrough(event){
            event.preventDefault(); // so no both touch and click is registered

            //安卓和ios链接跳转适配
            var userAgent = navigator.userAgent || navigator.vendor;
            var url = '此处用ios链接'; 
            var android ='此处用安卓链接'; 
            if (/android/i.test(userAgent)) { 
             url = android; 
            }
            mraid.open(url);
        }
        window.onresize = function(event) {
            resetCSS();
        }
        // Wait for the SDK to become ready
        // console.log(mraid.getState())
        if (mraid.getState() === 'loading') {
         mraid.addEventListener('ready', onSdkReady);
        } else {
         onSdkReady();
        }
        function viewableChangeHandler(viewable) {
         // start/pause/resume gameplay, stop/play sounds
         if(viewable) {
             //如果有视频文件的话，进行资源加载，如果没有视频文件的话就直接渲染
             if(document.getElementsByTagName("video")!=null)
         showMyAd();
         } else {
        //  movie.pause();
         }
        }
        
        function onSdkReady() {
         mraid.addEventListener('viewableChange', viewableChangeHandler);
         // Wait for the ad to become viewable for the first time
         //判断广告是否显示在了桌面上
         if (mraid.isViewable()) {
             //导入资源并渲染桌面
         showMyAd();
         }
        }
        function showMyAd() {
            //展示视频

            var movie = document.getElementsByTagName("video");
            var unmuteButton = document.getElementById("unmuteButton")
            for(let i = 0; i < movie; i ++){
            // movie.load();
            movie[i].play()
            unmuteButton.style.display = 'none'
            unmuteButton.addEventListener('click',()=>{
                movie[i].muted = false
            })
            }
            
        }
        </script>
    </html>`

}

function getcss() {
    var url = 'https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css?ver=4.8.14'
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            resolve(res.data)
                // return res.data
        })
    })


}


export function getBase64Image(img) {
    var canvas = document.createElement("canvas")
    canvas.width = img.width
    canvas.height = img.height
    var ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, img.width, img.height)
    var ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()
    var dataURL = canvas.toDataURL('image/' + ext)
    return dataURL
}

export function downHtml(id) {
    var a = document.createElement('a')
    a.style.display = 'none'
    a.download = 'index.html'
    if (document.getElementsByClassName('adjust-tip')[0]) {
        document.getElementsByClassName('adjust-tip')[0].style.display = 'none'
    }
    head(document.getElementById(id).innerHTML).then((res) => {
        var blob = new Blob([res])
        console.log(blob)
        a.href = URL.createObjectURL(blob)
        a.click()
    })
}