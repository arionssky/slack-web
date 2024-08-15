import { ICookies } from '@/types';

export function cookieParser(cookieString: string) {
	if (cookieString === '') return {};
	let pairs = cookieString.split(';');
	let splittedPairs = pairs.map(cookie => cookie.split('='));
	const cookieObj = splittedPairs.reduce(function (obj: ICookies, cookie) {
		obj[decodeURIComponent(cookie[0].trim())] = decodeURIComponent(cookie[1].trim());
		return obj;
	}, {});
	return cookieObj;
}
