'use client';
import axios from 'axios';

import { API_URL, AUTH_TOKEN } from './index';
import type { RawAxiosRequestHeaders } from 'axios';
import { showMessage } from '@/components';
import { cookieParser } from '@/utils';

declare module 'axios' {
	interface AxiosRequestConfig {
		silent?: boolean;
		noAuthorization?: boolean;
	}
}

axios.interceptors.request.use(config => {
	const cookies = cookieParser(document.cookie);
	// @ts-ignore
	config.headers = {
		'Content-Type': 'application/json',
		'Accept-Language': 'en',
		...(config.headers as RawAxiosRequestHeaders), // <<<< this here
	};

	if (!config.noAuthorization && !config.headers.Authorization) {
		config.headers.Authorization = cookies[AUTH_TOKEN] ?? '';
	}

	if (config.url && !config.url.startsWith('http')) {
		config.url = `${API_URL}${config.url}`;
	}

	return config;
});

axios.interceptors.response.use(
	res => {
		return res;
	},
	error => {
		if (error?.message === 'Network Error') {
			showMessage('Network error');
		}

		if (error?.response?.data?.error?.isReadableMessage && error?.response?.status !== 400) {
			showMessage(error?.response?.data?.error?.message ?? 'Failed');
		}

		if (error?.response?.status === 400) {
			const message = error?.data?.error?.message ?? error?.response?.data?.error?.message;
			showMessage(message ?? 'Something wrong');
		}

		if (error?.response?.status === 401) {
			document.cookie = AUTH_TOKEN + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		}

		return Promise.reject(error?.response);
	}
);
