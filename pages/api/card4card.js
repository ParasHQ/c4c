import db from 'utils/database'

export default async function card4cardAPI(req, res) {
	if (!db.ready) {
		await db.init()
	}
	console.log('db is ready')

	const tokenCategories = await db.root
		.collection('token_categories')
		.aggregate([
			{ $match: { status: 'accepted', category_id: 'card4card' } },
			{ $sample: { size: 1 } },
			{
				$lookup: {
					from: 'token_series',
					localField: 'token_series_id',
					foreignField: 'token_series_id',
					as: 'token_series',
				},
			},
			{
				$set: {
					token_series: {
						$arrayElemAt: ['$token_series', 0],
					},
				},
			},
		])
		.toArray()

	res.status(200).json(tokenCategories)
}
