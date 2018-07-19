/* 科普：
1、华东地区（包括山东、江苏、安徽、浙江、福建、上海）；
2、华南地区（包括广东、广西、海南）；
3、华中地区（包括湖北、湖南、河南、江西）；
4、华北地区（包括北京、天津、河北、山西、内蒙古）；
5、西北地区（包括宁夏、新疆、青海、陕西、甘肃）；
6、西南地区（包括四川、云南、贵州、西藏、重庆）；
7、东北地区（包括辽宁、吉林、黑龙江）；
8、台港澳地区（包括台湾、香港、澳门）。
*/

function insert($area, groups){
  let cnt = $('<div class="memberlist">');
  for(k in groups){
    if(!_data[groups[k]]) continue;
    let scp = $('<div class="mb-region">');
    scp.append('<b>'+ groups[k] +'</b>');
    let gr = _data[groups[k]];
    for(j in gr){
      let sdp = $('<div class="mb-school">');
      sdp.append('<span>' + j + '</span>');
      let sdr = $('<ul>');
      for(i in gr[j]){
        sdr.append('<li>' + gr[j][i] +'</li>')
      }
      //console.log("sdr:",sdr);
      sdp.append(sdr)
      scp.append(sdp)
    }
    //console.log("scp:",scp)
    cnt.append(scp)
  }
  //console.log("cnt:",cnt)
  $area.append(cnt)
}


{
  insert($('#dbc-body'), ["黑龙江","吉林","辽宁"]);
  insert($('#hdc-body'), ["山东","江苏","安徽","浙江","福建","上海"]);
  insert($('#hzc-body'), ["湖北","湖南","河南","广西"]);
  insert($('#hbc-body'), ["北京","天津","河北","山西","内蒙古"]);
  insert($('#xbc-body'), ["宁夏","新疆","青海","陕西","甘肃","四川","云南","贵州","西藏","重庆"]);
  insert($('#hnc-body'), ["广东","广西","海南","香港","澳门","台湾"]);
  insert($('#osc-body'), ["澳大利亚","韩国","美国","日本"]);
}