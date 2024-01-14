import { BrowserRouter as Router, Link } from 'react-router-dom';
import viteLogo from '/vite.svg';

function Topsection() {
    return(
        <>
            <div className="bg-[url('./assets/bg1.jpg')] float-left w-full h-full">
                <div className="m-10">

                    <div className='grid grid-flow-row auto-rows-max grid-cols-3 gap-4'>
                        <div className=''>
                            <img src={viteLogo} className="logo size-18" alt="Vite logo" />
                        </div> 
                        <div>
                        </div>
                        <div className="flex flex-wrap space-x-4">                   
                            <div className=''><Link to="/">home</Link></div>                    
                            <div className=''><Link to="#about">about</Link></div>
                            <div className=''><Link to="/">portfolio</Link></div>
                            <div className=''><Link to="/">service</Link></div>
                            <div className=''><Link to="/">contact</Link></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Topsection;
