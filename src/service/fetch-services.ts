import { BASE_URL, API_VERSION } from '@/config';
import { notFound } from 'next/navigation';

const pbBaseUrl = BASE_URL + '/pb/api/' + API_VERSION;

export async function getArticle(path: string) {
	const url = pbBaseUrl + '/article/detail?url=' + path;
	const res = await fetch(url, { next: { revalidate: 60 } });

	if (res.status === 404) notFound();
	if (!res.ok) throw new Error('Failed to fetch data');

	return res.json();
}
