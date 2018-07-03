/**
 * 配置编译环境和线上环境之间的切换
 *
 * API_PUBLIC_PATH: api接口公用路径
 * imgBaseUrl: 图片所在域名地址
 *
 */

let API_PUBLIC_PATH = '';
if(process.env.NODE_ENV == 'development'){
    API_PUBLIC_PATH = 'http://localhost:3333/api/'
}
const imgBaseUrl = '';

const REGEX = { //系统所有正则表达式
  loginPwd: {
    regex: /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%\^&*?]{8,20}$/,
    msg: '请输入8-20位字母与数字组合密码'
  },
  payPwd: {
    regex: /^\d{6}$/,
    msg: '请输入6位纯数字交易密码',
    regex2: /(\d)\1{5}/,
    msg2: '请输入6位数字不相同的交易密码',
    regex3(str) {
      str = str.toString();
      var flag = true;
      for (var i = 0; i < str.length - 1; i++) {
        if (Math.abs(str.charAt(i) - str.charAt(i + 1)) != 1) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    msg3: '请输入6为数字不连续的交易密码'
  },
  mobile: {
    regex: /^((1[3-9][0-9]))\d{8}$/,
    msg: '请输入正确的手机号'
  },
  validCode: {
    regex: /^\d{6}$/,
    msg: '请输入6位纯数字短信验证码'
  },
  nickname: {
    regex: function() {
      return new RegExp() //返回空正则可以匹配所有
    },
    msg: '请输入正确的昵称'
  }, //连续四个数字
  email: {
    regex: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    msg: '请输入正确的邮箱地址'
  },
  qq: {
    regex: /^[1-9][0-9]{4,14}$/,
    msg: '请输入正确的qq号码'
  },
  noHtml: {
    regex: new RegExp(/[(\@)(\#)(\$)(\^)(\&)(\*)(\[)(\])(\{)(\})(\|)(\\)(\')(\/)(\<)(\>)(\)]+/),
    msg: '请不要输入特殊字符'
  },
  fixedPhone: {
    regex: /0\d{2,3}-\d{5,9}|0\d{2,3}-\d{5,9}/,
    msg: '请输入正确格式的固定电话。如：021-2356984'
  },
  chinese: {
    regex: /^[\u4e00-\u9fa5]{0,}$/,
    msg: '只能是汉字'
  },
  positiveInteger: {
    regex: /^[1-9]\d*$/,
    msg: '只能是正整数'
  },
  ID: {
    regex: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/,
    msg: '请输入正确的证件号'
  },
  website: {
    regex: /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/,
    msg: '请输入正确的网店地址'
  },
  weixin: { //以字母开头的帐号（可以使用6—20个字母、数字、下划线和减号，必须以字母开头
    regex: /^[A-Za-z][0-9a-zA-Z_-]{5,19}/,
    msg: '请输入正确的邮箱地址'
  }
}

export {
  API_PUBLIC_PATH,
  imgBaseUrl,
  REGEX,
}
