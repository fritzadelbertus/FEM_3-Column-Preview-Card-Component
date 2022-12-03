import CarCard from "./CarCard"
import carInfos from './carData'

function PreviewCard() {
  return (
    <div className="PreviewCard">
      {carInfos.map((item, index) => (
        <CarCard props={item} />
      ))}
    </div>
  )
}

export default PreviewCard