import request from './request';

export const deleteDiscuss = (url: string) => request.delete(url);

export const postDiscuss = (params: {
	userId: number;
	articleId: number;
	content: string;
	commentId?: number;
}) => {
	const url = '/discuss';
	return request.post(url, params);
};
