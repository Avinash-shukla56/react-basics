import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { ImWhatsapp } from "react-icons/im";

const data = [
  {
    img: img1,
    title: "Title_01",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt amet? Et aut minima optio. Consequatur officiis repudiandae et minima!",
    price: 299
  },
  {
    img: img2,
    title: "Title_02",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt amet? Et aut minima optio. Consequatur officiis repudiandae et minima!",
    price: 899
  },
  {
    img: img3,
    title: "Title_03",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt amet? Et aut minima optio. Consequatur officiis repudiandae et minima!",
    price: 499
  }
]

// React icons

const Card = () => {
  return (
    
            data.map((item,index) => (
              <div className="card" key={index} style={{ height:'550px', width:'30%' }}>
                <img src={item.img} alt="" />
                <div className="card-body">
                  <p className="card-title">{item.title}</p>
                  <p className='card-text'>{item.desc}</p>
                  <a href="#" className='btn btn-primary'>{item.price}</a>
                  <ImWhatsapp className='icons' />
                </div>
              </div>              
            ))
  )
}

export default Card
