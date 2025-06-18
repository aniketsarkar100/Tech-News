import elonImg from "../assets/personalities/elon.jpg";
import bezosImg from "../assets/personalities/bezos.jpg";
import billImg from "../assets/personalities/bill.jpg";
import zuckImg from "../assets/personalities/zuck.jpg";
import larryImg from "../assets/personalities/larry.jpg";
import sergeyImg from "../assets/personalities/sergey.jpg";
import pichaiImg from "../assets/personalities/pichai.jpg";
import nadellaImg from "../assets/personalities/nadella.jpg";
import timImg from "../assets/personalities/tim.jpg";
import jobsImg from "../assets/personalities/jobs.jpg";
import reedImg from "../assets/personalities/reed.jpg";
import jensenImg from "../assets/personalities/jensen.jpg";
import gautamImg from "../assets/personalities/gautam.jpg";
import ambaniImg from "../assets/personalities/ambani.jpg";
import susanImg from "../assets/personalities/susan.jpg";
import paragImg from "../assets/personalities/parag.jpg";
import shantanuImg from "../assets/personalities/shantanu.jpg";
import whitneyImg from "../assets/personalities/whitney.jpg";
import ginnyImg from "../assets/personalities/ginny.jpg";
import anneImg from "../assets/personalities/anne.jpg";

function Personalities() {
  const personalities = [
    {
      name: "Elon Musk",
      image: elonImg,
      netWorth: "$230 Billion",
      companies: ["Tesla", "SpaceX", "Neuralink", "X (Twitter)"],
      description: "Elon Musk is a tech entrepreneur driving advancements in electric vehicles, AI, and space travel.",
    },
    {
      name: "Jeff Bezos",
      image: bezosImg,
      netWorth: "$160 Billion",
      companies: ["Amazon", "Blue Origin"],
      description: "Jeff Bezos is the founder of Amazon and invests in space exploration through Blue Origin.",
    },
    {
      name: "Bill Gates",
      image: billImg,
      netWorth: "$130 Billion",
      companies: ["Microsoft", "Gates Foundation"],
      description: "Bill Gates co-founded Microsoft and is now one of the world's most significant philanthropists.",
    },
    {
      name: "Mark Zuckerberg",
      image: zuckImg,
      netWorth: "$115 Billion",
      companies: ["Meta (Facebook)", "Instagram", "WhatsApp"],
      description: "Mark Zuckerberg is the CEO of Meta, driving the company's focus toward virtual reality and metaverse technologies.",
    },
    {
      name: "Larry Page",
      image: larryImg,
      netWorth: "$115 Billion",
      companies: ["Google", "Alphabet"],
      description: "Larry Page co-founded Google and led its transformation into Alphabet, a leading global tech conglomerate.",
    },
    {
      name: "Sergey Brin",
      image: sergeyImg,
      netWorth: "$110 Billion",
      companies: ["Google", "Alphabet"],
      description: "Sergey Brin co-founded Google, playing a crucial role in developing search engine algorithms and AI projects.",
    },
    {
      name: "Sundar Pichai",
      image: pichaiImg,
      netWorth: "$1.5 Billion",
      companies: ["Google", "Alphabet"],
      description: "Sundar Pichai is the CEO of Google and Alphabet, leading projects in search, Android, Chrome, and AI.",
    },
    {
      name: "Satya Nadella",
      image: nadellaImg,
      netWorth: "$900 Million",
      companies: ["Microsoft"],
      description: "Satya Nadella transformed Microsoft by focusing on cloud computing, Azure, and enterprise technologies.",
    },
    {
      name: "Tim Cook",
      image: timImg,
      netWorth: "$2 Billion",
      companies: ["Apple"],
      description: "Tim Cook is the CEO of Apple, overseeing the success of iPhones, MacBooks, and Apple's services ecosystem.",
    },
    {
      name: "Steve Jobs",
      image: jobsImg,
      netWorth: "N/A (deceased)",
      companies: ["Apple", "Pixar", "NeXT"],
      description: "Steve Jobs co-founded Apple and revolutionized personal technology with products like the iPhone, iPod, and Mac.",
    },
    {
      name: "Reed Hastings",
      image: reedImg,
      netWorth: "$3.7 Billion",
      companies: ["Netflix"],
      description: "Reed Hastings co-founded Netflix, transforming how the world consumes entertainment through streaming.",
    },
    {
      name: "Jensen Huang",
      image: jensenImg,
      netWorth: "$90 Billion",
      companies: ["NVIDIA"],
      description: "Jensen Huang is the co-founder and CEO of NVIDIA, leading breakthroughs in graphics and AI computing.",
    },
    {
      name: "Gautam Adani",
      image: gautamImg,
      netWorth: "$60 Billion",
      companies: ["Adani Group"],
      description: "Gautam Adani is an Indian billionaire leading Adani Group with interests in infrastructure, logistics, and energy.",
    },
    {
      name: "Mukesh Ambani",
      image: ambaniImg,
      netWorth: "$95 Billion",
      companies: ["Reliance Industries", "Jio"],
      description: "Mukesh Ambani leads Reliance Industries, reshaping India's telecom and retail industries through Jio platforms.",
    },
    {
      name: "Susan Wojcicki",
      image: susanImg,
      netWorth: "$765 Million",
      companies: ["YouTube", "Google"],
      description: "Susan Wojcicki served as CEO of YouTube, overseeing massive growth in content creators and global influence.",
    },
    {
      name: "Parag Agrawal",
      image: paragImg,
      netWorth: "$50 Million",
      companies: ["Twitter (Former CEO)"],
      description: "Parag Agrawal is an Indian-American tech executive who briefly served as the CEO of Twitter before its acquisition by Elon Musk.",
    },
    {
      name: "Shantanu Narayen",
      image: shantanuImg,
      netWorth: "$270 Million",
      companies: ["Adobe"],
      description: "Shantanu Narayen is the CEO of Adobe, driving the company's growth in creative software like Photoshop and Premiere Pro.",
    },
    {
      name: "Whitney Wolfe Herd",
      image: whitneyImg,
      netWorth: "$510 Million",
      companies: ["Bumble"],
      description: "Whitney Wolfe Herd is the founder of Bumble, a women-centric dating app that went public in 2021.",
    },
    {
      name: "Ginni Rometty",
      image: ginnyImg,
      netWorth: "$100 Million",
      companies: ["IBM"],
      description: "Ginni Rometty served as IBM's CEO, pushing forward cloud and AI technologies in enterprise computing.",
    },
    {
      name: "Anne Wojcicki",
      image: anneImg,
      netWorth: "$500 Million",
      companies: ["23andMe"],
      description: "Anne Wojcicki is the co-founder of 23andMe, a pioneer in consumer genetics and personalized medicine.",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Top Tech Personalities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {personalities.map((person, index) => (
          <div key={index} className="border rounded-lg shadow p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2">{person.name}</h2>
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-64 object-cover rounded mb-3"
            />
            <p className="font-medium text-gray-700 mb-1">Net Worth: {person.netWorth}</p>
            <p className="mb-2 text-gray-700">Companies: {person.companies.join(", ")}</p>
            <p className="text-gray-600">{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personalities;
