
import projectImg from '../assets/project.jpg';
import { BrowserRouter as Router, Link } from 'react-router-dom';

type data = {
  url:string,
  description:string,
}

type CardProps = {
  data:data,
}

const Card: React.FC<CardProps> =   ({data}) => {
  return (
    <>
      <div className="bg-[#fff] border-2 border-solid border-teal-500 rounded-xl shadow-lg shadow-[#000]">
        <div className="w-96 p-[2%] ">
            <img src={projectImg} />
            <div className='description text-[#0f766e] p-[1%] '>{data?.description}</div>
            <div className='underline capitalize'><Link to="http://beatmysugar.com">url:{data?.url}</Link></div>
        </div>
      </div>
    </>
  )
}

export default Card
