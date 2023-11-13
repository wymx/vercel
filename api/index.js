// index.js - 服务端
const express = require('express')
const app = express()
const axios = require('axios')

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

// 解析表单
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}))
//从环境变量获取
var appid = ""
var secret = ""
// 超协同信息
var user = {
	appid: appid, // 填写你自己的appid ( 微信公众平台获取 )
	secret: secret, // 填写你自己的appsecret密钥 ( 微信公众平台获取 )
	openid: ''
}
// 模板ID - template_id
const temp_id = '8ckkRA7zT1Z-Whe7UDktzCB--UDlYkAh2-CtAM-tYnY' // 填写你申请选用的模板id

app.get('/', (req, res) => {
	console.log("客户端/发来：", req.query.code)
	res.send('ok')
})

app.post('/mjBack', (req, res) => {
	console.log('mjBackmjBackmjBackmjBackmjBackmjBack');
	console.log(res);
	
})
app.get('/getAccessToken', (req, res) => {
	getAccessToken((result) => {
		console.log('getAccessToken返回：', result)
		res.send(result)
	})
})


// 获取Openid请求接口
app.get('/getOpenId', (req, res) => {
	// console.log(req.body) 含有code参数
	console.log("客户端发来：", req.query.code)
	// let data = req.query.code
	// // 获取Openid函数
	// getOpenid(data, (result) => {
	// 	// 保存openid待用
	// 	console.log('用户OpenId:', result.data.openid)
	// 	user.openid = result.data.openid
	// 	res.send({
	// 		'request': 'ok'
	// 	})
	// })
})


app.post('/sendTempMsg', (req, res) => {

	console.log("客户端发来：", req.body)
	let formInfo = req.body.formInfo
	sendTempMsg(formInfo, (result) => {
		console.log('订阅消息发送结果：', result.data)
		res.send({
			'request': 'ok'
		})
	})
})

app.post('/generateScheme', (req, res) => {
	console.log("客户端发来：", req.body)
	let formInfo = req.body.formInfo
	generateScheme(formInfo, (result) => {
		console.log('获取结果结果：', result.data)
		res.send(result.data)
	})
})


app.post('/generateURLLink', (req, res) => {
	console.log("客户端发来：", req.body)
	let formInfo = req.body
	generateURLLink(formInfo, (result) => {
		console.log('generateURLLink获取结果结果：', result.data)
		res.send(result.data)
	})
})




// 监听 3000 端口号 | 127.0.0.1:3000
app.listen('3000', () => {
	console.log('Server Running 3000...')
})


//获取小程序 获取URLLink
function generateURLLink(formInfo, success) {
	console.log(formInfo);
	// 获取AccessToken
	getAccessToken((res) => {

		let token = res.data.access_token
		console.log('获取到的access_token:', token)

		if (res.data.access_token) {
			//scheme参数
		var temp = {
			"path": formInfo.path?formInfo.path:"/pages/index",
			"query": formInfo.query?formInfo.query:'',
			"is_expire":true,
			"env_version": "release",
		} 
		console.log("generateURLLink参数", temp)
		// 发送订阅API
		let url = 'https://api.weixin.qq.com/wxa/generate_urllink?access_token=' + token
		axios({
			url,
			method: 'POST',
			data: temp
		}).then((res) => {
			success(res)
		}).catch((err) => {
			console.log(err)
		})
		} else {
			success("access_token获取为空")
		}

	})

}


//获取小程序 scheme 码（总量1000）
function generateScheme(data, success) {
	console.log(data);
	// 获取AccessToken
	getAccessToken((res) => {
		//scheme参数
		var temp = {
			"jump_wxa":
			{
				"path": '/pages/webviewpage/webviewpage',
				"query": "url=https://app-api.aipu-waton.com/fat/image.html",
				"env_version": "release"
			},
			"is_expire":true,
			"expire_type":1,
			"expire_interval":1
		}
		console.log("scheme参数", temp)
		let token = res.data.access_token
		console.log('获取到的access_token:', token)
		// 发送订阅API
		let url = 'https://api.weixin.qq.com/wxa/generatescheme?access_token= ' + token
		axios({
			url,
			method: 'POST',
			data: temp
		}).then((res) => {
			success(res)
		}).catch((err) => {
			console.log(err)
		})
        
	})
}
//获取小程序码（总量1000）
function generateShortCode(qrPath, success) {
	// console.log(qrPath);
	getAccessToken((res) => {
	  //参数
	  var temp = {
		path: qrPath,
		env_version: "release",
		width: 280,
	  };
	  let token = res.data.access_token;
	  // console.log("获取到的access_token:", token);
	  // 发送订阅API
	  let url = "https://api.weixin.qq.com/wxa/getwxacode?access_token= " + token;
	  axios({
		url,
		method: "POST",
		responseEncoding: "base64", //重点
		data: temp,
	  })
		.then((res) => {
		  success(res);
		})
		.catch((err) => {
		  console.log(err);
		});
	});
  }



// 获取Openid处理函数 - 通过code获取openid
function getOpenid(data, success) {
	axios({
			url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + user.appid + '&secret=' + user.secret +
				'&js_code=' + data + '&grant_type=authorization_code',
			method: 'GET',
		})
		.then((res) => {
			// 成功返回 openid 
			// console.log(res.data.openid)
			user.openid = res.data.openid
			success(res)
		})
		.catch((err) => {
			console.log(err)
		})
}


// 获取access_token函数
function getAccessToken(success) {
	// let url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + user.appid + '&secret=' +
	// 	user.secret
	// axios({
	// 	url,
	// 	method: 'GET',
	// }).then((res) => {
	// 	console.log(res.data.access_token) // access_token
	// 	success(res)
	// }).catch((err) => {
	// 	console.log(err)
	// })

	let url = 'https://api.weixin.qq.com/cgi-bin/stable_token'
	axios({
		url,
		method: 'POST',
		data:{
			"grant_type": "client_credential",
			"appid": user.appid,
			"secret": user.secret,
		} 		
	}).then((res) => {
		console.log(res) // access_token
		console.log(res.data.access_token) // access_token
		success(res)
	}).catch((err) => {
		console.log(err)
	})
}



// 发送订阅消息函数处理
function sendTempMsg(formInfo, success) {
	console.log('订阅消息发送结果：', formInfo)
	// res.send({ 'request': 'ok' })
	// 获取接口调用凭据
	getAccessToken((res) => {
		// 订阅模板
		var temp = {
			"touser": user.openid,
			"template_id": temp_id,
			"data": {
				"character_string1": { "value": '202004200100000001' },
				"thing2": { "value": '【测试租用】小金刚一台' },
				"phrase3": { "value": '已发货' },
				"time4": { "value": '2020-04-20 12:30:28' }
			},
			"miniprogram_state": "developer",
			"lang": "zh_CN"
		}
		console.log("模板信息", temp)
		let token = res.data.access_token
		console.log('获取到的access_token:', token)
		// 发送订阅API
		let url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' + token
		axios({
			url,
			method: 'POST',
			data: temp
		}).then((res) => {
			success(res)
		}).catch((err) => {
			console.log(err)
		})
        
	})
}