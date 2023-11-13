import request from '../../utils/request';

export function getOpenId() {
	return request.get('/getOpenId');
}

export function changePassword(param, option) {
  return request.post('/user/modifyPwd', param, option);
}