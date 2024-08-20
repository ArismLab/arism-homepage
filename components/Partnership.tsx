const Partnership = ({ src, name }) => {
	return (
		<div className="mx-10 flex items-center gap-5">
			<img src={src} alt="partner" className="h-full object-cover" />
			<p>{name}</p>
		</div>
	)
}

export default Partnership
