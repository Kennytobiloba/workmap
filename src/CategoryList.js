import React from "react";
import './App.css';

const categories = [
  {
    title: "UI/UX Design",
    link: "UI/UX Design",
    desc: "Unlock a world of knowledge through beautifully curated UI/UX design courses",
  },
  {
    title: "Software Development",
    link: "Software Development",
    desc: "Master the art of coding with transformative software development programs",
  },
  {
    title: "Mobile Development",
    link: "Mobile Development",
    desc: "Craft exceptional mobile experiences with cutting-edge development programs and resources.",
  },
  {
    title: "DevOps and Cloud Computing",
    link: "DevOps and Cloud Computing",
    desc: "Cultivate digital innovation through seamless DevOps and Cloud Computing integration",
  },
  {
    title: "Desktop Development",
    link: "Desktop Development",
    desc: "Empower productivity with immersive experiences through desktop development mastery",
  },
  {
    title: "Project Management",
    link: "Project Management",
    desc: "Drive success through effective planning and execution with expert project management.",
  },
  {
    title: "HR and Talent",
    link: "HR and Talent",
    desc: "Unlock the potential of your workforce with strategic HR and talent management",
  },
  {
    title: "Sales and Marketing",
    link: "Sales and Marketing",
    desc: "Maximize reach and drive growth through dynamic sales and marketing strategies.",
  },
  {
    title: "Machine Learning",
    link: "Machine Learning",
    desc: "Unleash the power of AI/ML for transformative insights and intelligent solutions",
  },
  {
    title: "Web Development",
    link: "Web Development",
    desc: "Elevate digital presence with captivating web development solutions and seamless experiences",
    className: "absolute mt-[-8px] top-[-75%] right-[-5%]",
    header: "font-[600] text-[22px] text-white w-[80%]",
  },
  {
    title: "Creative and Content",
    link: "Creative and Content",
    desc: "Unleash your creativity and captivate audiences with compelling content strategies",
  },
  {
    title: "Creative and Content",
    link: "Creative and Content",
    desc: "Unleash your creativity and captivate audiences with compelling content strategies",
  },
];




function App() {
  return (
    <div className="App">
      
      <div className="flex flex-wrap justify-between p-4">
        {categories.map((category, index) => (
          <div className="w-1/3 p-4" key={index}>
            <div className="bg-gradient-to-br from-[#FF00B8] via-[#585FFF] to-[#920DE3] rounded-lg p-6">
              <h2 className="font-semibold text-xl text-white">{category.title}</h2>
              <p className="text-white">{category.desc}</p>
              <a href={category.link} className="text-white hover:underline">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
