export const useImageUrl = (htmlString) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlString, 'text/html');
	const imageUrl = doc.getElementsByTagName('img')[0]?.src;
	console.log(imageUrl);
	return imageUrl || '';
};
