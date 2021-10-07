import { useEffect, useState } from 'react'
import CardComponent from 'components/CardComponent'
import ParasLogo from 'components/ParasLogo'
import axios from 'axios'

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
		<div className="bg-black h-screen flex flex-col items-center justify-center py-4">
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
			<div className="py-2 max-w-6xl m-auto z-10 w-full">
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
