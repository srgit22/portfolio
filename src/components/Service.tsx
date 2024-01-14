
import Card from './Card';
import projects from '../projectconstants';

const Service = () => {;
  
  return (
    <div>
          <div className="px-[8%] py-[8%] h-full float-left bg-[#e7e5e4]">
              <div className="float-left text-center gap-2 p-[2%] max-h-54 items-center flex flex-row flex-wrap justify-start text-b">
              {projects.map((obj)=>{
                  return <Card data={obj}/>;
              })}
              </div>
          </div>
    </div>
  )
}

export default Service
