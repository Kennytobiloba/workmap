import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import the Font Awesome icon

function CategoryList({ data }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const resetSelectedCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <section className="p-5 px-4 max-md:px-2 pt-10 max-md:pt-5 max-md:h-full overflow-y-visible h-screen">
      <div className="flex items-center gap-x-2 max-md:gap-x-5 pb-3">
        {selectedCategory ? (
          <>
            <button onClick={resetSelectedCategory} className="text-[14px] text-white underline cursor-pointer mr-2">
              <FaArrowLeft />
            </button>
            <p className="font-bold text-[20px] max-md:text-[24px] text-white">
              {selectedCategory.title}
            </p>
          </>
        ) : (
          <p className="font-bold text-[20px] max-md:text-[24px] text-white">
            Select Category
          </p>
        )}
      </div>
      <div className={`grid ${selectedCategory ? 'grid-cols-1' : 'grid-cols-3'} gap-4 max-md:grid-cols-2 py-4 max-md:py-2 gap-y-3 h-full overflow-visible`}>
        {data.map((category) => (
          <div
            key={category.id}
            className={`category cursor-pointer overflow-visible h-full col-span-1 ${
              selectedCategory === category ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="flex overflow-visible h-full max-md:h-[180px] py-4 items-center">
              <div className={`course-card overflow-visible h-full flex flex-col justify-around pt-4 rounded-[20px] max-md:h-full p-4 bg-gradient-to-br from-[#FF00B8] via-[#585FFF] to-[#920DE3] ${selectedCategory ? 'flex-col' : ''}`} style={{ width: "500px" }}>
                <div className="flex relative flex-col justify-between py-2 overflow-visible w-full">
                  <img src={category.img} alt="" className=" max-[1307px]:hidden absolute mt-[-8px] top-[-60%] right-[-5%] max-[1075px]:top-[-30%]" />
                  <h3 className="font-[500] text-[16px] text-white w-[80%] max-md:w-[90%] max-lg:w-[100%]">{category.title}</h3>
                  <p className="font-[400] overflow-visible text-[12px] w-[80%] max-md:w-[90%] max-lg:w-[100%] text-white">{category.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
