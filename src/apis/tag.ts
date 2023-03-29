import request from './request';

export const getTagList = () => {
	const url = '/tag/list';
	return request.get(url);
};
