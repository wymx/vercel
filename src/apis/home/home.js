import request from '../../utils/request';

export function getOpenId() {
	return request.get('/getOpenId');
}

export function requestIndex(param, option) {
	return request.get('/');
  }

export function change(param, option) {
  return request.post('/user/modifyPwd', param, option);
}