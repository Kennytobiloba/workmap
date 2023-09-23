import React from "react";

function CategoryList({ data }) {
  return (
   <section className="p-5 px-10 pt-10 max-md:px-5 max-md:pt-5 max-md:h-full overflow-y-visible h-screen">
      <p className="font-bold text-[27px] max-md:text-[24px] text-white">
                    Select Category
                </p>
     <div className="grid grid-cols-3 py-5 gap-x-5 gap-y-0 max-[1461px]:grid-cols-2 max-[720px]:grid-cols-1 h-full overflow-visible">
      {data.map((category) => (
        <div key={category.id} className="category">
         <div className="flex overflow-visible h-full max-md:h-fit py-5 items-center">
            <div className="course-card overflow-visible h-full flex flex-col justify-around pt-4 rounded-[20px] max-md:h-fit p-8 bg-gradient-to-br from-[#FF00B8] via-[#585FFF] to-[#920DE3">
           
                <div className="flex relative flex-col justify-between py-2 overflow-visible w-full">
                <h2 className="font-[600] text-[22px] text-white w-[50%] text-justify">{category.title}</h2>
                <img src={category.img} alt="" className="absolute mt-[-8px] top-[-75%] right-[-5%] max-[1075px]:top-[-35%]" />
                </div>
          <p className="font-[500] overflow-visible text-[13px] w-[70%] text-justify text-white">{category.desc}</p>
         

             
            </div>
         </div>
        </div>
      ))}
    </div>
   </section>
  );
}

export default CategoryList;
