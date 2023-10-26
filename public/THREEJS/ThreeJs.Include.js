;(function () {
  var r = new RegExp('(^|(.*?\\/))(ThreeJs.Include.js)(\\?|$)'),
    s = document.getElementsByTagName('script'),
    src,
    m,
    baseurl = ''
  for (var i = 0, len = s.length; i < len; i++) {
    src = s[i].getAttribute('src')
    if (src) {
      var m = src.match(r)
      if (m) {
        baseurl = m[1]
        break
      }
    }
  }
  function inputScript(inc) {
    var script = '<' + 'script type="text/javascript" src="' + inc + '"' + '><' + '/script>'
    document.writeln(script)
  }
  function inputCSS(style) {
    var css = '<' + 'link rel="stylesheet" href="' + baseurl + '../css/' + style + '"' + '><' + '/>'
    document.writeln(css)
  }
  //加载类库资源文件写在这里
  function loadSMLibs() {
    inputScript(baseurl + 'three.min.js')
    inputScript(baseurl + 'Detector.js')
    inputScript(baseurl + 'DRACOLoader.js')
    inputScript(baseurl + 'CSS2DRenderer.js')
    inputScript(baseurl + 'EffectComposer.js')
    inputScript(baseurl + 'FXAAShader.js')
    inputScript(baseurl + 'GLTFLoader.js')
    inputScript(baseurl + 'OrbitControls.js')
    inputScript(baseurl + 'OutlinePass.js')
    inputScript(baseurl + 'RenderPass.js')
    inputScript(baseurl + 'ShaderPass.js')
    inputScript(baseurl + 'CopyShader.js')
    inputScript(baseurl + 'OBJLoader.js')
    inputScript(baseurl + 'RGBELoader.js')
    inputScript(baseurl + 'stats.min.js')
    inputScript(baseurl + 'dat.gui.min.js')
    inputScript(baseurl + 'THREEx.FullScreen.js')
    inputScript(baseurl + 'THREEx.WindowResize.js')
    inputScript(baseurl + 'THREEx.KeyboardState.js')
  }
  loadSMLibs()
})()
