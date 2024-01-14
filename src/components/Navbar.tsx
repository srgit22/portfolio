import { BrowserRouter as Router, Link } from 'react-router-dom';
import viteLogo from '/vite.svg';

function Navbar() {
    return(
        <>
            <div className="px-[2%] py-[2%] bg-[#06b6d4] float-left w-full sticky top-0 shadow shadow-[#06b6d4]">
                <div className='grid grid-flow-row auto-rows-max grid-cols-3 gap-4'>
                    <div className='cursor-pointer'>
                        <img src={viteLogo} className="logo size-18" alt="Vite logo" onClick={(e)=>{location.reload()}} />
                    </div> 
                    <div>
                    </div>
                    <div className="flex flex-wrap space-x-4 capitalize text-[#fff] font-bold">                   
                        <div className='flex-1'><Link to="/">home</Link></div>                    
                        <div className='flex-1'><Link to="/about">about</Link></div>
                        <div className='flex-1'><Link to="/portfolio">skills</Link></div>
                        <div className='flex-1'><Link to="/service">projects</Link></div>
                        <div className='flex-1'><Link to="/contact">contact</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;


