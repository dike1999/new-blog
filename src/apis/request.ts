/* eslint-disable indent */
import axios from 'axios';
import { message } from 'antd';

import { getToken } from '../utils/index';

export const API_BASE_URL = 'https://coderdi.top:6060';

let timer: string | number | NodeJS.Timeout | undefined;
const request = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
});

// 拦截请求
request.interceptors.request.use(
	(res) => {
		const token = getToken();
		if (token) {
			res.headers.common.Authorization = token;
		}
		return res;
	},
	(error) => {
		message.error('bed request');
		Promise.reject(error);
	}
);

// 拦截响应
// 拦截响应
request.interceptors.response.use(
	(response) => response.data,
	(err) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			if (err.response) {
				const { status, data } = err.response;
				switch (status) {
					case 401:
						message.error(
							(data && data.message) || '登录信息过期或未授权，请重新登录!'
						);
						break;
					default:
						message.error(data.message || `连接错误 ${status}!`);
						break;
				}
			} else {
				message.error(err.message);
			}
		}, 200); // 200 毫秒内重复报错则只提示一次!

		return Promise.reject(err);
	}
);

export default request;
