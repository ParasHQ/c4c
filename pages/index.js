import CardData from 'data/token.json'
import { useState } from 'react'
import CardComponent from 'components/CardComponent'
import ParasLogo from 'components/ParasLogo'

export default function Home() {
	const [index, setIndex] = useState(400)

	const updateCard = () => {
		setIndex(index - 1)
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
				<div className="text-white text-center font-bold mb-4 text-2xl">
					Join Card 4 Card Event
				</div>
				<CardComponent token={CardData[index]} updateCard={updateCard} />
			</div>
		</div>
	)
}
