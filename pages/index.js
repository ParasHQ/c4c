import { useEffect, useState } from 'react'
import CardComponent from 'components/CardComponent'
import ParasLogo from 'components/ParasLogo'
import axios from 'axios'
import Head from 'next/head'

export default function Home() {
	const [currentCard, setCurrentCard] = useState(null)
	const [nextCard, setNextCard] = useState(null)

	useEffect(async () => {
		const resCurrent = await axios.get('/api/card4card')
		setCurrentCard(resCurrent.data[0])
	}, [])

	const updateCard = async () => {
		if (nextCard) {
			setCurrentCard(nextCard)
		}

		console.log('update card')
		const resNext = await axios.get('/api/card4card')
		setNextCard(resNext.data[0])
	}

	return (
		<div className="bg-black md:h-screen flex flex-col items-center justify-center py-4">
			<Head>
				<title>Paras Card for Card</title>
				<meta
					name="description"
					content="Create, Trade and Collect. All-in-one social digital art cards marketplace for creators and collectors."
				/>

				<meta name="twitter:title" content="Paras — Digital Art Cards Market" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ParasHQ" />
				<meta name="twitter:url" content="https://paras.id" />
				<meta
					name="twitter:description"
					content="Create, Trade and Collect. All-in-one social digital art cards marketplace for creators and collectors."
				/>
				<meta
					name="twitter:image"
					content="https://paras-media.s3-ap-southeast-1.amazonaws.com/paras-v2-twitter-card-large.png"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Paras — Digital Art Cards Market" />
				<meta
					property="og:site_name"
					content="Paras — Digital Art Cards Market"
				/>
				<meta
					property="og:description"
					content="Create, Trade and Collect. All-in-one social digital art cards marketplace for creators and collectors."
				/>
				<meta property="og:url" content="https://c4c.paras.id" />
				<meta
					property="og:image"
					content="https://paras-media.s3-ap-southeast-1.amazonaws.com/paras-v2-twitter-card-large.png"
				/>
			</Head>
			<div
				className="fixed inset-0 opacity-75"
				style={{
					zIndex: 0,
					backgroundImage: `url('/bg.jpg')`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			></div>
			<div className="z-10">
				<ParasLogo />
			</div>
			<div className="p-8 max-w-6xl m-auto z-10 w-full">
				<div className="text-white text-center font-bold text-2xl">
					FIND THE FINEST NFT ON PARAS
				</div>
				<p className="text-white text-center mb-4 text-lg">
					Special on #card4card, get highest edition NFTs with low prices
				</p>
				{currentCard && (
					<CardComponent
						token={currentCard.token_series}
						updateCard={updateCard}
					/>
				)}
			</div>
		</div>
	)
}
