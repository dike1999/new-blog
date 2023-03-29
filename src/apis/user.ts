import request from './request';

export const deleteUserById = (id: number) => {
	const url = `/user/${id}`;
	return request.get(url);
};

export const postLogin = (params: { account: string; password: string }) => {
	const url = '/login';
	return request.post(url, params);
};

export const postRegister = (params: {
	username: string;
	password: string;
	email: string;
}) => {
	const url = '/register';
	return request.post(url, params);
};
export const putUserAuthority = (
	id: number,
	params: {
		notice?: boolean;
		disabledDiscuss?: boolean;
	}
) => {
	const url = `/user/${id}`;
	return request.put(url, params);
};
