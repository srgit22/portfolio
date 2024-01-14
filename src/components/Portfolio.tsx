import skillconstants from "../skillconstants";

function Portfolio() {
    return(
        <>
           <div className="px-[8%] py-[14%] bg-[#e7e5e4] h-full">
                <h1 className="px-[2%] text-left text-3xl text-[#0369a1] uppercase">skills</h1>
                <div className="w-full float-left  text-[#0369a1] text-center gap-4 p-[2%] max-h-54 items-center flex flex-row flex-wrap justify-between text-b">
                    {skillconstants.map((skill)=>{
                      return (<div className="shadow-lg shadow-[#000] border-solid border-2 border-white bg-[#d6d3d1] px-[5%] py-[2%] rounded-xl">{skill}</div>)  
                    })}
                </div>
            </div>
        </>
    )
}

export default Portfolio;