import request from './request';

export const createArticle = (params: {
	title: string;
	content: string;
	tagList: string[];
	categoryList: string[];
	authorId: number;
}) => {
	const url = '/article';
	return request.post(url, params);
};

export const deleteArticleById = (id: number) => {
	const url = `/article/${id}`;
	return request.delete(url);
};

export const deleteArticleList = (params: string) => {
	const url = `/article/list/${params}`;
	return request.delete(url);
};

export const getArticleById = ({
	articleId,
	type,
}: {
	articleId: number;
	type: number;
}) => {
	let url = `/article/${articleId}`;
	if (type) {
		url += `?type=${type}`;
	}
	return request.get(url);
};

export const postArticleCheckExist = (params: { fileNameList: string[] }) => {
	const url = '/article/checkExist';
	return request.post(url, params);
};

export const updateActicle = (
	id: number,
	params: {
		title: string;
		content: string;
		tags: string[];
		categories: string[];
	}
) => {
	const url = `/article/${id}`;
	return request.put(url, params);
};

export const uploadArticle = (params: {
	authorId: number;
	uploadList: unknown;
}) => {
	const url = '/article/upload/confirm';
	return request.post(url, params);
};
