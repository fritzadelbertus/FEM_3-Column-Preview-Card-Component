type carDataProp = {
  props: {
    title: string,
    desc: string,
    img: string
  }
}

function CarCard({props}: carDataProp) {
  const { title, desc, img } = props
  return (
    <div className="CarCard">
      <div className="card-content">
        <div>
          <img src={img} alt={`Image of ${title}`} />
        </div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div><button>Learn More</button></div>
    </div>
  )
}

export default CarCard