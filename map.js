var $rc = $('#rcontent')
var prevId;

function onCss(id) {
  switch (id) {
    case 'i_australia':
      $('#path3300').css('fill', '#ffccff')
      $('#path3348').css('fill', '#ffccff')
      break;
    case 'i_usa':
      $('#path3804').css('fill', '#ffccff')
      break;
    case 'i_korea':
      $('#path6046').css('fill', '#ffccff')
      $('#path6036').css('fill', '#ffccff')
      break;
    case 'i_japan':
      $("#path3482").css('fill', '#ffccff')
      $("#path3484").css('fill', '#ffccff')
      $("#path3486").css('fill', '#ffccff')
      $("#path3496").css('fill', '#ffccff')
      $("#path3504").css('fill', '#ffccff')
      $("#path3514").css('fill', '#ffccff')
      $("#path3516").css('fill', '#ffccff')
      $("#path3518").css('fill', '#ffccff')
      $("#path3520").css('fill', '#ffccff')
      $("#path3488").css('fill', '#ffccff')
      $("#path3490").css('fill', '#ffccff')
      $("#path3492").css('fill', '#ffccff')
      $("#path3494").css('fill', '#ffccff')
      $("#path3498").css('fill', '#ffccff')
      $("#path3500").css('fill', '#ffccff')
      $("#path3502").css('fill', '#ffccff')
      $("#path3506").css('fill', '#ffccff')
      $("#path3508").css('fill', '#ffccff')
      $("#path3510").css('fill', '#ffccff')
      $("#path3512").css('fill', '#ffccff')
      $("#path3522").css('fill', '#ffccff')
      $("#path3524").css('fill', '#ffccff')
      $("#path3526").css('fill', '#ffccff')
      $("#path3528").css('fill', '#ffccff')
      $("#path3530").css('fill', '#ffccff')
      $("#path3532").css('fill', '#ffccff')
      $("#path3534").css('fill', '#ffccff')
      $("#path3536").css('fill', '#ffccff')
      $("#path3538").css('fill', '#ffccff')
      $("#path3540").css('fill', '#ffccff')
      $("#path3542").css('fill', '#ffccff')
      $("#path3544").css('fill', '#ffccff')
      $("#path3546").css('fill', '#ffccff')
      $("#path3548").css('fill', '#ffccff')
      $("#path3550").css('fill', '#ffccff')
      $("#path3552").css('fill', '#ffccff')
      $("#path3556").css('fill', '#ffccff')

      break
    default:
      $('#' + id).css('fill', '#ffccff')
  }
}

function offCss(id) {
  switch (id) {
    case 'i_australia':
      $('#path3300').css('fill', '#ffffcc')
      $('#path3348').css('fill', '#ffffcc')
      break;
    case 'i_usa':
      $('#path3804').css('fill', '#ffffcc')
      break;
    case 'i_korea':
      $('#path6046').css('fill', '#ffffcc')
      $('#path6036').css('fill', '#ffffcc')
      break;
    case 'i_japan':
      $("#path3482").css('fill', '#ffffcc')
      $("#path3484").css('fill', '#ffffcc')
      $("#path3486").css('fill', '#ffffcc')
      $("#path3496").css('fill', '#ffffcc')
      $("#path3504").css('fill', '#ffffcc')
      $("#path3514").css('fill', '#ffffcc')
      $("#path3516").css('fill', '#ffffcc')
      $("#path3518").css('fill', '#ffffcc')
      $("#path3520").css('fill', '#ffffcc')
      $("#path3488").css('fill', '#ffffcc')
      $("#path3490").css('fill', '#ffffcc')
      $("#path3492").css('fill', '#ffffcc')
      $("#path3494").css('fill', '#ffffcc')
      $("#path3498").css('fill', '#ffffcc')
      $("#path3500").css('fill', '#ffffcc')
      $("#path3502").css('fill', '#ffffcc')
      $("#path3506").css('fill', '#ffffcc')
      $("#path3508").css('fill', '#ffffcc')
      $("#path3510").css('fill', '#ffffcc')
      $("#path3512").css('fill', '#ffffcc')
      $("#path3522").css('fill', '#ffffcc')
      $("#path3524").css('fill', '#ffffcc')
      $("#path3526").css('fill', '#ffffcc')
      $("#path3528").css('fill', '#ffffcc')
      $("#path3530").css('fill', '#ffffcc')
      $("#path3532").css('fill', '#ffffcc')
      $("#path3534").css('fill', '#ffffcc')
      $("#path3536").css('fill', '#ffffcc')
      $("#path3538").css('fill', '#ffffcc')
      $("#path3540").css('fill', '#ffffcc')
      $("#path3542").css('fill', '#ffffcc')
      $("#path3544").css('fill', '#ffffcc')
      $("#path3546").css('fill', '#ffffcc')
      $("#path3548").css('fill', '#ffffcc')
      $("#path3550").css('fill', '#ffffcc')
      $("#path3552").css('fill', '#ffffcc')
      $("#path3556").css('fill', '#ffffcc')
      break;
    default:
      $('#' + id).css('fill', '#ffffcc')
  }
}

function listenTo(id, provName, provDetail) {
  offCss(id)
  let $th = $('#' + id)
  $th.click(() => {
    $rc.html("")
    $rc.append("<h3>" + provName + "</h3>")
    let cdetail = _data[provName]
    for (i in cdetail) {
      $rc.append("<h4>" + i + "</h4>");
      let $ul = $("<ul></ul>")
      for (j in cdetail[i])
        $ul.append("<li>" + cdetail[i][j] + "</li>")
      $rc.append($ul);
    }
  })
  $('#' + id).click(() => {
    if (prevId)
      offCss(prevId)
    onCss(id)
    prevId = id
  })
}


// Listening
{
  listenTo("i_heilongjiang", "黑龙江", [])
   listenTo("i_xinjiang","新疆",[])
  listenTo("i_korea", "韩国", ["path6046", "path6036"])
  listenTo("i_usa", "美国", ["path3804"])
  listenTo("i_australia", "澳大利亚", ["path3348", "path3300"])
  listenTo("i_tianjin", "天津", [])
  listenTo("i_beijing", "北京", [])
  listenTo("i_guangdong", "广东", [])
  listenTo("i_jiangsu", "江苏", [])
  listenTo("i_shandong", "山东", [])
  listenTo("i_zhejiang", "浙江", [])
     listenTo("i_macau", "澳门", [])
  listenTo("i_liaoning", "辽宁", [])
  listenTo("i_shanxi", "陕西", [])
  listenTo("i_hunan","湖南",[])
  listenTo("i_shanghai","上海",[])
  listenTo("i_sichuan","四川",[])
  listenTo("i_japan", "日本", ["path3482", "path3484", "path3486", "path3496", "path3504", "path3514", "path3516", "path3518", "path3520", "path3488", "path3490", "path3492", "path3494", "path3498", "path3500", "path3502", "path3506", "path3508", "path3510", "path3512", "path3522", "path3524", "path3526", "path3528", "path3530", "path3532", "path3534", "path3536", "path3538", "path3540", "path3542", "path3544", "path3546", "path3548", "path3550", "path3552", "path3556"])
}