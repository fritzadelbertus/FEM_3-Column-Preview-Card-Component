import sedanSVG from './assets/icon-sedans.svg'
import suvSVG from './assets/icon-suvs.svg'
import luxurySVG from './assets/icon-luxury.svg'


type carDataType = {
  title: string,
  desc: string,
  img: string
}

const data: carDataType[] = [
  {
    title: 'Sedans',
    desc: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    img: sedanSVG
  },
  {
    title: 'SUVs',
    desc: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    img: suvSVG
  },
  {
    title: 'Luxury',
    desc: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    img: luxurySVG
  }
]

export default data