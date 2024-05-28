import { posts } from "./data/posts";
import { TComment, TNormalizeData, TPosts, TotalPriceParams } from "./types/types";

// #1 TotalPrice 

const totalPrice = ({ price, discount, isInstallment, months }: TotalPriceParams): number => {
	return (price - (price * discount) / 100) / (isInstallment ? months : 1)
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
console.log(price)

// ===============================================================================================


// #2 NormalizeData

const normalizeData = (unnormalizedData: TPosts[]): TNormalizeData => {
	const byId: { [key: string]: TPosts } = {}
	const allIds: string[] = []
	unnormalizedData.forEach((post) => {
		byId[post.id] = post
		allIds.push(post.id)
	});

	return {
		byId,
		allIds,
	}

}

console.log(normalizeData(posts))
/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */

// ===============================================================================================


// #3 GetDataComment

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

const getData = async (url: string): Promise<void> => {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('Не удалось получить данные')
		}

		const data: TComment[] = await response.json()

		data.forEach((comment) => {
			console.log(`ID: ${comment.id}, Email: ${comment.email}`)
		})
	} catch (error) {
		console.error(error)
	}
}

getData(COMMENTS_URL);