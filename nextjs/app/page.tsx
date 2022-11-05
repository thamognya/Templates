'use client'
import init, { add } from 'rustwasm'
import React, { useEffect, useState } from 'react'

export default function Page() {
	const [ans, setAns] = useState(0)
	useEffect(() => {
		init().then(() => {
			setAns(add(1, 11))
		})
	}, [])
	return (
		<div>
			<div className="text-5xl">{ans}</div>
		</div>
	)
}
