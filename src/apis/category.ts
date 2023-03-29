import request from './request';

export const getCategoryList = () => {
	const url = '/category/list';
	return request.get(url);
};
