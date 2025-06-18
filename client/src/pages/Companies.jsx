function Companies() {
  const companies = [
    {
      name: "Apple Inc.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      ceo: "Tim Cook",
      marketCap: "$3.2 Trillion",
      description: "Apple designs, manufactures, and markets smartphones, personal computers, tablets, and accessories worldwide.",
    },
    {
      name: "Microsoft",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      ceo: "Satya Nadella",
      marketCap: "$3.0 Trillion",
      description: "Microsoft develops, licenses, and supports a wide range of software products, services, and devices globally.",
    },
    {
      name: "Alphabet (Google)",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      ceo: "Sundar Pichai",
      marketCap: "$2.3 Trillion",
      description: "Alphabet is the parent company of Google, focusing on internet services, AI, advertising, and cloud computing.",
    },
    {
      name: "Amazon",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      ceo: "Andy Jassy",
      marketCap: "$2.0 Trillion",
      description: "Amazon is a global leader in e-commerce, cloud computing (AWS), and digital streaming services.",
    },
    {
      name: "NVIDIA",
      image: "https://upload.wikimedia.org/wikipedia/en/2/21/Nvidia_logo.svg",
      ceo: "Jensen Huang",
      marketCap: "$3.0 Trillion",
      description: "NVIDIA leads in GPU manufacturing, AI computing, and high-performance graphics for gaming and enterprise.",
    },
    {
      name: "Meta Platforms (Facebook)",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Logo.svg",
      ceo: "Mark Zuckerberg",
      marketCap: "$1.2 Trillion",
      description: "Meta develops social media platforms like Facebook, Instagram, and WhatsApp, with a strong focus on metaverse technologies.",
    },
    {
      name: "Tesla",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      ceo: "Elon Musk",
      marketCap: "$800 Billion",
      description: "Tesla designs, develops, and sells electric vehicles, battery products, and renewable energy solutions globally.",
    },
    {
      name: "TSMC (Taiwan Semiconductor)",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/TSMC.svg",
      ceo: "C.C. Wei",
      marketCap: "$700 Billion",
      description: "TSMC is the world's largest dedicated semiconductor foundry, producing chips for major tech giants.",
    },
    {
      name: "Samsung Electronics",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      ceo: "Jong-Hee Han & Kyehyun Kyung",
      marketCap: "$470 Billion",
      description: "Samsung Electronics is a leader in mobile phones, semiconductors, displays, and home appliances globally.",
    },
    {
      name: "Tencent",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Tencent_Logo.svg",
      ceo: "Ma Huateng (Pony Ma)",
      marketCap: "$350 Billion",
      description: "Tencent is a Chinese multinational involved in social networks, gaming, fintech, and cloud computing.",
    },
    {
      name: "Alibaba Group",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Alibaba_logo.svg",
      ceo: "Eddie Wu",
      marketCap: "$200 Billion",
      description: "Alibaba is a Chinese e-commerce giant offering B2B, B2C, and C2C sales platforms and cloud computing services.",
    },
    {
      name: "Oracle",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      ceo: "Safra Catz",
      marketCap: "$350 Billion",
      description: "Oracle provides database management, cloud applications, and enterprise software solutions globally.",
    },
    {
      name: "Adobe",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Adobe_Corporate_Logo.png",
      ceo: "Shantanu Narayen",
      marketCap: "$240 Billion",
      description: "Adobe is famous for creative software like Photoshop, Illustrator, and Premiere Pro, along with cloud-based services.",
    },
    {
      name: "Intel",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
      ceo: "Pat Gelsinger",
      marketCap: "$120 Billion",
      description: "Intel is a major semiconductor manufacturer, producing processors and other essential computing hardware.",
    },
    {
      name: "IBM",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      ceo: "Arvind Krishna",
      marketCap: "$160 Billion",
      description: "IBM focuses on hybrid cloud, AI, and quantum computing, serving enterprise clients worldwide.",
    },
    {
      name: "Salesforce",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Salesforce.com_logo.svg",
      ceo: "Marc Benioff",
      marketCap: "$270 Billion",
      description: "Salesforce provides CRM software solutions and platforms, widely used across various industries.",
    },
    {
      name: "ASML Holding",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/ASML_Logo.svg",
      ceo: "Peter Wennink",
      marketCap: "$500 Billion",
      description: "ASML is a critical supplier of photolithography machines used in semiconductor manufacturing.",
    },
    {
      name: "Qualcomm",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Qualcomm_logo.svg",
      ceo: "Cristiano Amon",
      marketCap: "$180 Billion",
      description: "Qualcomm designs and markets wireless telecommunications products and semiconductors worldwide.",
    },
    {
      name: "Netflix",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
      ceo: "Greg Peters & Ted Sarandos",
      marketCap: "$250 Billion",
      description: "Netflix is a global leader in video streaming entertainment with a focus on original content.",
    },
    {
      name: "Spotify",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      ceo: "Daniel Ek",
      marketCap: "$60 Billion",
      description: "Spotify is the largest global music streaming platform, providing access to millions of songs and podcasts.",
    },
    {
      name: "Zoom Video",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Zoom_Communications_Logo.svg",
      ceo: "Eric Yuan",
      marketCap: "$20 Billion",
      description: "Zoom Video Communications is a leader in video conferencing software, especially popularized during the pandemic.",
    },
    {
      name: "AMD",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/AMD_Logo.svg",
      ceo: "Lisa Su",
      marketCap: "$270 Billion",
      description: "AMD develops processors and graphics cards, competing with Intel and NVIDIA in computing hardware.",
    },
    {
      name: "Uber Technologies",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      ceo: "Dara Khosrowshahi",
      marketCap: "$140 Billion",
      description: "Uber operates ride-sharing, food delivery (Uber Eats), and freight logistics services globally.",
    },
    {
      name: "PayPal",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
      ceo: "Alex Chriss",
      marketCap: "$60 Billion",
      description: "PayPal provides digital payments systems, supporting secure online transactions worldwide.",
    },
    {
      name: "Palantir Technologies",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Palantir_Technologies_logo.svg",
      ceo: "Alex Karp",
      marketCap: "$60 Billion",
      description: "Palantir builds big data analytics platforms for governments, military, and large corporations.",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Top Tech Companies by Market Cap</h1>
      <div className="flex flex-col gap-6">
        {companies.map((company, index) => (
          <div key={index} className="border rounded-lg shadow p-4 bg-white flex flex-col sm:flex-row gap-4">
            <img src={company.image} alt={company.name} className="w-32 h-32 object-contain rounded bg-gray-100 p-2" />
            <div>
              <h2 className="text-2xl font-semibold">{company.name}</h2>
              <p className="text-gray-700">CEO: {company.ceo}</p>
              <p className="text-gray-700">Market Cap: {company.marketCap}</p>
              <p className="text-gray-600 mt-2">{company.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
