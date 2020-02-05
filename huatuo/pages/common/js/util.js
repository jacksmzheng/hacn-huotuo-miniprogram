const { $Message } = require('../../dist/base/index');

function handleError(message) {
  // $Message({
  //   content: message || '请完善信息!',
  //   type: 'error'
  // });
  wx.showToast({
    title: message || '请完善信息!',
    icon: 'none',
    duration: 3000,
  })
}

function showErrorMessage(code, res, message) {
  var msg = '';
  if(message) {
    msg = message;
  } else if(res) {
    msg = genErrorMsg(res);
  }
  switch (code){
    case 400:
      res = msg;
      break;
    case 500:
      res = msg;
      break;
    case 404:
      res = "网络连接失败，请稍后重试！";
      break;
    default:
      res = "网络请求错误，请稍后重试！";
      break;
  }
  wx.showToast({
    title: res,
    icon: 'none',
    duration: 3000,
  })
}

function genErrorMsg(res){
  var errorMsg = "网络连接失败，请稍后重试！";
  if (res.statusCode == 404) {
    errorMsg = "网络连接失败，请稍后重试！";
  } else {
    if (res.data && res.data.errorInfo && res.data.errorInfo.message && res.data.errorInfo.message.key) {
      errorMsg = res.data.errorInfo.message.key;
    }
  }
  return errorMsg
}

function regStaffid(id) {
  return (/^\d{8}$/g).test(id);
}

function regMobileNum(mobile) {
  return (/^1\d{10}$/g).test(mobile);
}

function regVerifyCode(code) {
  return (/^\d{4}$/g).test(code);
}

function goNext(url) {
  wx.navigateTo({
    url: url
  })
}

module.exports = {
  showErrorMessage,
  regStaffid,
  regMobileNum,
  regVerifyCode,
  genErrorMsg,
  handleError,
  goNext
}