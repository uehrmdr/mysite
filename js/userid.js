(function login(){
  
  //今日の日付データを変数hidukeに格納
  var hiduke=new Date(); 
  var date = new Date().getTime();
  var timest = new Date(date).toString();
  //年・月・日を取得
  var year = hiduke.getFullYear();
  var month = hiduke.getMonth()+1;
  var day = hiduke.getDate();
  //時間を取得
  var time = timest.split(' ')[4]
  var kyou = year+"_"+month+"_"+day;
  dataLayer.push({
    'event': 'userdata_track',
    'user_id': "test_"+kyou+"_"+time
    });
  })()
