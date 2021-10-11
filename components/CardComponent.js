import QRCode from 'qrcode.react'
import { useEffect, useState } from 'react'
import { parseImgUrl, prettyBalance } from 'utils/common'
import Card from './Card'

const CardComponent = ({
	token = {
		_id: '6135d83581c9ef6c8f768518',
		contract_id: 'x.paras.near',
		token_series_id: '8240',
		creator_id: 'momopyamas.near',
		price: '500000000000000000000000',
		royalty: {
			'momopyamas.near': 1000,
		},
		metadata: {
			title: 'Shihongqing-Rising sun',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,',
			media: 'bafybeifikwrzghfzebfue22w4doizdggepf3hvrxbsitfk2nnccbttbn64',
			media_hash: null,
			copies: 56,
			issued_at: null,
			expires_at: null,
			starts_at: null,
			updated_at: null,
			extra: null,
			reference: 'bafybeidpm3b6kvsmwxscy3il77u4qj44tzh7by7f7ad4cqzb7oszgn4dsa',
			reference_hash: null,
			collection: '2',
			collection_id: '2-by-momopyamasnear',
			creator_id: 'momopyamas.near',
			blurhash: 'UmE{t*R*8{NG%QRkoaa_R=j[WVjuI]s;t6of',
		},
		in_circulation: 44,
		updated_at: 1633434292423,
		category_ids: ['card4card-aug-21'],
		lowest_price: '500000000000000000000000',
		total_mint: 44,
		is_creator: true,
	},
	updateCard,
}) => {
	const [isTokenChange, setIsTokenChange] = useState(false)

	useEffect(() => {
		if (!isTokenChange) {
			setTimeout(() => {
				updateCard()
				setIsTokenChange(true)
			}, 1500)
		} else {
			setTimeout(() => {
				setIsTokenChange(false)
			}, 25500)
		}
	}, [isTokenChange])

	return (
		<>
			<div
				className={`md:flex justify-center items-center h-full w-full ${
					isTokenChange ? 'fadeIn' : 'fadeOut'
				}`}
			>
				<div className="md:w-1/3">
					<Card
						imgUrl={parseImgUrl(token.metadata.media, null, {
							width: `600`,
							useOriginal: process.env.APP_ENV === 'production' ? false : true,
						})}
						imgBlur={token.metadata.blurhash}
						token={{
							title: token.metadata.title,
							collection: token.metadata.collection || token.contract_id,
							copies: token.metadata.copies,
							creatorId: token.metadata.creator_id || token.contract_id,
						}}
					/>
				</div>
				<div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
					<p className="text-white font-bold text-4xl">
						{token.metadata.title}
					</p>
					<p className="text-white text-lg mb-4 opacity-80">
						by {token.metadata.creator_id}
					</p>
					<p className="text-white opacity-80">{token.metadata.description}</p>
					<div className="flex mt-8 bg-gray-900 p-2 rounded-lg items-center flex-grow-0 md:w-2/3">
						<QRCode
							size={128}
							value={`https://paras.id/token/${token.contract_id}::${token.token_series_id}`}
							imageSettings={{
								src: '/favicon.ico',
								x: null,
								y: null,
								height: 18,
								width: 18,
								excavate: true,
							}}
						/>
						<div className="ml-4">
							<p className="text-white font-bold text-2xl">
								{token.price
									? `Buy for ${prettyBalance(token.price, 24, 4)} Ⓝ`
									: `See details`}
							</p>
							<p className="text-white">Scan Here</p>
						</div>
					</div>
				</div>
			</div>
			<div className={`flex justify-center mt-8 ${isTokenChange ? '' : ''}`}>
				<div className="progress">
					<div className="color"></div>
				</div>
			</div>
		</>
	)
}

export default CardComponent
