import { BrowserRouter as Router, Link } from 'react-router-dom';
import viteLogo from '/vite.svg';
import profileImg from '../assets/profile-image1.jpeg';

function Home() {
    return(
        <>
            <div className="bg-[url('./assets/bg1.jpg')] float-left w-full h-full">
                <div className="">
                  <div className="w-full float-left">
                    <div className="grid grid-cols-2 grid-flow-col sm:grid-rows-2 md:grid-rows-1">
                      <div className="mt-[28%] ml-[35%]" >
                        <p className=" ">
                          <span className='capitalize text-white [#1e40af] text-2xl'>hello <span className="text-[#0e7490]">I</span><span className='lowercase text-[#0e7490]'>`m</span></span>
                        </p>
                        <p className=" ">
                          <span className='uppercase text-[#0e7490] text-5xl'>sanjay rawat</span>
                        </p>
                        <p className=" ">
                          <span className='capitalize text-[#86198f] text-1xl'>a creative developer from india</span>
                        </p>  
                        <button className="bg-violet-500 hover:bg-sky-500 mt-[22px] p-2 pl-3 pr-3 rounded-xl text-white">About me</button>
                      </div>
                      <div className="flex justify-center mt-[28%] ml-[2%]" >
                        <span>
                          <img className='size-40 rounded-3xl border-solid border-4 border-white' src={profileImg}/>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
        </>
    )
}



export default Home
