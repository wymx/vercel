import request from '../../utils/request';

export function getOpenId() {
	return request.get('/api/getOpenId');
}

export function requestIndex(param, option) {
	return request.get('/api/');
  }

export function change(param, option) {
  return request.post('/api/modifyPwd', param, option);
}