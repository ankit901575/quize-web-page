/* =====================================================================
   script.js : yeh file website ko "chalne wala" banati hai
   (screens badalna, timer, answers check karna, result dikhana)
   ===================================================================== */


/* ---------- 1) SUBJECTS, GROUPS aur CHAPTERS ----------
   Structure: Subject → Group (jaise History) → Chapters ki list.
   Yeh sirf naam hain. Questions neeche QUESTIONS mein hain. */
const SUBJECTS = {
  "Social Science": {
    icon: "🌍",
    groups: {
      "History": [
        "The Rise of Nationalism in Europe",
        "Nationalism in India",
        "The Making of a Global World",
        "The Age of Industrialisation",
        "Print Culture and the Modern World"
      ],
      "Geography": [
        "Resources and Development",
        "Forest and Wildlife Resources",
        "Water Resources",
        "Agriculture",
        "Minerals and Energy Resources",
        "Manufacturing Industries",
        "Lifelines of National Economy"
      ],
      "Political Science": [
        "Power Sharing",
        "Federalism",
        "Gender, Religion and Caste",
        "Political Parties",
        "Outcomes of Democracy"
      ],
      "Economics": [
        "Development",
        "Sectors of the Indian Economy",
        "Money and Credit",
        "Globalisation and the Indian Economy",
        "Consumer Rights"
      ]
    }
  },

  "Science": {
    icon: "🔬",
    groups: {
      "Chemistry": [
        "Chemical Reactions and Equations",
        "Acids, Bases and Salts",
        "Metals and Non-metals",
        "Carbon and Its Compounds",
        "Periodic Classification of Elements"
      ],
      "Biology": [
        "Life Processes",
        "Control and Coordination",
        "How do Organisms Reproduce?",
        "Heredity",
        "Our Environment"
      ],
      "Physics": [
        "Light – Reflection and Refraction",
        "The Human Eye and the Colourful World",
        "Electricity",
        "Magnetic Effects of Electric Current"
      ]
    }
  },

  "Mathematics": {
    icon: "📐",
    groups: {
      "Number Systems": ["Real Numbers"],
      "Algebra": [
        "Polynomials",
        "Pair of Linear Equations",
        "Quadratic Equations",
        "Arithmetic Progressions"
      ],
      "Coordinate Geometry": ["Distance Formula", "Section Formula"],
      "Geometry": ["Triangles", "Circles"],
      "Trigonometry": [
        "Introduction to Trigonometry",
        "Trigonometric Identities",
        "Heights and Distances"
      ],
      "Mensuration": [
        "Areas Related to Circles",
        "Surface Areas and Volumes"
      ],
      "Statistics & Probability": ["Statistics", "Probability"]
    }
  },

  "Artificial Intelligence": {
    icon: "🤖",
    groups: {
      "Part A: Employability Skills": [
        "Communication Skills-II",
        "Self-Management Skills-II",
        "Information and Communication Technology Skills-II",
        "Entrepreneurial Skills-II",
        "Green Skills-II"
      ],
      "Part B: Subject Specific Skills": [
        "Revisiting AI Project Cycle & Ethical Frameworks for AI",
        "AI Project Cycle",
        "Introduction to AI Domains",
        "Ethical Frameworks",
        "Advanced Concepts of Modeling in AI",
        "Evaluating Models",
        "Statistical Data",
        "Computer Vision",
        "Natural Language Processing",
        "Advanced Python"
      ]
    }
  }
};


/* ---------- 2) QUESTIONS (har chapter ke 10 MCQ) ----------
   Key = chapter ka naam (upar wale naam se bilkul same).
   Har question aise likhte hain:
     { q: "Question", o: ["opt1", "opt2", "opt3", "opt4"], a: 0 }
   q = question ka text
   o = 4 options ("opt1" ki jagah apna option likho)
   a = sahi option ka number (0 = pehla, 1 = doosra, 2 = teesra, 3 = chautha)
   Dhyan do: options quiz mein mix hote hain, par "a" hamesha o wali list ke
   hisaab se likho (jo order yahan likha hai). */
const QUESTIONS = {

  /* ========== SOCIAL SCIENCE  >  History ========== */

  "The Rise of Nationalism in Europe": [
    { q: "Who produced the 1848 series of four prints visualising a world of 'democratic and social Republics'?", o: ["Frédéric Sorrieu", "Giuseppe Mazzini", "Eugène Delacroix", "Johann Gottfried Herder"], a: 0 },
    { q: "Which Austrian Chancellor hosted the Congress of Vienna in 1815?", o: ["Duke Metternich", "Otto von Bismarck", "Count Cavour", "Kaiser William I"], a: 0 },
    { q: "Who founded the secret society Young Italy in Marseilles?", o: ["Giuseppe Mazzini", "Giuseppe Garibaldi", "Count Cavour", "Victor Emmanuel II"], a: 0 },
    { q: "Which Prussian chief minister led the unification of Germany?", o: ["Otto von Bismarck", "Giuseppe Garibaldi", "Duke Metternich", "Napoleon Bonaparte"], a: 0 },
    { q: "In which year was the Napoleonic Code introduced?", o: ["1804", "1789", "1815", "1848"], a: 0 },
    { q: "In which year did the Frankfurt Parliament meet in the Church of St Paul?", o: ["1848", "1830", "1815", "1871"], a: 0 },
    { q: "The Zollverein, formed in 1834 at the initiative of Prussia, was a:", o: ["Customs union that abolished tariff barriers", "Military alliance against France", "Council of church leaders", "Treaty to unify Italy"], a: 0 },
    { q: "Which treaty of 1832 recognised Greece as an independent nation?", o: ["Treaty of Constantinople", "Treaty of Vienna", "Treaty of Versailles", "Treaty of Paris"], a: 0 },
    { q: "Who was proclaimed German Emperor at Versailles in January 1871?", o: ["Kaiser William I", "Otto von Bismarck", "Frederick William IV", "Napoleon III"], a: 0 },
    { q: "The term 'liberalism' is derived from the Latin word liberalis, which means:", o: ["Free", "Equal", "Strong", "Common"], a: 0 }
  ],

  "Nationalism in India": [
    { q: "Who led the Champaran Satyagraha in 1917?", o: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"], a: 0 },
    { q: "In which year did the Jallianwala Bagh massacre take place?", o: ["1915", "1919", "1922", "1930"], a: 1 },
    { q: "The Rowlatt Act (1919) allowed detention of political prisoners without trial for up to:", o: ["6 months", "1 year", "2 years", "5 years"], a: 2 },
    { q: "The Non-Cooperation Movement was launched along with which other movement?", o: ["Khilafat Movement", "Quit India Movement", "Swadeshi Movement", "Civil Disobedience Movement"], a: 0 },
    { q: "After which incident did Gandhiji withdraw the Non-Cooperation Movement?", o: ["Dandi March", "Chauri Chaura", "Jallianwala Bagh", "Champaran"], a: 1 },
    { q: "The Salt March (Dandi March) was a protest against:", o: ["Rowlatt Act", "Salt tax", "Simon Commission", "Land revenue"], a: 1 },
    { q: "Who founded the Swaraj Party?", o: ["C.R. Das and Motilal Nehru", "Gandhi and Nehru", "Tilak and Gokhale", "Patel and Bose"], a: 0 },
    { q: "The Gandhi–Irwin Pact was signed in:", o: ["1927", "1929", "1931", "1935"], a: 2 },
    { q: "Which commission was boycotted in 1928 because it had no Indian member?", o: ["Simon Commission", "Cripps Mission", "Cabinet Mission", "Hunter Commission"], a: 0 },
    { q: "The Poona Pact (1932) was between Gandhiji and:", o: ["Jawaharlal Nehru", "Muhammad Ali Jinnah", "Dr. B.R. Ambedkar", "Sardar Patel"], a: 2 }
  ],

  "The Making of a Global World": [
    { q: "The Silk Routes linked Asia with which regions?", o: ["Europe and northern Africa", "Australia and Antarctica", "North and South America", "Japan and Korea only"], a: 0 },
    { q: "Which disease killed a large part of the native population of the Americas after the Europeans arrived?", o: ["Smallpox", "Plague", "Cholera", "Malaria"], a: 0 },
    { q: "In which year were the Corn Laws abolished in Britain?", o: ["1846", "1815", "1832", "1870"], a: 0 },
    { q: "Rinderpest, a fast-spreading cattle disease, arrived in Africa in the late:", o: ["1880s", "1700s", "1920s", "1950s"], a: 0 },
    { q: "In which year was the Bretton Woods Conference held?", o: ["1944", "1929", "1919", "1955"], a: 0 },
    { q: "What was indentured labour?", o: ["A bonded labourer under contract to work for an employer for a fixed time", "A skilled worker paid very high wages", "A worker employed only in factories", "A labourer free to leave work anytime"], a: 0 },
    { q: "In which year did the Great Depression begin?", o: ["1929", "1914", "1939", "1945"], a: 0 },
    { q: "Which two institutions were set up by the Bretton Woods Conference?", o: ["IMF and World Bank", "UN and WTO", "WHO and UNESCO", "NATO and SEATO"], a: 0 },
    { q: "Henry Ford is known for introducing the assembly line method to produce which car?", o: ["Model T", "Beetle", "Mustang", "Jeep"], a: 0 },
    { q: "The Group of 77 (G-77) developing countries demanded a:", o: ["New International Economic Order (NIEO)", "New World Trade Agreement", "Common Asian Market", "Global Military Pact"], a: 0 }
  ],

  "The Age of Industrialisation": [
    { q: "Which was the first symbol of the new industrial age in Britain?", o: ["Cotton", "Iron", "Coal", "Silk"], a: 0 },
    { q: "Who invented the spinning jenny in 1764?", o: ["James Hargreaves", "Richard Arkwright", "John Kay", "Samuel Crompton"], a: 0 },
    { q: "Who improved Newcomen's steam engine and patented the new model in 1781?", o: ["James Watt", "Matthew Boulton", "Thomas Edison", "Richard Arkwright"], a: 0 },
    { q: "Proto-industrialisation refers to:", o: ["Industrial production for an international market before factories came up", "Production only inside large factories", "Production only for home use", "Production using steam engines"], a: 0 },
    { q: "Who were the gomasthas?", o: ["Paid servants of the East India Company who supervised weavers", "Rich merchants of Surat", "Foreign traders in Bombay", "Leaders of weavers' unions"], a: 0 },
    { q: "In which year was the first cotton mill set up in Bombay?", o: ["1854", "1830", "1905", "1947"], a: 0 },
    { q: "Who invented the flying shuttle?", o: ["John Kay", "James Watt", "Edmund Cartwright", "Eli Whitney"], a: 0 },
    { q: "In industrial India, who was a jobber?", o: ["A person employed by industrialists to get new recruits for mills", "A British officer of the Company", "A weaver working at home", "A cloth merchant"], a: 0 },
    { q: "In which year was the first Indian jute mill set up at Rishra in Bengal?", o: ["1855", "1800", "1900", "1920"], a: 0 },
    { q: "Who created the first cotton mill in England?", o: ["Richard Arkwright", "James Hargreaves", "Henry Ford", "John Kay"], a: 0 }
  ],

  "Print Culture and the Modern World": [
    { q: "Who developed the printing press in Germany in the 1430s?", o: ["Johann Gutenberg", "Martin Luther", "Marco Polo", "Thomas Edison"], a: 0 },
    { q: "What was the first book printed by Gutenberg?", o: ["The Bible", "The Quran", "The Diamond Sutra", "Pilgrim's Progress"], a: 0 },
    { q: "What is the oldest Japanese book printed in 868 AD?", o: ["Buddhist Diamond Sutra", "Ukiyo", "Gulamgiri", "Kitab-ul-Hind"], a: 0 },
    { q: "Who brought woodblock printing knowledge from China to Italy?", o: ["Marco Polo", "Gutenberg", "Martin Luther", "Erasmus"], a: 0 },
    { q: "Which religious reformer wrote the Ninety-Five Theses criticising the Roman Catholic Church?", o: ["Martin Luther", "Menocchio", "Erasmus", "Thomas Paine"], a: 0 },
    { q: "Who was Menocchio?", o: ["An Italian miller who reinterpreted the Bible and was executed", "A famous German printer", "A French novelist", "A Japanese painter"], a: 0 },
    { q: "Penny chapbooks in England were sold by:", o: ["Petty pedlars called chapmen", "Priests", "Government officers", "Weavers"], a: 0 },
    { q: "In which year was the Vernacular Press Act passed in India?", o: ["1878", "1857", "1905", "1919"], a: 0 },
    { q: "Who wrote the book Gulamgiri (1871) on the injustices of the caste system?", o: ["Jyotiba Phule", "Raja Ram Mohan Roy", "Bal Gangadhar Tilak", "Dr. B.R. Ambedkar"], a: 0 },
    { q: "Who started the journal Sambad Kaumudi in 1821?", o: ["Raja Ram Mohan Roy", "Jyotiba Phule", "Gandhiji", "Lord Dalhousie"], a: 0 }
  ],


  /* ========== SOCIAL SCIENCE  >  Geography ========== */

  "Resources and Development": [
    { q: "On the basis of origin, resources are classified as:", o: ["Biotic and abiotic", "Renewable and non-renewable", "Individual and community", "Potential and developed"], a: 0 },
    { q: "Which soil is also known as regur soil?", o: ["Black soil", "Red soil", "Alluvial soil", "Laterite soil"], a: 0 },
    { q: "Which soil is most widespread in the northern plains of India?", o: ["Alluvial soil", "Black soil", "Desert soil", "Laterite soil"], a: 0 },
    { q: "Agenda 21 was adopted at which Earth Summit?", o: ["Rio de Janeiro, 1992", "Kyoto, 1997", "Paris, 2015", "Stockholm, 1972"], a: 0 },
    { q: "Sustainable development means:", o: ["Development without damaging the environment and without harming future generations", "Rapid industrial growth at any cost", "Using all resources quickly", "Stopping all development"], a: 0 },
    { q: "Which soil is formed due to intense leaching in areas of heavy rainfall?", o: ["Laterite soil", "Alluvial soil", "Black soil", "Desert soil"], a: 0 },
    { q: "The new alluvial soil of the river valleys is called:", o: ["Khadar", "Bhangar", "Regur", "Kankar"], a: 0 },
    { q: "Resources that are found in a region but not yet used because of lack of technology are called:", o: ["Potential resources", "Stock", "Reserves", "Developed resources"], a: 0 },
    { q: "Which method of ploughing helps in checking soil erosion on slopes?", o: ["Contour ploughing", "Shifting cultivation", "Overgrazing", "Deforestation"], a: 0 },
    { q: "The red colour of red soil is due to:", o: ["Diffusion of iron in crystalline and metamorphic rocks", "Presence of lime", "Presence of humus", "Presence of salt"], a: 0 }
  ],

  "Forest and Wildlife Resources": [
    { q: "In which year was the Indian Wildlife (Protection) Act implemented?", o: ["1972", "1950", "1988", "2000"], a: 0 },
    { q: "In which year was Project Tiger launched?", o: ["1973", "1952", "1985", "2002"], a: 0 },
    { q: "The Chipko Movement was started in which region?", o: ["Himalayas (Uttarakhand)", "Western Ghats", "Aravalli Hills", "Sundarbans"], a: 0 },
    { q: "Which category of forests is considered the most valuable in terms of conservation?", o: ["Reserved forests", "Unclassed forests", "Private forests", "Village forests"], a: 0 },
    { q: "Which of the following is an extinct species in India?", o: ["Asiatic cheetah", "Indian rhino", "Asiatic lion", "Blue whale"], a: 0 },
    { q: "In which state did Joint Forest Management first start in 1988?", o: ["Odisha", "Kerala", "Assam", "Punjab"], a: 0 },
    { q: "What are sacred groves?", o: ["Patches of forest left untouched by local people for religious reasons", "Government timber plantations", "Forests used for mining", "Gardens inside cities"], a: 0 },
    { q: "What does IUCN stand for?", o: ["International Union for Conservation of Nature", "Indian Union for Controlling Nature", "International Unit of Climate Network", "Indian Union for Cultivated Nature"], a: 0 },
    { q: "Which state has the largest area under permanent forests?", o: ["Madhya Pradesh", "Rajasthan", "Punjab", "Gujarat"], a: 0 },
    { q: "Endangered species are those which:", o: ["Are in danger of extinction", "Have already become extinct", "Are found in large numbers", "Are found only in zoos"], a: 0 }
  ],

  "Water Resources": [
    { q: "About what percentage of the Earth's surface is covered with water?", o: ["71 per cent", "29 per cent", "50 per cent", "95 per cent"], a: 0 },
    { q: "The Hirakud Dam is built on which river?", o: ["Mahanadi", "Godavari", "Krishna", "Narmada"], a: 0 },
    { q: "The Bhakra-Nangal Project is built on which river?", o: ["Sutlej", "Ganga", "Yamuna", "Chambal"], a: 0 },
    { q: "The Narmada Bachao Andolan is a movement against which dam?", o: ["Sardar Sarovar Dam", "Tehri Dam", "Hirakud Dam", "Nagarjuna Sagar Dam"], a: 0 },
    { q: "Guls and Kuls are traditional water channels of which region?", o: ["Western Himalayas", "Rajasthan", "Southern Peninsula", "Northern plains"], a: 0 },
    { q: "In Rajasthan, what is a tanka?", o: ["An underground tank for storing drinking water", "A type of canal", "A kind of dam", "A well for irrigation"], a: 0 },
    { q: "Who called dams the 'temples of modern India'?", o: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Dr. Rajendra Prasad"], a: 0 },
    { q: "Khadins and Johads are traditional rainwater harvesting methods of which state?", o: ["Rajasthan", "Kerala", "Assam", "Odisha"], a: 0 },
    { q: "Roughly what percentage of the world's water is freshwater?", o: ["About 2.5 per cent", "About 25 per cent", "About 50 per cent", "About 71 per cent"], a: 0 },
    { q: "The 200-year-old bamboo drip irrigation system is found in:", o: ["Meghalaya", "Rajasthan", "Punjab", "Tamil Nadu"], a: 0 }
  ],

  "Agriculture": [
    { q: "Wheat is which type of crop?", o: ["Rabi crop", "Kharif crop", "Zaid crop", "Plantation crop"], a: 0 },
    { q: "India ranks second in the world in the production of:", o: ["Rice", "Coffee", "Rubber", "Cocoa"], a: 0 },
    { q: "Which of these is a kharif crop?", o: ["Rice", "Wheat", "Gram", "Mustard"], a: 0 },
    { q: "Which crop is known as the 'golden fibre'?", o: ["Jute", "Cotton", "Hemp", "Silk"], a: 0 },
    { q: "Which crop is also called 'white gold' and grows well in black soil?", o: ["Cotton", "Jute", "Tea", "Sugarcane"], a: 0 },
    { q: "Slash and burn agriculture is also known as:", o: ["Primitive subsistence farming", "Commercial farming", "Plantation farming", "Intensive farming"], a: 0 },
    { q: "Tea plants grow best in which type of soil?", o: ["Deep, fertile, well-drained soil rich in humus", "Sandy desert soil", "Clayey waterlogged soil", "Rocky barren soil"], a: 0 },
    { q: "Tea is mainly grown in which Indian states?", o: ["Assam and West Bengal", "Punjab and Haryana", "Rajasthan and Gujarat", "Bihar and Jharkhand"], a: 0 },
    { q: "Who started the Bhoodan-Gramdan Movement?", o: ["Vinoba Bhave", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"], a: 0 },
    { q: "Zaid crops are grown in:", o: ["The short season between rabi and kharif", "The rainy season only", "The winter season only", "All seasons"], a: 0 }
  ],

  "Minerals and Energy Resources": [
    { q: "Which mineral is widely used in electrical and electronic industries?", o: ["Mica", "Coal", "Bauxite", "Limestone"], a: 0 },
    { q: "Which is the most abundant fossil fuel in India?", o: ["Coal", "Petroleum", "Natural gas", "Uranium"], a: 0 },
    { q: "Which iron ore has the highest iron content (up to about 70 per cent)?", o: ["Magnetite", "Hematite", "Limonite", "Siderite"], a: 0 },
    { q: "Which ore is used to produce aluminium?", o: ["Bauxite", "Mica", "Manganese", "Copper"], a: 0 },
    { q: "Rat-hole mining is practised in which state?", o: ["Meghalaya", "Kerala", "Punjab", "Gujarat"], a: 0 },
    { q: "Which type of coal is the most popular in commercial use?", o: ["Bituminous coal", "Peat", "Lignite", "Anthracite"], a: 0 },
    { q: "Tarapur nuclear power station is located in which state?", o: ["Maharashtra", "Gujarat", "Kerala", "Odisha"], a: 0 },
    { q: "Where is the largest solar plant of India (Madhapur) located?", o: ["Near Bhuj, Gujarat", "Near Jaipur, Rajasthan", "Near Chennai, Tamil Nadu", "Near Pune, Maharashtra"], a: 0 },
    { q: "Monazite sands of Kerala are rich in which mineral used for nuclear energy?", o: ["Thorium", "Coal", "Mica", "Bauxite"], a: 0 },
    { q: "Which fossil fuel is considered a clean energy resource?", o: ["Natural gas", "Coal", "Lignite", "Diesel"], a: 0 }
  ],

  "Manufacturing Industries": [
    { q: "Which industry is called the backbone of modern industrial development?", o: ["Iron and steel industry", "Cotton textile industry", "Sugar industry", "Cement industry"], a: 0 },
    { q: "Where is the Tata Iron and Steel Company (TISCO) plant located?", o: ["Jamshedpur", "Bhilai", "Bokaro", "Rourkela"], a: 0 },
    { q: "Which is an agro-based industry?", o: ["Cotton textile industry", "Iron and steel industry", "Cement industry", "Aluminium industry"], a: 0 },
    { q: "What does SAIL stand for?", o: ["Steel Authority of India Limited", "State Authority of Iron Limited", "Steel Association of India Limited", "Standard Alloy Industry Limited"], a: 0 },
    { q: "Where was the first cement plant of India set up in 1904?", o: ["Chennai", "Mumbai", "Kolkata", "Delhi"], a: 0 },
    { q: "Which city is known as the 'Electronic Capital of India'?", o: ["Bengaluru", "Mumbai", "Chennai", "Kolkata"], a: 0 },
    { q: "The Bhilai Steel Plant is located in which state?", o: ["Chhattisgarh", "Odisha", "Jharkhand", "Karnataka"], a: 0 },
    { q: "Limestone is the main raw material for which industry?", o: ["Cement industry", "Jute industry", "Sugar industry", "Paper industry"], a: 0 },
    { q: "Water pollution by industries is mainly caused by:", o: ["Discharge of untreated effluents into rivers", "Use of solar energy", "Planting trees", "Rainwater harvesting"], a: 0 },
    { q: "Thermal pollution of water is caused by:", o: ["Hot water from factories and power plants entering water bodies", "Plastic waste", "Noise", "Dust"], a: 0 }
  ],

  "Lifelines of National Economy": [
    { q: "The Golden Quadrilateral Super Highways connect which four metros?", o: ["Delhi, Mumbai, Chennai and Kolkata", "Delhi, Jaipur, Pune and Surat", "Mumbai, Goa, Kochi and Madurai", "Kolkata, Patna, Ranchi and Lucknow"], a: 0 },
    { q: "National Highway 44 connects which two places?", o: ["Srinagar and Kanyakumari", "Delhi and Mumbai", "Kolkata and Chennai", "Amritsar and Guwahati"], a: 0 },
    { q: "Which organisation builds roads in the border areas of India?", o: ["Border Roads Organisation (BRO)", "NHAI", "PWD", "Indian Army Corps only"], a: 0 },
    { q: "Which is the largest container port of India?", o: ["Jawaharlal Nehru Port (Nhava Sheva)", "Kandla", "Chennai", "Kolkata"], a: 0 },
    { q: "The East-West Corridor connects:", o: ["Silchar and Porbandar", "Delhi and Kolkata", "Mumbai and Chennai", "Srinagar and Kanyakumari"], a: 0 },
    { q: "Which is the cheapest means of transport for heavy and bulky goods?", o: ["Waterways", "Airways", "Roadways", "Pipelines"], a: 0 },
    { q: "Which means of transport is used for carrying liquids such as crude oil and natural gas?", o: ["Pipelines", "Railways", "Airways", "Roadways"], a: 0 },
    { q: "The Indian Railways network is divided into how many zones?", o: ["17", "10", "25", "30"], a: 0 },
    { q: "Which satellite system is used for communication in India?", o: ["INSAT", "SLV", "GSAT-War", "Landsat"], a: 0 },
    { q: "The difference between the value of exports and imports of a country is called:", o: ["Balance of trade", "Balance of power", "Gross income", "Net savings"], a: 0 }
  ],


  /* ========== SOCIAL SCIENCE  >  Political Science ========== */

  "Power Sharing": [
    { q: "In Belgium, which community is the majority?", o: ["Dutch-speaking community", "French-speaking community", "German-speaking community", "English-speaking community"], a: 0 },
    { q: "Which community forms the majority in Sri Lanka?", o: ["Sinhala-speaking community", "Tamil-speaking community", "Indian Tamils", "Sri Lankan Moors"], a: 0 },
    { q: "The 1956 Act of Sri Lanka recognised which language as the only official language?", o: ["Sinhala", "Tamil", "English", "Hindi"], a: 0 },
    { q: "In Belgium, the community government is elected by people belonging to:", o: ["One language community", "Only the capital city", "Only the central government", "Only one religion"], a: 0 },
    { q: "Majoritarianism is the belief that:", o: ["The majority community should rule a country in whatever way it wants", "All communities must share power equally", "Only the minority should rule", "Power must be divided among states"], a: 0 },
    { q: "Which is a prudential reason for power sharing?", o: ["It helps reduce the possibility of conflict between social groups", "It makes the government very powerful", "It helps one group dominate others", "It removes the need for elections"], a: 0 },
    { q: "Horizontal distribution of power means power is shared among:", o: ["Different organs of government like legislature, executive and judiciary", "Governments at different levels", "Different social groups only", "Political parties only"], a: 0 },
    { q: "Sharing power between governments at different levels (central, state, local) is called:", o: ["Vertical division of power", "Horizontal division of power", "Community government", "Coalition government"], a: 0 },
    { q: "The system in which each organ of government checks the others is called:", o: ["Checks and balances", "Majoritarianism", "Federation of states", "Coalition rule"], a: 0 },
    { q: "Which of the following is a form of power sharing among social groups?", o: ["Community government in Belgium", "Sinhala Only Act of Sri Lanka", "Dictatorship", "Military rule"], a: 0 }
  ],

  "Federalism": [
    { q: "Federalism is a system of government in which power is divided between:", o: ["A central authority and its constituent units", "Only the people", "Only the courts", "Two political parties"], a: 0 },
    { q: "Which subject is in the Union List?", o: ["Defence", "Police", "Agriculture", "Education"], a: 0 },
    { q: "Which subject is in the State List?", o: ["Police", "Defence", "Currency", "Foreign affairs"], a: 0 },
    { q: "Which subject is in the Concurrent List?", o: ["Education", "Banking", "Defence", "Currency"], a: 0 },
    { q: "Who has the power to legislate on residuary subjects (those not in any list)?", o: ["Union government", "State governments", "Local governments", "Supreme Court"], a: 0 },
    { q: "Which of these is an example of a 'coming together' federation?", o: ["USA", "India", "Spain", "Belgium"], a: 0 },
    { q: "Which of these is an example of a 'holding together' federation?", o: ["India", "USA", "Switzerland", "Australia"], a: 0 },
    { q: "Which constitutional amendments of 1992 made local government the third tier of democracy?", o: ["73rd and 74th Amendments", "42nd and 44th Amendments", "1st and 2nd Amendments", "86th and 91st Amendments"], a: 0 },
    { q: "In which year were Indian states reorganised on the basis of language?", o: ["1956", "1947", "1971", "1991"], a: 0 },
    { q: "All the voters in the area of a Gram Panchayat together form the:", o: ["Gram Sabha", "Zila Parishad", "Municipal Corporation", "Panchayat Samiti"], a: 0 }
  ],

  "Gender, Religion and Caste": [
    { q: "The sexual division of labour means:", o: ["Work inside the home is done by women and outside by men", "Equal work for men and women", "Only men can work", "Only women can vote"], a: 0 },
    { q: "Political expression of gender issues and raising demands for equal rights for women is called:", o: ["Feminist movement", "Communal movement", "Casteism", "Majoritarianism"], a: 0 },
    { q: "What share of seats is reserved for women in panchayats and municipalities?", o: ["One-third", "One-half", "One-tenth", "One-fourth"], a: 0 },
    { q: "Communalism is based on the belief that:", o: ["Religion is the principal basis of social community", "All religions are different but equal", "Caste decides everything", "Language is the basis of community"], a: 0 },
    { q: "A secular state is one that:", o: ["Does not establish any one religion as the official religion", "Follows only one religion", "Bans all religions", "Supports only the majority religion"], a: 0 },
    { q: "Which Article of the Indian Constitution prohibits discrimination on grounds of religion, race, caste, sex or place of birth?", o: ["Article 15", "Article 21", "Article 32", "Article 370"], a: 0 },
    { q: "According to the Census 2011 figures in the textbook, the literacy rate among women in India is about:", o: ["54 per cent", "76 per cent", "95 per cent", "30 per cent"], a: 0 },
    { q: "Which statement about caste and elections is correct?", o: ["Caste is important but not the only factor deciding election results", "Caste alone decides every election", "Caste has no role at all", "Elections are decided only by religion"], a: 0 },
    { q: "Which country's history shows conflict between Protestants and Catholics based on religion?", o: ["Northern Ireland", "Belgium", "India", "Sri Lanka"], a: 0 },
    { q: "The Equal Remuneration Act provides for:", o: ["Equal wages for equal work for men and women", "Free education for girls", "Reservation in Lok Sabha", "Maternity leave only"], a: 0 }
  ],

  "Political Parties": [
    { q: "A political party is a group of people who come together to:", o: ["Contest elections and hold power in the government", "Run schools", "Collect taxes", "Make court judgments"], a: 0 },
    { q: "Which body recognises parties as national or state parties in India?", o: ["Election Commission", "Supreme Court", "Parliament", "President"], a: 0 },
    { q: "Who founded the Bahujan Samaj Party in 1984?", o: ["Kanshi Ram", "B.R. Ambedkar", "Jayaprakash Narayan", "Atal Bihari Vajpayee"], a: 0 },
    { q: "Which is the oldest political party of India, founded in 1885?", o: ["Indian National Congress", "Bharatiya Janata Party", "Communist Party of India", "Bahujan Samaj Party"], a: 0 },
    { q: "In which year was the Bharatiya Janata Party founded?", o: ["1980", "1885", "1964", "1999"], a: 0 },
    { q: "Parties that do not form the government but question and criticise it are called:", o: ["Opposition parties", "Ruling parties", "Regional parties only", "Pressure groups"], a: 0 },
    { q: "Which is a challenge faced by political parties?", o: ["Lack of internal democracy", "Too many elections", "Free and fair polls", "Strong public participation"], a: 0 },
    { q: "When several parties join together to form a government, it is called:", o: ["Coalition government", "One-party rule", "Military rule", "Presidential rule"], a: 0 },
    { q: "Which country has a one-party system?", o: ["China", "USA", "India", "UK"], a: 0 },
    { q: "Which country has a two-party system?", o: ["USA", "India", "China", "Belgium"], a: 0 }
  ],

  "Outcomes of Democracy": [
    { q: "A democratic government is called legitimate because:", o: ["It is the people's own government", "It is powerful", "It is very old", "It never changes"], a: 0 },
    { q: "According to Amartya Sen, no famine has ever taken place in a country with:", o: ["A democratic form of government", "A one-party rule", "A military government", "A monarchy"], a: 0 },
    { q: "A democratic government is expected to be:", o: ["Accountable and responsive to the people", "Secret and unquestioned", "Controlled by one person", "Free from elections"], a: 0 },
    { q: "In which area does democracy often fail?", o: ["Reducing economic inequality", "Holding elections", "Allowing free speech", "Protecting voting rights"], a: 0 },
    { q: "The Right to Information Act was passed in:", o: ["2005", "1950", "1991", "2019"], a: 0 },
    { q: "Democracy accommodates social diversity by:", o: ["Resolving conflicts peacefully through negotiation", "Ignoring minority groups", "Banning other languages", "Allowing only one community to rule"], a: 0 },
    { q: "Which is a strong argument in favour of democracy?", o: ["It allows us to correct its own mistakes", "It never makes mistakes", "It guarantees equal incomes", "It always gives quick decisions"], a: 0 },
    { q: "Which of the following is NOT guaranteed by democracy?", o: ["Equal incomes for all", "Political equality", "Freedom of expression", "Right to vote"], a: 0 },
    { q: "Democracy is considered better than other forms of government because it:", o: ["Promotes equality among citizens", "Gives power to one ruler", "Avoids public opinion", "Limits all freedoms"], a: 0 },
    { q: "Which feature shows that democracy enhances the dignity of citizens?", o: ["Equal treatment and respect for every person", "Rule by the wealthy", "Rule by the army", "Rule by a single party"], a: 0 }
  ],


  /* ========== SOCIAL SCIENCE  >  Economics ========== */

  "Development": [
    { q: "Per capita income is:", o: ["Total income of a country divided by its total population", "Income of the richest person", "Income of the government only", "Income of a family"], a: 0 },
    { q: "The Human Development Report is published by:", o: ["UNDP", "WHO", "IMF", "UNESCO"], a: 0 },
    { q: "Which Indian state has the highest literacy rate and lowest infant mortality rate?", o: ["Kerala", "Bihar", "Rajasthan", "Uttar Pradesh"], a: 0 },
    { q: "Which organisation classifies countries as rich or low-income on the basis of income?", o: ["World Bank", "WTO", "RBI", "UNICEF"], a: 0 },
    { q: "Infant mortality rate is the number of children who die:", o: ["Before the age of one year per 1000 live births", "Before the age of five per 100 births", "At the age of ten per 1000 births", "After the age of one per 100 births"], a: 0 },
    { q: "Why is average income not a complete measure of development?", o: ["It does not show how income is distributed among people", "It is always incorrect", "It counts only the poor", "It ignores money"], a: 0 },
    { q: "Which of the following is a non-renewable resource?", o: ["Crude oil", "Solar energy", "Wind energy", "Water of rivers"], a: 0 },
    { q: "Which of the following is an example of a public facility?", o: ["Government school and hospital", "Private mall", "Private car", "Branded shop"], a: 0 },
    { q: "The Body Mass Index (BMI) is used to measure:", o: ["Nutritional status of adults", "Literacy of adults", "Income of adults", "Height only"], a: 0 },
    { q: "Sustainable development means development that:", o: ["Meets present needs without harming the needs of future generations", "Uses up all resources now", "Ignores the environment", "Helps only the rich"], a: 0 }
  ],

  "Sectors of the Indian Economy": [
    { q: "Which of the following is a primary sector activity?", o: ["Agriculture", "Manufacturing", "Banking", "Teaching"], a: 0 },
    { q: "Which of the following is a secondary sector activity?", o: ["Manufacturing of cloth", "Fishing", "Banking", "Transport"], a: 0 },
    { q: "Which of the following belongs to the tertiary sector?", o: ["Banking", "Mining", "Farming", "Cement making"], a: 0 },
    { q: "GDP is the total value of:", o: ["Final goods and services produced in a country in a particular year", "Only agricultural goods", "Only exports", "Only imports"], a: 0 },
    { q: "Which sector contributes the most to India's GDP?", o: ["Tertiary sector", "Primary sector", "Secondary sector", "None of these"], a: 0 },
    { q: "Which sector employs the largest number of people in India?", o: ["Primary sector (agriculture)", "Secondary sector", "Tertiary sector", "Public sector"], a: 0 },
    { q: "Disguised unemployment means:", o: ["More people are working than are actually needed", "Nobody is working", "People work only at night", "Workers are overpaid"], a: 0 },
    { q: "The Mahatma Gandhi National Rural Employment Guarantee Act (2005) guarantees:", o: ["100 days of employment in a year to rural households", "Free housing", "Free education", "Free food"], a: 0 },
    { q: "The organised sector is one in which:", o: ["Employment terms are fixed and regular and rules are followed", "Jobs are irregular", "No rules are followed", "Workers have no security"], a: 0 },
    { q: "Indian Railways is an example of which sector?", o: ["Public sector", "Private sector", "Informal sector", "Foreign sector"], a: 0 }
  ],

  "Money and Credit": [
    { q: "What is a 'double coincidence of wants'?", o: ["Both parties want what the other has to offer", "Both parties have money", "Both parties are lenders", "Both parties are banks"], a: 0 },
    { q: "Who issues currency notes in India?", o: ["Reserve Bank of India", "Government of India", "State Bank of India", "Finance Minister"], a: 0 },
    { q: "Legal tender means:", o: ["Currency that must be accepted for payments in a country", "Currency used only in banks", "Foreign currency", "Cheques only"], a: 0 },
    { q: "Deposits in bank accounts that can be withdrawn on demand are called:", o: ["Demand deposits", "Fixed deposits", "Loans", "Collateral"], a: 0 },
    { q: "Collateral is:", o: ["An asset the borrower offers as a guarantee for a loan", "A type of interest", "A bank account", "A cheque"], a: 0 },
    { q: "Which of these is a source of formal credit?", o: ["Banks and cooperatives", "Moneylenders", "Landlords", "Relatives and friends"], a: 0 },
    { q: "Which of these is a source of informal credit?", o: ["Moneylenders", "Banks", "Cooperative societies", "Reserve Bank"], a: 0 },
    { q: "Who started the Grameen Bank in Bangladesh?", o: ["Muhammad Yunus", "Amartya Sen", "Mahatma Gandhi", "Manmohan Singh"], a: 0 },
    { q: "The terms of credit include:", o: ["Interest rate, collateral, documentation and repayment", "Only the loan amount", "Only the bank name", "Only the date"], a: 0 },
    { q: "A cheque is:", o: ["A paper instructing the bank to pay a specific amount from one's account", "A type of coin", "A loan document", "A bank guarantee"], a: 0 }
  ],

  "Globalisation and the Indian Economy": [
    { q: "A multinational company (MNC) is one that:", o: ["Owns or controls production in more than one nation", "Operates only in one village", "Is owned by the government only", "Works only in agriculture"], a: 0 },
    { q: "Removal of barriers or restrictions set by the government on trade is called:", o: ["Liberalisation", "Nationalisation", "Privatisation only", "Taxation"], a: 0 },
    { q: "The WTO is an organisation whose aim is to:", o: ["Liberalise international trade", "Fix prices of petrol", "Print currency", "Build roads"], a: 0 },
    { q: "In which year did India begin its economic reforms (New Economic Policy)?", o: ["1991", "1947", "1965", "2005"], a: 0 },
    { q: "Special Economic Zones (SEZs) are set up to:", o: ["Attract foreign investment with world-class facilities", "Increase taxes", "Stop exports", "Close factories"], a: 0 },
    { q: "Investment made by MNCs is called:", o: ["Foreign investment", "Domestic saving", "Public loan", "Tax revenue"], a: 0 },
    { q: "A trade barrier is:", o: ["A restriction such as a tax on imports", "A free-trade zone", "A bank", "A type of cheque"], a: 0 },
    { q: "Ford Motors, an American company, set up its plant near which Indian city?", o: ["Chennai", "Mumbai", "Delhi", "Kolkata"], a: 0 },
    { q: "Which technology has played the major role in stimulating globalisation?", o: ["Information and communication technology", "Steam engine", "Printing press", "Telegraph only"], a: 0 },
    { q: "Competition among producers generally results in:", o: ["Better quality and lower prices for consumers", "Higher prices", "Poor quality", "Fewer goods"], a: 0 }
  ],

  "Consumer Rights": [
    { q: "The Consumer Protection Act (COPRA) was enacted in which year?", o: ["1986", "1950", "1991", "2005"], a: 0 },
    { q: "National Consumer Day is celebrated in India on:", o: ["24 December", "15 March", "26 January", "2 October"], a: 0 },
    { q: "The ISI mark is certified for:", o: ["Industrial and consumer goods", "Agricultural products", "Gold jewellery", "Medicines only"], a: 0 },
    { q: "The Agmark certifies the quality of:", o: ["Agricultural products", "Electronic goods", "Jewellery", "Clothes"], a: 0 },
    { q: "Hallmark certifies the purity of:", o: ["Gold jewellery", "Wheat", "Cement", "Toys"], a: 0 },
    { q: "Which is the three-tier quasi-judicial machinery under COPRA?", o: ["District, State and National commissions", "Panchayat, Block and Zila", "Municipal, High Court and Supreme Court", "Taluka, Tehsil and Ward"], a: 0 },
    { q: "The Right to Information Act was enacted in:", o: ["2005", "1986", "1950", "2019"], a: 0 },
    { q: "The consumer movement arose in India because of:", o: ["Dissatisfaction with unfair trade practices", "Lack of jobs", "Increased exports", "Low taxes"], a: 0 },
    { q: "The right to be informed means a consumer has the right to know about:", o: ["The quality, quantity, price and purity of goods", "Only the seller's name", "Only the date of purchase", "Only the shop address"], a: 0 },
    { q: "The right to choose means a consumer has the right to:", o: ["Choose among goods and services at competitive prices", "Buy only one brand", "Pay any price", "Avoid buying"], a: 0 }
  ],


  /* ========== SCIENCE  >  Chemistry ========== */

  "Chemical Reactions and Equations": [
    { q: "The reaction CaO + H2O → Ca(OH)2 is which type of reaction?", o: ["Combination reaction", "Decomposition reaction", "Displacement reaction", "Double displacement reaction"], a: 0 },
    { q: "What is formed when a magnesium ribbon burns in air?", o: ["Magnesium oxide", "Magnesium hydroxide", "Magnesium chloride", "Magnesium carbonate"], a: 0 },
    { q: "Rancidity of fats and oils can be prevented by:", o: ["Adding antioxidants", "Heating in open air", "Adding water", "Exposing to sunlight"], a: 0 },
    { q: "Zn + CuSO4 → ZnSO4 + Cu is an example of:", o: ["Displacement reaction", "Combination reaction", "Decomposition reaction", "Double displacement reaction"], a: 0 },
    { q: "In the electrolysis of water, the ratio of volumes of hydrogen to oxygen formed is:", o: ["2 : 1", "1 : 2", "1 : 1", "3 : 1"], a: 0 },
    { q: "Brown fumes produced on heating lead nitrate are of:", o: ["Nitrogen dioxide", "Oxygen", "Lead oxide", "Carbon dioxide"], a: 0 },
    { q: "Rust is chemically:", o: ["Hydrated iron(III) oxide", "Iron sulphate", "Iron chloride", "Iron carbonate"], a: 0 },
    { q: "Which of these is an exothermic reaction?", o: ["Burning of natural gas", "Photosynthesis", "Decomposition of calcium carbonate", "Electrolysis of water"], a: 0 },
    { q: "When barium chloride solution is mixed with sodium sulphate solution, the white precipitate formed is:", o: ["Barium sulphate", "Sodium chloride", "Barium oxide", "Sodium carbonate"], a: 0 },
    { q: "Why must a chemical equation be balanced?", o: ["To satisfy the law of conservation of mass", "To make it look neat", "To increase the rate of reaction", "To change the products"], a: 0 }
  ],

  "Acids, Bases and Salts": [
    { q: "What is the pH of a neutral solution at room temperature?", o: ["7", "0", "14", "1"], a: 0 },
    { q: "Which acid is present in our stomach?", o: ["Hydrochloric acid", "Sulphuric acid", "Nitric acid", "Acetic acid"], a: 0 },
    { q: "What is the chemical formula of baking soda?", o: ["NaHCO3", "Na2CO3", "NaOH", "NaCl"], a: 0 },
    { q: "Plaster of Paris is chemically:", o: ["Calcium sulphate hemihydrate", "Calcium carbonate", "Calcium oxide", "Calcium chloride"], a: 0 },
    { q: "Bleaching powder is produced by the action of chlorine on:", o: ["Dry slaked lime", "Quicklime", "Washing soda", "Baking soda"], a: 0 },
    { q: "What is the formula of washing soda?", o: ["Na2CO3·10H2O", "NaHCO3", "NaOH", "CaCO3"], a: 0 },
    { q: "Which of these is used as an antacid?", o: ["Magnesium hydroxide", "Hydrochloric acid", "Acetic acid", "Sodium chloride"], a: 0 },
    { q: "Which products are obtained in the chlor-alkali process?", o: ["Sodium hydroxide, chlorine and hydrogen", "Sodium carbonate and oxygen", "Calcium oxide and carbon dioxide", "Sodium chloride and water"], a: 0 },
    { q: "Tooth decay begins when the pH of the mouth falls below:", o: ["5.5", "7", "9", "3"], a: 0 },
    { q: "A solution turns red litmus blue. Its pH is likely to be:", o: ["10", "2", "7", "4"], a: 0 }
  ],

  "Metals and Non-metals": [
    { q: "Which metal is the most malleable and ductile?", o: ["Gold", "Iron", "Copper", "Aluminium"], a: 0 },
    { q: "Which metal is liquid at room temperature?", o: ["Mercury", "Sodium", "Zinc", "Lead"], a: 0 },
    { q: "Which non-metal is a good conductor of electricity?", o: ["Graphite", "Sulphur", "Phosphorus", "Iodine"], a: 0 },
    { q: "Aqua regia is a mixture of conc. HCl and conc. HNO3 in the ratio:", o: ["3 : 1", "1 : 3", "1 : 1", "2 : 1"], a: 0 },
    { q: "Brass is an alloy of:", o: ["Copper and zinc", "Copper and tin", "Iron and carbon", "Lead and tin"], a: 0 },
    { q: "The thermit reaction is used for:", o: ["Welding railway tracks", "Making soap", "Purifying water", "Making glass"], a: 0 },
    { q: "Which of these metals is the most reactive?", o: ["Sodium", "Zinc", "Iron", "Copper"], a: 0 },
    { q: "Anodising is the process of forming a thick oxide layer on:", o: ["Aluminium", "Gold", "Silver", "Copper"], a: 0 },
    { q: "Coating iron with a layer of zinc to prevent rusting is called:", o: ["Galvanisation", "Anodising", "Alloying", "Electrolysis"], a: 0 },
    { q: "Ionic compounds generally have:", o: ["High melting and boiling points", "Low melting points", "No charge", "Poor solubility in water"], a: 0 }
  ],

  "Carbon and Its Compounds": [
    { q: "Which allotrope of carbon is the hardest?", o: ["Diamond", "Graphite", "Fullerene", "Coal"], a: 0 },
    { q: "The functional group present in alcohols is:", o: ["–OH", "–COOH", "–CHO", "–Cl"], a: 0 },
    { q: "What is the general formula of alkanes?", o: ["CnH2n+2", "CnH2n", "CnH2n–2", "CnHn"], a: 0 },
    { q: "What is the molecular formula of ethanol?", o: ["C2H5OH", "CH3OH", "CH3COOH", "C2H6"], a: 0 },
    { q: "Vinegar is a solution of which acid?", o: ["Ethanoic acid", "Methanoic acid", "Hydrochloric acid", "Citric acid"], a: 0 },
    { q: "The cleaning action of soap involves the formation of:", o: ["Micelles", "Crystals", "Precipitates", "Gases"], a: 0 },
    { q: "The reaction of an ester with sodium hydroxide to form soap is called:", o: ["Saponification", "Esterification", "Hydrogenation", "Combustion"], a: 0 },
    { q: "Carbon forms how many covalent bonds (its valency)?", o: ["4", "2", "3", "1"], a: 0 },
    { q: "Addition of hydrogen to unsaturated hydrocarbons in the presence of nickel is called:", o: ["Hydrogenation", "Oxidation", "Substitution", "Saponification"], a: 0 },
    { q: "Which of these is a saturated hydrocarbon?", o: ["Ethane", "Ethene", "Ethyne", "Propene"], a: 0 }
  ],

  "Periodic Classification of Elements": [
    { q: "Mendeleev's periodic law is based on:", o: ["Atomic mass", "Atomic number", "Number of neutrons", "Valency only"], a: 0 },
    { q: "The Modern Periodic Table is based on:", o: ["Atomic number", "Atomic mass", "Density", "Melting point"], a: 0 },
    { q: "How many groups are there in the Modern Periodic Table?", o: ["18", "7", "8", "10"], a: 0 },
    { q: "How many periods are there in the Modern Periodic Table?", o: ["7", "18", "8", "3"], a: 0 },
    { q: "Noble gases belong to which group?", o: ["Group 18", "Group 1", "Group 17", "Group 2"], a: 0 },
    { q: "Alkali metals belong to which group?", o: ["Group 1", "Group 2", "Group 17", "Group 18"], a: 0 },
    { q: "Halogens belong to which group?", o: ["Group 17", "Group 16", "Group 1", "Group 18"], a: 0 },
    { q: "Across a period from left to right, atomic size generally:", o: ["Decreases", "Increases", "Remains the same", "First increases then decreases"], a: 0 },
    { q: "Down a group, the metallic character generally:", o: ["Increases", "Decreases", "Remains the same", "Becomes zero"], a: 0 },
    { q: "Which scientist grouped elements into triads?", o: ["Dobereiner", "Newlands", "Mendeleev", "Moseley"], a: 0 }
  ],


  /* ========== SCIENCE  >  Biology ========== */

  "Life Processes": [
    { q: "Photosynthesis takes place in which cell organelle?", o: ["Chloroplast", "Mitochondria", "Nucleus", "Ribosome"], a: 0 },
    { q: "Which cells control the opening and closing of stomata?", o: ["Guard cells", "Root hair cells", "Xylem cells", "Epidermal cells"], a: 0 },
    { q: "Which enzyme is present in saliva?", o: ["Salivary amylase", "Pepsin", "Trypsin", "Lipase"], a: 0 },
    { q: "Where is most of the digested food absorbed?", o: ["Small intestine", "Stomach", "Large intestine", "Oesophagus"], a: 0 },
    { q: "Which respiratory pigment carries oxygen in human blood?", o: ["Haemoglobin", "Chlorophyll", "Melanin", "Insulin"], a: 0 },
    { q: "How many chambers does the human heart have?", o: ["Four", "Two", "Three", "Five"], a: 0 },
    { q: "What is the functional unit of the kidney?", o: ["Nephron", "Neuron", "Alveolus", "Villus"], a: 0 },
    { q: "Anaerobic respiration in yeast produces:", o: ["Ethanol and carbon dioxide", "Lactic acid", "Water and oxygen", "Glucose"], a: 0 },
    { q: "Pepsin digests proteins in the:", o: ["Stomach", "Mouth", "Small intestine", "Large intestine"], a: 0 },
    { q: "The transport of soluble products of photosynthesis in plants is called:", o: ["Translocation", "Transpiration", "Excretion", "Diffusion"], a: 0 }
  ],

  "Control and Coordination": [
    { q: "What is the structural and functional unit of the nervous system?", o: ["Neuron", "Nephron", "Alveolus", "Chromosome"], a: 0 },
    { q: "Which hormone contains iodine and is secreted by the thyroid gland?", o: ["Thyroxine", "Insulin", "Adrenaline", "Oestrogen"], a: 0 },
    { q: "Which gland secretes insulin?", o: ["Pancreas", "Thyroid", "Pituitary", "Adrenal"], a: 0 },
    { q: "Which part of the brain controls balance and posture of the body?", o: ["Cerebellum", "Cerebrum", "Medulla", "Pons"], a: 0 },
    { q: "The sudden automatic response to a stimulus is called:", o: ["Reflex action", "Voluntary action", "Tropism", "Secretion"], a: 0 },
    { q: "Which plant hormone helps in cell elongation?", o: ["Auxin", "Abscisic acid", "Cytokinin", "Ethylene"], a: 0 },
    { q: "Which hormone is called the 'fight or flight' hormone?", o: ["Adrenaline", "Insulin", "Thyroxine", "Growth hormone"], a: 0 },
    { q: "Growth of a plant part towards light is called:", o: ["Phototropism", "Geotropism", "Hydrotropism", "Chemotropism"], a: 0 },
    { q: "Which plant hormone inhibits growth and causes wilting of leaves?", o: ["Abscisic acid", "Auxin", "Gibberellin", "Cytokinin"], a: 0 },
    { q: "Deficiency of iodine in the diet causes:", o: ["Goitre", "Diabetes", "Night blindness", "Scurvy"], a: 0 }
  ],

  "How do Organisms Reproduce?": [
    { q: "Amoeba reproduces by:", o: ["Binary fission", "Budding", "Spore formation", "Fragmentation"], a: 0 },
    { q: "Hydra reproduces by:", o: ["Budding", "Binary fission", "Spore formation", "Regeneration only"], a: 0 },
    { q: "Rhizopus reproduces by:", o: ["Spore formation", "Budding", "Binary fission", "Seeds"], a: 0 },
    { q: "Which plant can reproduce by its leaves (vegetative propagation)?", o: ["Bryophyllum", "Mango", "Wheat", "Pea"], a: 0 },
    { q: "Which part of the flower develops into the fruit after fertilisation?", o: ["Ovary", "Stamen", "Petal", "Sepal"], a: 0 },
    { q: "Fertilisation is the:", o: ["Fusion of a male and a female gamete", "Division of a cell", "Formation of a seed", "Release of pollen"], a: 0 },
    { q: "Which hormone is secreted by the testes?", o: ["Testosterone", "Oestrogen", "Insulin", "Thyroxine"], a: 0 },
    { q: "Where does fertilisation take place in the human female?", o: ["Fallopian tube (oviduct)", "Uterus", "Vagina", "Ovary"], a: 0 },
    { q: "Which of these is a barrier method of contraception?", o: ["Condom", "Oral pills", "Copper-T", "Vasectomy"], a: 0 },
    { q: "Planaria can regrow its lost body parts by:", o: ["Regeneration", "Budding", "Spore formation", "Binary fission"], a: 0 }
  ],

  "Heredity": [
    { q: "Who is known as the father of genetics?", o: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Hooke"], a: 0 },
    { q: "Mendel conducted his experiments on:", o: ["Pea plants", "Rose plants", "Fruit flies", "Mango trees"], a: 0 },
    { q: "What is the phenotypic ratio in the F2 generation of a monohybrid cross?", o: ["3 : 1", "9 : 3 : 3 : 1", "1 : 1", "1 : 2 : 1"], a: 0 },
    { q: "What is the phenotypic ratio in the F2 generation of a dihybrid cross?", o: ["9 : 3 : 3 : 1", "3 : 1", "1 : 1", "1 : 2 : 1"], a: 0 },
    { q: "How many pairs of chromosomes are present in a human body cell?", o: ["23", "22", "46", "44"], a: 0 },
    { q: "Which sex chromosomes are present in a human male?", o: ["XY", "XX", "XXY", "YY"], a: 0 },
    { q: "Units of heredity located on chromosomes are called:", o: ["Genes", "Enzymes", "Hormones", "Proteins"], a: 0 },
    { q: "A trait that expresses itself in the F1 generation is called:", o: ["Dominant trait", "Recessive trait", "Acquired trait", "Lost trait"], a: 0 },
    { q: "Which of these traits is NOT inherited?", o: ["Acquired traits", "Eye colour", "Height", "Blood group"], a: 0 },
    { q: "Why is variation important for a species?", o: ["It helps the species survive changes in the environment", "It makes all individuals identical", "It stops reproduction", "It prevents evolution"], a: 0 }
  ],

  "Our Environment": [
    { q: "Which gas forms the ozone layer?", o: ["O3", "O2", "CO2", "N2"], a: 0 },
    { q: "According to the 10 per cent law, how much energy is passed on to the next trophic level?", o: ["About 10 per cent", "About 50 per cent", "About 90 per cent", "About 100 per cent"], a: 0 },
    { q: "Which organisms are producers in an ecosystem?", o: ["Green plants", "Herbivores", "Carnivores", "Decomposers"], a: 0 },
    { q: "Which of these is non-biodegradable?", o: ["Plastic", "Paper", "Vegetable peels", "Cotton cloth"], a: 0 },
    { q: "Herbivores belong to which trophic level?", o: ["Second trophic level", "First trophic level", "Third trophic level", "Fourth trophic level"], a: 0 },
    { q: "The ozone layer protects us from:", o: ["Harmful ultraviolet rays", "Infrared rays", "Sound waves", "Radio waves"], a: 0 },
    { q: "Which organisms break down dead plants and animals into simple substances?", o: ["Decomposers", "Producers", "Herbivores", "Carnivores"], a: 0 },
    { q: "Biomagnification is the:", o: ["Increase in concentration of harmful chemicals along the food chain", "Decrease of energy along food chain", "Growth of producers", "Breakdown of waste"], a: 0 },
    { q: "Which chemicals are mainly responsible for ozone depletion?", o: ["Chlorofluorocarbons (CFCs)", "Oxygen", "Nitrogen", "Carbon monoxide"], a: 0 },
    { q: "Which of these is a man-made ecosystem?", o: ["Crop field", "Forest", "Pond", "Ocean"], a: 0 }
  ],


  /* ========== SCIENCE  >  Physics ========== */

  "Light – Reflection and Refraction": [
    { q: "What is the mirror formula?", o: ["1/v + 1/u = 1/f", "v + u = f", "1/v – 1/u = f", "uv = f"], a: 0 },
    { q: "The focal length of a spherical mirror is related to its radius of curvature as:", o: ["f = R/2", "f = 2R", "f = R", "f = R/4"], a: 0 },
    { q: "Which mirror is used as a rear-view mirror in vehicles?", o: ["Convex mirror", "Concave mirror", "Plane mirror", "Cylindrical mirror"], a: 0 },
    { q: "The refractive index of a medium is the ratio of:", o: ["Speed of light in vacuum to speed of light in the medium", "Speed in the medium to speed in vacuum", "Wavelength to frequency", "Angle of incidence to angle of reflection"], a: 0 },
    { q: "What is the SI unit of power of a lens?", o: ["Dioptre", "Metre", "Watt", "Newton"], a: 0 },
    { q: "Snell's law states that for a given pair of media, sin i / sin r is:", o: ["Constant", "Zero", "Equal to 1 always", "Equal to the focal length"], a: 0 },
    { q: "What is the speed of light in a vacuum?", o: ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^10 m/s", "3 × 10^5 m/s"], a: 0 },
    { q: "A concave lens always forms an image that is:", o: ["Virtual, erect and diminished", "Real and inverted", "Real and enlarged", "Virtual and enlarged"], a: 0 },
    { q: "The image formed by a plane mirror is:", o: ["Virtual, erect and of the same size", "Real and inverted", "Real and magnified", "Virtual and diminished"], a: 0 },
    { q: "When an object is at infinity, a concave mirror forms an image at:", o: ["The focus, highly diminished and real", "The centre of curvature", "Behind the mirror", "The pole"], a: 0 }
  ],

  "The Human Eye and the Colourful World": [
    { q: "The amount of light entering the eye is controlled by:", o: ["Pupil (by the iris)", "Cornea", "Retina", "Lens"], a: 0 },
    { q: "The near point of a normal human eye is about:", o: ["25 cm", "25 m", "2.5 cm", "1 m"], a: 0 },
    { q: "Myopia (short-sightedness) is corrected using a:", o: ["Concave lens", "Convex lens", "Plane mirror", "Cylindrical lens"], a: 0 },
    { q: "Hypermetropia (long-sightedness) is corrected using a:", o: ["Convex lens", "Concave lens", "Plane mirror", "Bifocal mirror"], a: 0 },
    { q: "The splitting of white light into its seven colours is called:", o: ["Dispersion", "Reflection", "Scattering", "Diffraction"], a: 0 },
    { q: "A rainbow is formed due to:", o: ["Dispersion, refraction and total internal reflection of sunlight by water droplets", "Only reflection of sunlight", "Only scattering of sunlight", "Absorption of light by clouds"], a: 0 },
    { q: "The sky appears blue due to:", o: ["Scattering of light", "Reflection of light", "Absorption of light", "Dispersion of light"], a: 0 },
    { q: "Danger signals are red because red light is:", o: ["Scattered the least", "Scattered the most", "Absorbed the most", "Dispersed the most"], a: 0 },
    { q: "Which part of the eye refracts most of the light entering it?", o: ["Cornea", "Iris", "Pupil", "Retina"], a: 0 },
    { q: "The ability of the eye lens to adjust its focal length is called:", o: ["Accommodation", "Dispersion", "Refraction", "Reflection"], a: 0 }
  ],

  "Electricity": [
    { q: "What is the SI unit of electric charge?", o: ["Ampere", "Coulomb", "Volt", "Ohm"], a: 1 },
    { q: "According to Ohm's law, V = ?", o: ["I / R", "I × R", "R / I", "I + R"], a: 1 },
    { q: "What is the SI unit of resistance?", o: ["Ohm", "Volt", "Watt", "Ampere"], a: 0 },
    { q: "Equivalent resistance of resistors in series is:", o: ["R1 + R2 + R3", "1/R1 + 1/R2 + 1/R3", "R1 × R2 × R3", "R1 − R2 − R3"], a: 0 },
    { q: "Which device is used to measure electric current?", o: ["Voltmeter", "Ammeter", "Rheostat", "Fuse"], a: 1 },
    { q: "Electric power P = ?", o: ["V ÷ I", "V × I", "V + I", "I ÷ V"], a: 1 },
    { q: "What is the commercial unit of electrical energy?", o: ["Watt", "Joule", "Kilowatt-hour", "Volt"], a: 2 },
    { q: "Heat produced in a resistor is H = ?", o: ["IRt", "I²Rt", "IR²t", "I²R/t"], a: 1 },
    { q: "The resistivity of a material depends on:", o: ["Length of the wire", "Area of cross-section", "Nature of the material", "Current flowing"], a: 2 },
    { q: "In a parallel combination of resistors, what is the same across each resistor?", o: ["Current", "Potential difference", "Resistance", "Power"], a: 1 }
  ],

  "Magnetic Effects of Electric Current": [
    { q: "Who discovered that a current-carrying wire produces a magnetic field?", o: ["Hans Christian Oersted", "Michael Faraday", "Isaac Newton", "James Watt"], a: 0 },
    { q: "The direction of the magnetic field around a current-carrying wire is given by:", o: ["Right-hand thumb rule", "Fleming's right-hand rule", "Snell's law", "Ohm's law"], a: 0 },
    { q: "The force on a current-carrying conductor in a magnetic field is found using:", o: ["Fleming's left-hand rule", "Fleming's right-hand rule", "Right-hand thumb rule", "Lenz's law only"], a: 0 },
    { q: "An electric motor converts:", o: ["Electrical energy into mechanical energy", "Mechanical energy into electrical energy", "Heat into light", "Light into sound"], a: 0 },
    { q: "An electric generator works on the principle of:", o: ["Electromagnetic induction", "Oersted's experiment", "Heating effect of current", "Chemical effect of current"], a: 0 },
    { q: "What is the frequency of AC supplied in India?", o: ["50 Hz", "60 Hz", "100 Hz", "25 Hz"], a: 0 },
    { q: "A fuse wire is made of a material with:", o: ["Low melting point", "High melting point", "High resistance only", "Magnetic properties"], a: 0 },
    { q: "In a domestic circuit, the earth wire has which colour insulation?", o: ["Green", "Red", "Black", "Blue"], a: 0 },
    { q: "Outside a bar magnet, the magnetic field lines go from:", o: ["North pole to south pole", "South pole to north pole", "East to west", "They do not move"], a: 0 },
    { q: "In a domestic electric circuit, the live wire has which colour insulation?", o: ["Red", "Black", "Green", "Yellow"], a: 0 }
  ],


  /* ========== MATHEMATICS  >  Number Systems ========== */

  "Real Numbers": [
    { q: "What is the HCF of 12 and 18?", o: ["3", "6", "9", "12"], a: 1 },
    { q: "What is the LCM of 6 and 8?", o: ["12", "24", "48", "14"], a: 1 },
    { q: "√2 is a(n) ___ number.", o: ["Rational", "Irrational", "Integer", "Natural"], a: 1 },
    { q: "The Fundamental Theorem of Arithmetic says every composite number can be written as a product of ___ in a unique way (apart from order).", o: ["Even numbers", "Prime numbers", "Perfect squares", "Odd numbers"], a: 1 },
    { q: "For two positive integers a and b, HCF × LCM = ?", o: ["a + b", "a × b", "a − b", "a ÷ b"], a: 1 },
    { q: "The decimal expansion of a rational number is either terminating or ___.", o: ["Non-terminating non-repeating", "Non-terminating repeating", "Always zero", "Always negative"], a: 1 },
    { q: "Which of these is irrational?", o: ["0.25", "√9", "√5", "22/7"], a: 2 },
    { q: "What is the HCF of 26 and 91?", o: ["7", "13", "26", "91"], a: 1 },
    { q: "Prime factorisation of 36 is:", o: ["2 × 3²", "2² × 3²", "2³ × 3", "2² × 3"], a: 1 },
    { q: "Euclid's division lemma says a = bq + r, where r satisfies:", o: ["0 < r < b", "0 ≤ r < b", "0 ≤ r ≤ b", "r > b"], a: 1 }
  ],


  /* ========== MATHEMATICS  >  Algebra ========== */

  "Polynomials": [
    { q: "What is the maximum number of zeros a cubic polynomial can have?", o: ["3", "2", "1", "4"], a: 0 },
    { q: "The zeros of the polynomial x² – 4 are:", o: ["2 and –2", "4 and –4", "2 and 4", "0 and 4"], a: 0 },
    { q: "For the polynomial ax² + bx + c, the sum of zeros is:", o: ["–b/a", "b/a", "c/a", "–c/a"], a: 0 },
    { q: "For the polynomial ax² + bx + c, the product of zeros is:", o: ["c/a", "–c/a", "b/a", "–b/a"], a: 0 },
    { q: "A quadratic polynomial whose sum of zeros is 5 and product of zeros is 6 is:", o: ["x² – 5x + 6", "x² + 5x + 6", "x² – 6x + 5", "x² + 6x + 5"], a: 0 },
    { q: "The degree of the polynomial 5x³ – 2x + 1 is:", o: ["3", "1", "2", "5"], a: 0 },
    { q: "The graph of a quadratic polynomial is a:", o: ["Parabola", "Straight line", "Circle", "Hyperbola"], a: 0 },
    { q: "The zeros of x² – 5x + 6 are:", o: ["2 and 3", "–2 and –3", "1 and 6", "–1 and –6"], a: 0 },
    { q: "If α and β are the zeros of x² – 7x + 10, then α + β is:", o: ["7", "10", "–7", "–10"], a: 0 },
    { q: "A polynomial of degree 1 is called a:", o: ["Linear polynomial", "Quadratic polynomial", "Cubic polynomial", "Constant polynomial"], a: 0 }
  ],

  "Pair of Linear Equations": [
    { q: "A pair of linear equations has a unique solution if:", o: ["a1/a2 ≠ b1/b2", "a1/a2 = b1/b2 ≠ c1/c2", "a1/a2 = b1/b2 = c1/c2", "a1 = a2 only"], a: 0 },
    { q: "A pair of linear equations has no solution (parallel lines) if:", o: ["a1/a2 = b1/b2 ≠ c1/c2", "a1/a2 ≠ b1/b2", "a1/a2 = b1/b2 = c1/c2", "b1 = b2 only"], a: 0 },
    { q: "A pair of linear equations has infinitely many solutions (coincident lines) if:", o: ["a1/a2 = b1/b2 = c1/c2", "a1/a2 ≠ b1/b2", "a1/a2 = b1/b2 ≠ c1/c2", "c1 = c2 only"], a: 0 },
    { q: "The solution of x + y = 5 and x – y = 1 is:", o: ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 1, y = 4"], a: 0 },
    { q: "The solution of 2x + y = 7 and x – y = 2 is:", o: ["x = 3, y = 1", "x = 2, y = 3", "x = 1, y = 5", "x = 4, y = –1"], a: 0 },
    { q: "If the graphs of two equations intersect at one point, the pair has:", o: ["Exactly one solution", "No solution", "Infinitely many solutions", "Two solutions"], a: 0 },
    { q: "The pair x + 2y = 3 and 2x + 4y = 7 has:", o: ["No solution", "A unique solution", "Infinitely many solutions", "Two solutions"], a: 0 },
    { q: "For what value of k do kx + 3y = k – 3 and 12x + ky = k have no solution?", o: ["–6", "6", "12", "0"], a: 0 },
    { q: "A pair of linear equations is said to be consistent if it has:", o: ["At least one solution", "No solution", "Only two solutions", "Only a unique solution"], a: 0 },
    { q: "The sum of two numbers is 20 and their difference is 4. The numbers are:", o: ["12 and 8", "10 and 10", "14 and 6", "15 and 5"], a: 0 }
  ],

  "Quadratic Equations": [
    { q: "The standard form of a quadratic equation is:", o: ["ax² + bx + c = 0, a ≠ 0", "ax + b = 0", "ax³ + bx² + c = 0", "ax² + bx + c = 0, a = 0"], a: 0 },
    { q: "The discriminant of ax² + bx + c = 0 is:", o: ["b² – 4ac", "b² + 4ac", "4ac – b", "b – 4ac"], a: 0 },
    { q: "The roots of a quadratic equation are real and equal when:", o: ["Discriminant = 0", "Discriminant > 0", "Discriminant < 0", "a = 0"], a: 0 },
    { q: "The roots of x² – 5x + 6 = 0 are:", o: ["2 and 3", "–2 and –3", "1 and 6", "–1 and 6"], a: 0 },
    { q: "The quadratic formula is:", o: ["x = (–b ± √(b² – 4ac)) / 2a", "x = (b ± √(b² – 4ac)) / a", "x = (–b ± √(b² + 4ac)) / 2a", "x = –b / 2a only"], a: 0 },
    { q: "A quadratic equation has no real roots when:", o: ["Discriminant < 0", "Discriminant = 0", "Discriminant > 0", "b = 0"], a: 0 },
    { q: "The equation 2x² – 4x + 3 = 0 has:", o: ["No real roots", "Two distinct real roots", "Two equal real roots", "Three roots"], a: 0 },
    { q: "The roots of x² – 9 = 0 are:", o: ["3 and –3", "9 and –9", "3 and 9", "0 and 3"], a: 0 },
    { q: "For what value of k does x² + kx + 9 = 0 have equal roots?", o: ["±6", "±3", "±9", "0"], a: 0 },
    { q: "Which of the following is a quadratic equation?", o: ["(x – 2)² + 1 = 2x – 3", "(x + 1)² = x² + 3", "2x + 3 = 0", "x(x + 1) + 8 = (x + 2)(x – 2)"], a: 0 }
  ],

  "Arithmetic Progressions": [
    { q: "The nth term of an AP is:", o: ["a + (n – 1)d", "a + nd", "a – (n – 1)d", "a × n"], a: 0 },
    { q: "The sum of the first n terms of an AP is:", o: ["n/2 [2a + (n – 1)d]", "n [a + d]", "n/2 [a + (n – 1)]", "2n [a + d]"], a: 0 },
    { q: "The common difference of the AP 3, 7, 11, 15, ... is:", o: ["4", "3", "7", "–4"], a: 0 },
    { q: "The 10th term of the AP 2, 5, 8, ... is:", o: ["29", "30", "32", "27"], a: 0 },
    { q: "The sum of the first 10 natural numbers is:", o: ["55", "50", "45", "65"], a: 0 },
    { q: "Which of the following is an AP?", o: ["2, 4, 6, 8, ...", "1, 2, 4, 8, ...", "1, 4, 9, 16, ...", "2, 3, 5, 8, ..."], a: 0 },
    { q: "The sum of the first 20 odd numbers (1 + 3 + 5 + ...) is:", o: ["400", "200", "420", "380"], a: 0 },
    { q: "If a = 5 and d = 3, the 15th term of the AP is:", o: ["47", "45", "50", "44"], a: 0 },
    { q: "Which term of the AP 3, 8, 13, ... is 78?", o: ["16th", "15th", "17th", "14th"], a: 0 },
    { q: "The sum of the first five multiples of 3 is:", o: ["45", "30", "36", "60"], a: 0 }
  ],


  /* ========== MATHEMATICS  >  Coordinate Geometry ========== */

  "Distance Formula": [
    { q: "The distance between points (x1, y1) and (x2, y2) is:", o: ["√[(x2 – x1)² + (y2 – y1)²]", "(x2 – x1) + (y2 – y1)", "√[(x2 + x1)² + (y2 + y1)²]", "(x2 – x1)² + (y2 – y1)²"], a: 0 },
    { q: "The distance of the point (3, 4) from the origin is:", o: ["5", "7", "1", "25"], a: 0 },
    { q: "The distance between (2, 3) and (4, 1) is:", o: ["2√2", "4", "√2", "8"], a: 0 },
    { q: "The distance of the point (–5, 12) from the origin is:", o: ["13", "17", "7", "12"], a: 0 },
    { q: "The distance of a point (x, y) from the origin is:", o: ["√(x² + y²)", "x + y", "x² + y²", "√(x – y)"], a: 0 },
    { q: "If the distance between (2, y) and (10, 7) is 10, the value of y is:", o: ["1 or 13", "6 or 8", "7 only", "0 or 14"], a: 0 },
    { q: "Three points A, B, C are collinear if:", o: ["The sum of two distances equals the third", "AB = BC = CA", "AB² + BC² = CA²", "AB + BC < CA"], a: 0 },
    { q: "The triangle with vertices (0, 0), (4, 0) and (2, 2√3) is:", o: ["Equilateral", "Isosceles but not equilateral", "Scalene", "Right-angled"], a: 0 },
    { q: "The distance between (a, b) and (–a, –b) is:", o: ["2√(a² + b²)", "√(a² + b²)", "2(a + b)", "a + b"], a: 0 },
    { q: "The distance between (–3, 0) and (4, 0) is:", o: ["7", "1", "5", "12"], a: 0 }
  ],

  "Section Formula": [
    { q: "The coordinates of the point dividing (x1, y1) and (x2, y2) internally in the ratio m1 : m2 are:", o: ["((m1x2 + m2x1)/(m1 + m2), (m1y2 + m2y1)/(m1 + m2))", "((m1x1 + m2x2)/(m1 + m2), (m1y1 + m2y2)/(m1 + m2))", "((x1 + x2)/m1, (y1 + y2)/m2)", "((m1x2 – m2x1)/(m1 + m2), (m1y2 – m2y1)/(m1 + m2))"], a: 0 },
    { q: "The midpoint of the line segment joining (2, 3) and (4, 7) is:", o: ["(3, 5)", "(6, 10)", "(2, 4)", "(1, 2)"], a: 0 },
    { q: "The midpoint of the line segment joining (–2, 5) and (6, –1) is:", o: ["(2, 2)", "(4, 4)", "(8, 6)", "(2, 3)"], a: 0 },
    { q: "The point dividing the line segment joining (1, 2) and (7, 8) in the ratio 1 : 2 is:", o: ["(3, 4)", "(5, 6)", "(4, 5)", "(2, 3)"], a: 0 },
    { q: "The ratio in which the x-axis divides the segment joining (2, –3) and (5, 6) is:", o: ["1 : 2", "2 : 1", "1 : 1", "3 : 2"], a: 0 },
    { q: "The centroid of a triangle with vertices (1, 2), (3, 4) and (5, 6) is:", o: ["(3, 4)", "(9, 12)", "(2, 3)", "(4, 5)"], a: 0 },
    { q: "The centre of a circle whose diameter has endpoints (–4, 1) and (6, 5) is:", o: ["(1, 3)", "(2, 6)", "(5, 3)", "(–1, 3)"], a: 0 },
    { q: "The ratio in which the y-axis divides the segment joining (–4, 2) and (2, 8) is:", o: ["2 : 1", "1 : 2", "1 : 1", "3 : 1"], a: 0 },
    { q: "The midpoint of a segment is (3, –2) and one end is (1, 4). The other end is:", o: ["(5, –8)", "(2, 1)", "(4, 2)", "(–1, 10)"], a: 0 },
    { q: "The centroid of a triangle with vertices (x1, y1), (x2, y2), (x3, y3) is:", o: ["((x1 + x2 + x3)/3, (y1 + y2 + y3)/3)", "((x1 + x2 + x3)/2, (y1 + y2 + y3)/2)", "(x1 + x2 + x3, y1 + y2 + y3)", "((x1 + x2)/3, (y1 + y2)/3)"], a: 0 }
  ],


  /* ========== MATHEMATICS  >  Geometry ========== */

  "Triangles": [
    { q: "The Basic Proportionality Theorem (Thales) states that a line parallel to one side of a triangle:", o: ["Divides the other two sides in the same ratio", "Bisects the triangle", "Is equal to the third side", "Is perpendicular to the base"], a: 0 },
    { q: "Which criterion is enough to prove two triangles similar if two angles of one equal two angles of the other?", o: ["AA similarity", "SSS congruence", "RHS congruence", "ASA congruence"], a: 0 },
    { q: "The ratio of the areas of two similar triangles is equal to:", o: ["The square of the ratio of their corresponding sides", "The ratio of their corresponding sides", "The cube of the ratio of their sides", "The sum of their sides"], a: 0 },
    { q: "In a right triangle, the square of the hypotenuse equals:", o: ["The sum of the squares of the other two sides", "The difference of the squares of the other two sides", "Twice the product of the other two sides", "The sum of the other two sides"], a: 0 },
    { q: "Which set of sides forms a right-angled triangle?", o: ["5, 12, 13", "4, 5, 6", "6, 7, 8", "7, 8, 9"], a: 0 },
    { q: "If two similar triangles have corresponding sides in the ratio 2 : 3, their areas are in the ratio:", o: ["4 : 9", "2 : 3", "8 : 27", "3 : 2"], a: 0 },
    { q: "The converse of the Basic Proportionality Theorem states that if a line divides two sides of a triangle in the same ratio, then it is:", o: ["Parallel to the third side", "Perpendicular to the third side", "Equal to the third side", "Half of the third side"], a: 0 },
    { q: "In triangle ABC, DE ∥ BC, AD = 2 cm, DB = 3 cm and AE = 4 cm. Then EC is:", o: ["6 cm", "3 cm", "5 cm", "8 cm"], a: 0 },
    { q: "Which of the following are always similar?", o: ["All equilateral triangles", "All isosceles triangles", "All right-angled triangles", "All scalene triangles"], a: 0 },
    { q: "The hypotenuse of a right triangle with legs 6 cm and 8 cm is:", o: ["10 cm", "14 cm", "12 cm", "9 cm"], a: 0 }
  ],

  "Circles": [
    { q: "A tangent to a circle touches the circle at how many points?", o: ["One", "Two", "Three", "None"], a: 0 },
    { q: "A tangent at any point of a circle is perpendicular to:", o: ["The radius through the point of contact", "The diameter parallel to it", "The chord through it", "The secant"], a: 0 },
    { q: "How many tangents can be drawn to a circle from an external point?", o: ["Two", "One", "Three", "Infinite"], a: 0 },
    { q: "The lengths of tangents drawn from an external point to a circle are:", o: ["Equal", "Unequal", "Double of radius", "Half of radius"], a: 0 },
    { q: "How many tangents can be drawn from a point inside a circle?", o: ["None", "One", "Two", "Infinite"], a: 0 },
    { q: "A line that intersects a circle at two points is called a:", o: ["Secant", "Tangent", "Radius", "Diameter"], a: 0 },
    { q: "How many parallel tangents can a circle have in a given direction?", o: ["Two", "One", "Three", "Infinite"], a: 0 },
    { q: "A point P is 13 cm from the centre of a circle of radius 5 cm. The length of the tangent from P is:", o: ["12 cm", "8 cm", "18 cm", "10 cm"], a: 0 },
    { q: "The angle between a tangent and the radius at the point of contact is:", o: ["90°", "45°", "180°", "60°"], a: 0 },
    { q: "If two tangents inclined at 60° are drawn from an external point, the angle between the radii at the points of contact is:", o: ["120°", "60°", "90°", "30°"], a: 0 }
  ],


  /* ========== MATHEMATICS  >  Trigonometry ========== */

  "Introduction to Trigonometry": [
    { q: "In a right triangle, sin θ is equal to:", o: ["Perpendicular / Hypotenuse", "Base / Hypotenuse", "Perpendicular / Base", "Hypotenuse / Perpendicular"], a: 0 },
    { q: "In a right triangle, cos θ is equal to:", o: ["Base / Hypotenuse", "Perpendicular / Hypotenuse", "Perpendicular / Base", "Hypotenuse / Base"], a: 0 },
    { q: "tan θ is equal to:", o: ["sin θ / cos θ", "cos θ / sin θ", "sin θ × cos θ", "1 / sin θ"], a: 0 },
    { q: "The value of sin 30° is:", o: ["1/2", "√3/2", "1", "1/√2"], a: 0 },
    { q: "The value of cos 60° is:", o: ["1/2", "√3/2", "0", "1"], a: 0 },
    { q: "The value of tan 45° is:", o: ["1", "0", "√3", "1/√3"], a: 0 },
    { q: "The value of sin 90° is:", o: ["1", "0", "1/2", "√3/2"], a: 0 },
    { q: "The value of cos 0° is:", o: ["1", "0", "1/2", "√3/2"], a: 0 },
    { q: "If sin A = 3/5, then cos A is:", o: ["4/5", "3/4", "5/3", "5/4"], a: 0 },
    { q: "The value of tan 60° is:", o: ["√3", "1/√3", "1", "0"], a: 0 }
  ],

  "Trigonometric Identities": [
    { q: "Which of the following is a correct identity?", o: ["sin²θ + cos²θ = 1", "sin θ + cos θ = 1", "sin²θ – cos²θ = 1", "sin θ cos θ = 1"], a: 0 },
    { q: "1 + tan²θ is equal to:", o: ["sec²θ", "cosec²θ", "cot²θ", "sin²θ"], a: 0 },
    { q: "1 + cot²θ is equal to:", o: ["cosec²θ", "sec²θ", "tan²θ", "cos²θ"], a: 0 },
    { q: "sec²θ – tan²θ is equal to:", o: ["1", "0", "–1", "sin²θ"], a: 0 },
    { q: "1 – cos²θ is equal to:", o: ["sin²θ", "cos²θ", "tan²θ", "1 + sin²θ"], a: 0 },
    { q: "sin (90° – θ) is equal to:", o: ["cos θ", "sin θ", "tan θ", "sec θ"], a: 0 },
    { q: "tan (90° – θ) is equal to:", o: ["cot θ", "tan θ", "sec θ", "cosec θ"], a: 0 },
    { q: "cosec θ is equal to:", o: ["1 / sin θ", "1 / cos θ", "1 / tan θ", "sin θ / cos θ"], a: 0 },
    { q: "The value of sin²30° + cos²30° is:", o: ["1", "1/2", "0", "√3"], a: 0 },
    { q: "(1 + sin θ)(1 – sin θ) is equal to:", o: ["cos²θ", "sin²θ", "tan²θ", "1 + cos²θ"], a: 0 }
  ],

  "Heights and Distances": [
    { q: "The angle of elevation is the angle formed by the line of sight with the horizontal when the object is:", o: ["Above the horizontal level", "Below the horizontal level", "On the horizontal level", "Behind the observer"], a: 0 },
    { q: "The angle of depression is the angle formed by the line of sight with the horizontal when the object is:", o: ["Below the horizontal level", "Above the horizontal level", "On the horizontal level", "Behind the observer"], a: 0 },
    { q: "If the sun's elevation is 45° and a pole casts a 20 m shadow, the height of the pole is:", o: ["20 m", "10 m", "20√3 m", "40 m"], a: 0 },
    { q: "A pole's shadow is √3 times its height. The angle of elevation of the sun is:", o: ["30°", "45°", "60°", "90°"], a: 0 },
    { q: "The top of a 30 m tower is seen at 60° elevation. The distance of the point from the tower's base is:", o: ["10√3 m", "30√3 m", "15 m", "60 m"], a: 0 },
    { q: "Which instrument is used to measure angles of elevation and depression?", o: ["Theodolite", "Thermometer", "Barometer", "Voltmeter"], a: 0 },
    { q: "A 10 m ladder makes 60° with the ground. The height it reaches on the wall is:", o: ["5√3 m", "5 m", "10√3 m", "10 m"], a: 0 },
    { q: "The angle of elevation of A from B equals the angle of depression of B from A because they are:", o: ["Alternate interior angles", "Vertically opposite angles", "Complementary angles", "Supplementary angles"], a: 0 },
    { q: "The line of sight is the line drawn from:", o: ["The eye of the observer to the object", "The object to the ground", "The ground to the sky", "One object to another object"], a: 0 },
    { q: "A kite string of 100 m makes 30° with the ground. Assuming the string is straight, the kite's height is:", o: ["50 m", "100 m", "50√3 m", "25 m"], a: 0 }
  ],


  /* ========== MATHEMATICS  >  Mensuration ========== */

  "Areas Related to Circles": [
    { q: "The area of a circle of radius r is:", o: ["πr²", "2πr", "πd", "2πr²"], a: 0 },
    { q: "The circumference of a circle of radius r is:", o: ["2πr", "πr²", "πr", "4πr"], a: 0 },
    { q: "The area of a sector of angle θ in a circle of radius r is:", o: ["(θ/360) × πr²", "(θ/360) × 2πr", "(θ/180) × r", "(θ/360) × r²"], a: 0 },
    { q: "The length of an arc of a sector of angle θ and radius r is:", o: ["(θ/360) × 2πr", "(θ/360) × πr²", "(θ/180) × πr²", "θ × r"], a: 0 },
    { q: "The area of a semicircle of radius r is:", o: ["½πr²", "πr²", "πr", "2πr²"], a: 0 },
    { q: "The area of a circle of radius 7 cm (π = 22/7) is:", o: ["154 cm²", "44 cm²", "49 cm²", "308 cm²"], a: 0 },
    { q: "The circumference of a circle of radius 7 cm (π = 22/7) is:", o: ["44 cm", "22 cm", "154 cm", "14 cm"], a: 0 },
    { q: "The perimeter of a semicircle of radius r is:", o: ["πr + 2r", "πr", "2πr", "πr²/2 + r"], a: 0 },
    { q: "The area of a quadrant of a circle of radius 14 cm (π = 22/7) is:", o: ["154 cm²", "616 cm²", "308 cm²", "44 cm²"], a: 0 },
    { q: "The area of a ring between two concentric circles of radii R and r is:", o: ["π(R² – r²)", "π(R – r)²", "2π(R – r)", "π(R + r)"], a: 0 }
  ],

  "Surface Areas and Volumes": [
    { q: "The volume of a cylinder of radius r and height h is:", o: ["πr²h", "2πrh", "⅓πr²h", "4πr²"], a: 0 },
    { q: "The curved surface area of a cylinder is:", o: ["2πrh", "πr²h", "2πr(r + h)", "πrl"], a: 0 },
    { q: "The volume of a cone of radius r and height h is:", o: ["⅓πr²h", "πr²h", "½πr²h", "⅔πr³"], a: 0 },
    { q: "The volume of a sphere of radius r is:", o: ["(4/3)πr³", "4πr²", "(2/3)πr³", "πr³"], a: 0 },
    { q: "The surface area of a sphere of radius r is:", o: ["4πr²", "(4/3)πr³", "2πr²", "3πr²"], a: 0 },
    { q: "The slant height of a cone with radius r and height h is:", o: ["√(r² + h²)", "r + h", "√(h² – r²)", "r² + h²"], a: 0 },
    { q: "The curved surface area of a cone is:", o: ["πrl", "2πrl", "⅓πr²h", "πr²"], a: 0 },
    { q: "The volume of a hemisphere of radius r is:", o: ["(2/3)πr³", "(4/3)πr³", "2πr³", "πr³"], a: 0 },
    { q: "The total surface area of a solid hemisphere of radius r is:", o: ["3πr²", "2πr²", "4πr²", "πr²"], a: 0 },
    { q: "The volume of a cuboid of length l, breadth b and height h is:", o: ["l × b × h", "2(lb + bh + hl)", "l + b + h", "4(l + b + h)"], a: 0 }
  ],


  /* ========== MATHEMATICS  >  Statistics & Probability ========== */

  "Statistics": [
    { q: "For grouped data, the mean by the direct method is:", o: ["Σfᵢxᵢ / Σfᵢ", "Σxᵢ / n only", "Σfᵢ / Σxᵢ", "Σfᵢxᵢ × Σfᵢ"], a: 0 },
    { q: "The median of the data 3, 5, 7, 9, 11 is:", o: ["7", "5", "9", "35"], a: 0 },
    { q: "The mode of a data set is:", o: ["The value that occurs most often", "The middle value", "The average value", "The largest value"], a: 0 },
    { q: "The empirical relation between mean, median and mode is:", o: ["Mode = 3 Median – 2 Mean", "Mode = 2 Median – 3 Mean", "Mode = Mean + Median", "Mode = 3 Mean – 2 Median"], a: 0 },
    { q: "The mean of 2, 4, 6, 8, 10 is:", o: ["6", "5", "8", "30"], a: 0 },
    { q: "The class mark of a class interval is:", o: ["(Upper limit + Lower limit) / 2", "Upper limit – Lower limit", "Upper limit × Lower limit", "Lower limit / 2"], a: 0 },
    { q: "The graph of a cumulative frequency distribution is called:", o: ["Ogive", "Histogram", "Bar graph", "Pie chart"], a: 0 },
    { q: "The median of 4, 6, 8, 10 is:", o: ["7", "6", "8", "9"], a: 0 },
    { q: "The modal class is the class interval with:", o: ["The highest frequency", "The lowest frequency", "The largest class width", "The highest class mark"], a: 0 },
    { q: "The mode of 2, 3, 3, 4, 5, 3, 6 is:", o: ["3", "2", "4", "5"], a: 0 }
  ],

  "Probability": [
    { q: "The probability of a sure (certain) event is:", o: ["1", "0", "1/2", "100"], a: 0 },
    { q: "The probability of an impossible event is:", o: ["0", "1", "1/2", "–1"], a: 0 },
    { q: "The probability of any event always lies between:", o: ["0 and 1 (both inclusive)", "–1 and 1", "0 and 100", "1 and 2"], a: 0 },
    { q: "The probability of getting a head when a coin is tossed once is:", o: ["1/2", "1", "1/4", "0"], a: 0 },
    { q: "The probability of getting an even number when a die is thrown once is:", o: ["1/2", "1/3", "1/6", "2/3"], a: 0 },
    { q: "For an event E, P(E) + P(not E) is equal to:", o: ["1", "0", "2", "1/2"], a: 0 },
    { q: "The probability of drawing a red card from a well-shuffled deck of 52 cards is:", o: ["1/2", "1/4", "1/13", "1/52"], a: 0 },
    { q: "The probability of drawing a king from a well-shuffled deck of 52 cards is:", o: ["1/13", "1/52", "1/4", "4/13"], a: 0 },
    { q: "The probability of getting a number greater than 4 when a die is thrown is:", o: ["1/3", "1/2", "2/3", "1/6"], a: 0 },
    { q: "The probability of getting a sum of 12 when two dice are thrown together is:", o: ["1/36", "1/12", "1/6", "1/18"], a: 0 }
  ],


  /* ========== ARTIFICIAL INTELLIGENCE  >  Part A: Employability Skills ========== */

  "Communication Skills-II": [
    { q: "Which of the following is NOT an element of the communication process?", o: ["Confusion", "Sender", "Message", "Receiver"], a: 0 },
    { q: "The medium through which a message is sent is called the:", o: ["Channel", "Sender", "Noise", "Feedback"], a: 0 },
    { q: "The response of the receiver to the message is called:", o: ["Feedback", "Noise", "Channel", "Encoding"], a: 0 },
    { q: "Verbal communication makes use of:", o: ["Spoken or written words", "Body language only", "Facial expressions only", "Silence only"], a: 0 },
    { q: "Which of the following is non-verbal communication?", o: ["Body language", "Telephone call", "Email", "Letter"], a: 0 },
    { q: "Which of these is NOT one of the 7 Cs of communication?", o: ["Confusion", "Clarity", "Courtesy", "Conciseness"], a: 0 },
    { q: "Active listening means:", o: ["Giving full attention to the speaker", "Interrupting the speaker", "Thinking about something else", "Looking at your phone"], a: 0 },
    { q: "Anything that disturbs or blocks the message in communication is called:", o: ["Noise (barrier)", "Feedback", "Channel", "Message"], a: 0 },
    { q: "Which of the following is an example of formal written communication?", o: ["Business letter", "Chat with a friend", "Casual phone call", "Gossip"], a: 0 },
    { q: "In the 7 Cs, being 'concise' means:", o: ["Using as few words as possible without losing meaning", "Using long sentences", "Using complex words", "Repeating the message many times"], a: 0 }
  ],

  "Self-Management Skills-II": [
    { q: "Self-management is the ability to:", o: ["Manage one's own thoughts, emotions and behaviour", "Control other people", "Avoid all work", "Depend only on others"], a: 0 },
    { q: "Self-confidence means:", o: ["Belief in one's own abilities", "Showing off to others", "Fear of failure", "Blaming others"], a: 0 },
    { q: "In SMART goals, the letter 'M' stands for:", o: ["Measurable", "Moral", "Money", "Mandatory"], a: 0 },
    { q: "In SMART goals, the letter 'T' stands for:", o: ["Time-bound", "Talented", "Temporary", "Tough"], a: 0 },
    { q: "A positive attitude helps a person to:", o: ["Face challenges with hope and confidence", "Avoid all problems", "Ignore responsibilities", "Blame others"], a: 0 },
    { q: "Which of the following is a good stress management technique?", o: ["Deep breathing and meditation", "Skipping sleep", "Avoiding friends", "Overeating"], a: 0 },
    { q: "SWOT analysis stands for:", o: ["Strengths, Weaknesses, Opportunities and Threats", "Skills, Work, Order, Time", "Success, Win, Open, Team", "Strategy, Wealth, Output, Tasks"], a: 0 },
    { q: "Procrastination means:", o: ["Delaying tasks unnecessarily", "Completing work early", "Planning work well", "Helping others"], a: 0 },
    { q: "Which of the following is a good time management practice?", o: ["Making a to-do list and prioritising tasks", "Doing everything at the last minute", "Ignoring deadlines", "Working without a plan"], a: 0 },
    { q: "Self-awareness means:", o: ["Knowing one's own strengths, weaknesses and feelings", "Knowing about others only", "Ignoring one's feelings", "Copying others"], a: 0 }
  ],

  "Information and Communication Technology Skills-II": [
    { q: "ICT stands for:", o: ["Information and Communication Technology", "Internet and Computer Technology", "Information and Computer Tools", "Internal Communication Technique"], a: 0 },
    { q: "Which of the following is an input device?", o: ["Keyboard", "Monitor", "Printer", "Speaker"], a: 0 },
    { q: "Software that manages the hardware and other software of a computer is called:", o: ["Operating system", "Word processor", "Browser", "Antivirus"], a: 0 },
    { q: "MS Word is an example of a:", o: ["Word processor", "Spreadsheet", "Presentation software", "Database"], a: 0 },
    { q: "MS Excel is an example of a:", o: ["Spreadsheet software", "Word processor", "Presentation software", "Web browser"], a: 0 },
    { q: "MS PowerPoint is used to create:", o: ["Presentations", "Spreadsheets", "Databases", "Websites"], a: 0 },
    { q: "Which of the following is a strong password?", o: ["A mix of uppercase and lowercase letters, numbers and symbols", "123456", "password", "Your own name"], a: 0 },
    { q: "Phishing is:", o: ["A fraudulent attempt to steal sensitive information", "A type of fishing game", "A type of software update", "A way to speed up the internet"], a: 0 },
    { q: "Which of the following is a web browser?", o: ["Google Chrome", "MS Word", "Windows", "Paint"], a: 0 },
    { q: "Which of the following is an example of cloud storage?", o: ["Google Drive", "Pen drive", "CD-ROM", "Floppy disk"], a: 0 }
  ],

  "Entrepreneurial Skills-II": [
    { q: "An entrepreneur is a person who:", o: ["Starts a business and takes its risks", "Works only for a salary", "Only buys products", "Only sells old items"], a: 0 },
    { q: "Which quality is most essential for an entrepreneur?", o: ["Willingness to take risks", "Fear of change", "Laziness", "Dependence on others"], a: 0 },
    { q: "A business plan is:", o: ["A document describing a business's goals and strategies", "A bank loan form", "A tax receipt", "A type of advertisement"], a: 0 },
    { q: "Profit is calculated as:", o: ["Revenue – Cost", "Revenue + Cost", "Cost – Revenue", "Revenue × Cost"], a: 0 },
    { q: "Market research is done to:", o: ["Understand customer needs and demand", "Avoid customers", "Increase prices only", "Close the business"], a: 0 },
    { q: "USP stands for:", o: ["Unique Selling Proposition", "Universal Sales Price", "United Service Plan", "Unlimited Supply Product"], a: 0 },
    { q: "Money invested by investors in a new startup is called:", o: ["Venture capital", "Tax", "Salary", "Insurance"], a: 0 },
    { q: "Innovation in business means:", o: ["Introducing new ideas, products or methods", "Copying others exactly", "Stopping production", "Reducing quality"], a: 0 },
    { q: "A social entrepreneur mainly aims to:", o: ["Solve a social problem through business", "Earn the maximum profit only", "Avoid customers", "Avoid employees"], a: 0 },
    { q: "The process of starting and managing a new business is called:", o: ["Entrepreneurship", "Employment", "Retirement", "Taxation"], a: 0 }
  ],

  "Green Skills-II": [
    { q: "Green jobs are jobs that:", o: ["Help protect and improve the environment", "Pollute the environment", "Are done only in gardens", "Need no skills"], a: 0 },
    { q: "Which of the following is a renewable source of energy?", o: ["Solar energy", "Coal", "Petrol", "Natural gas"], a: 0 },
    { q: "The 3Rs of waste management stand for:", o: ["Reduce, Reuse, Recycle", "Read, Read, Read", "Remove, Replace, Repeat", "Repair, Rent, Retire"], a: 0 },
    { q: "A carbon footprint is:", o: ["The total greenhouse gases released by a person or organisation", "The size of a person's shoe", "The amount of carbon in coal", "A footprint left in soil"], a: 0 },
    { q: "Which gas is mainly responsible for global warming?", o: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"], a: 0 },
    { q: "Which of the following is biodegradable waste?", o: ["Vegetable peels", "Plastic bottle", "Glass bottle", "Aluminium can"], a: 0 },
    { q: "E-waste refers to:", o: ["Discarded electronic devices", "Waste of electricity only", "Food waste", "Paper waste"], a: 0 },
    { q: "Which of the following helps in water conservation?", o: ["Rainwater harvesting", "Leaving taps open", "Washing cars daily", "Wasting water"], a: 0 },
    { q: "Sustainable development means:", o: ["Meeting present needs without harming future generations", "Using all resources now", "Ignoring the environment", "Stopping all development"], a: 0 },
    { q: "Which of the following is an energy-saving habit?", o: ["Switching off lights when not in use", "Leaving fans on all day", "Using more electrical gadgets", "Keeping the AC on at all times"], a: 0 }
  ],


  /* ========== ARTIFICIAL INTELLIGENCE  >  Part B: Subject Specific Skills ========== */

  "Revisiting AI Project Cycle & Ethical Frameworks for AI": [
    { q: "What is the first stage of the AI Project Cycle?", o: ["Problem Scoping", "Data Acquisition", "Modelling", "Evaluation"], a: 0 },
    { q: "The 4Ws Problem Canvas consists of:", o: ["Who, What, Where, Why", "When, Which, Where, Whom", "Who, What, Whose, Wow", "Why, Which, Wait, When"], a: 0 },
    { q: "Data Acquisition means:", o: ["Collecting data relevant to the problem", "Testing the model", "Deploying the model", "Cleaning the screen"], a: 0 },
    { q: "Data Exploration involves:", o: ["Visualising data to find patterns and trends", "Collecting a new dataset", "Writing the final report", "Buying computers"], a: 0 },
    { q: "Which stage of the AI project cycle involves choosing an algorithm and training it?", o: ["Modelling", "Problem Scoping", "Data Acquisition", "Deployment"], a: 0 },
    { q: "Evaluation in the AI project cycle is done to:", o: ["Test how well the model performs", "Define the problem", "Collect data", "Name the project"], a: 0 },
    { q: "Ethics refers to:", o: ["Moral principles of right and wrong", "Rules of grammar", "Computer programs", "Laws of physics"], a: 0 },
    { q: "AI bias occurs when:", o: ["An AI system gives unfair results because of biased data or design", "The computer overheats", "The internet is slow", "The screen is dim"], a: 0 },
    { q: "Data privacy means:", o: ["Protecting personal information from misuse", "Sharing all data publicly", "Deleting all computers", "Selling data to everyone"], a: 0 },
    { q: "Why are ethical frameworks needed for AI?", o: ["To guide fair, safe and responsible use of AI", "To make AI slower", "To stop all research", "To increase costs"], a: 0 }
  ],

  "AI Project Cycle": [
    { q: "Which is the first stage of the AI Project Cycle?", o: ["Data Acquisition", "Problem Scoping", "Modelling", "Evaluation"], a: 1 },
    { q: "The 4Ws Problem Canvas stands for:", o: ["Who, What, Where, Why", "Who, What, When, Why", "What, Where, Which, Why", "Who, Where, When, How"], a: 0 },
    { q: "The process of collecting data for an AI project is called:", o: ["Data Acquisition", "Deployment", "Evaluation", "Debugging"], a: 0 },
    { q: "Which stage comes right after Data Acquisition?", o: ["Evaluation", "Modelling", "Data Exploration", "Deployment"], a: 2 },
    { q: "Which of these is a way to visualise data?", o: ["Bar chart", "Compiler", "Router", "Firewall"], a: 0 },
    { q: "AI modelling approaches are Rule-based and ___.", o: ["Learning-based", "Memory-based", "Voice-based", "Cloud-based"], a: 0 },
    { q: "Data used to check a model after training is called:", o: ["Training data", "Testing data", "Raw data", "Backup data"], a: 1 },
    { q: "Which stage comes right after Modelling?", o: ["Problem Scoping", "Data Acquisition", "Evaluation", "Data Exploration"], a: 2 },
    { q: "Putting the final AI model into real-world use is called:", o: ["Deployment", "Scoping", "Exploration", "Acquisition"], a: 0 },
    { q: "Why is Evaluation done?", o: ["To check how well the model works", "To collect more data", "To define the problem", "To delete the data"], a: 0 }
  ],

  "Introduction to AI Domains": [
    { q: "Which of the following is NOT one of the three main domains of AI?", o: ["Quantum Gaming", "Data Science", "Computer Vision", "Natural Language Processing"], a: 0 },
    { q: "Computer Vision deals with:", o: ["Understanding images and videos", "Understanding spoken language", "Only numeric data", "Robot movement only"], a: 0 },
    { q: "Natural Language Processing (NLP) deals with:", o: ["Understanding and generating human language", "Reading images", "Building circuits", "Storing numbers"], a: 0 },
    { q: "Data Science mainly works with:", o: ["Numeric, alphanumeric and tabular data", "Only photographs", "Only videos", "Only sound"], a: 0 },
    { q: "Face recognition in a phone is an example of:", o: ["Computer Vision", "NLP", "Data Science only", "Robotics only"], a: 0 },
    { q: "A chatbot that understands text messages is an example of:", o: ["Natural Language Processing", "Computer Vision", "Image processing", "Hardware design"], a: 0 },
    { q: "Machine Learning is a:", o: ["Subset of Artificial Intelligence", "Superset of AI", "Type of hardware", "Programming language"], a: 0 },
    { q: "Deep Learning is a subset of:", o: ["Machine Learning", "Data entry", "Hardware design", "Networking"], a: 0 },
    { q: "In supervised learning, the training data is:", o: ["Labelled", "Unlabelled", "Missing", "Random noise"], a: 0 },
    { q: "In unsupervised learning, the training data is:", o: ["Unlabelled", "Labelled", "Always images", "Always text"], a: 0 }
  ],

  "Ethical Frameworks": [
    { q: "Which of the following is a value-based ethical framework?", o: ["Rights-based framework", "Sector-based framework", "Rule-based framework", "Cost-based framework"], a: 0 },
    { q: "Bioethics is the ethics of:", o: ["Healthcare and life sciences", "Banking", "Sports", "Entertainment"], a: 0 },
    { q: "A rights-based ethical framework mainly focuses on:", o: ["Respecting the rights of individuals", "Maximising profit", "Following only orders", "Reducing costs"], a: 0 },
    { q: "A utility-based ethical framework aims at:", o: ["The greatest good for the greatest number of people", "The benefit of one person", "Following traditions only", "Avoiding all change"], a: 0 },
    { q: "A virtue-based ethical framework focuses on:", o: ["Good character and moral values of a person", "Rules and punishments", "Profit and loss", "Speed of work"], a: 0 },
    { q: "A sector-based ethical framework is made for:", o: ["A specific field such as healthcare or finance", "All fields together", "Only schools", "Only the government"], a: 0 },
    { q: "AI bias can come from:", o: ["Biased training data or algorithm design", "A weak internet connection", "Low screen brightness", "A broken keyboard"], a: 0 },
    { q: "'AI access' as an ethical issue refers to:", o: ["Unequal access to AI technology among people", "Easy access to all for free", "Access to a password", "Access only for children"], a: 0 },
    { q: "Which of the following is an ethical concern in AI?", o: ["Bias in decisions and loss of privacy", "Faster processing", "Better screen quality", "Cheaper hardware"], a: 0 },
    { q: "Ethical frameworks help us to:", o: ["Make decisions in a fair and responsible manner", "Avoid thinking", "Increase errors", "Ignore rules"], a: 0 }
  ],

  "Advanced Concepts of Modeling in AI": [
    { q: "In a rule-based approach, the rules are:", o: ["Defined by the developer", "Learned by the machine from data", "Generated randomly", "Written by the user at runtime"], a: 0 },
    { q: "In a learning-based approach, the machine:", o: ["Learns patterns from data", "Follows only fixed rules", "Does not use data", "Copies another machine"], a: 0 },
    { q: "Supervised learning is mainly of which two types?", o: ["Classification and Regression", "Clustering and Association", "Reward and Penalty", "Input and Output"], a: 0 },
    { q: "Predicting the price of a house is an example of:", o: ["Regression", "Classification", "Clustering", "Reinforcement"], a: 0 },
    { q: "Classifying an email as spam or not spam is an example of:", o: ["Classification", "Regression", "Clustering", "Dimensionality reduction"], a: 0 },
    { q: "Grouping customers with similar buying habits without labels is called:", o: ["Clustering", "Classification", "Regression", "Labelling"], a: 0 },
    { q: "Reinforcement learning works on the basis of:", o: ["Rewards and penalties", "Labelled data only", "Fixed rules only", "Random guesses"], a: 0 },
    { q: "An artificial neural network is made up of:", o: ["Input, hidden and output layers", "Only one input layer", "Only output layers", "Hard disks"], a: 0 },
    { q: "Deep learning uses neural networks with:", o: ["Many hidden layers", "Only one layer", "No layers", "Only an output layer"], a: 0 },
    { q: "Unsupervised learning is used when the data is:", o: ["Unlabelled", "Labelled", "Missing completely", "Only numeric labels"], a: 0 }
  ],

  "Evaluating Models": [
    { q: "Accuracy is calculated as:", o: ["(TP + TN) / (TP + TN + FP + FN)", "TP / (TP + FP)", "TP / (TP + FN)", "(FP + FN) / Total"], a: 0 },
    { q: "Precision is calculated as:", o: ["TP / (TP + FP)", "TP / (TP + FN)", "(TP + TN) / Total", "TN / (TN + FP)"], a: 0 },
    { q: "Recall is calculated as:", o: ["TP / (TP + FN)", "TP / (TP + FP)", "(TP + TN) / Total", "FP / (FP + TN)"], a: 0 },
    { q: "The F1 score is the:", o: ["Harmonic mean of precision and recall", "Sum of precision and recall", "Difference of precision and recall", "Product of accuracy and recall"], a: 0 },
    { q: "A confusion matrix is a table that shows:", o: ["TP, TN, FP and FN of a model", "Only the accuracy", "Only the errors in code", "The speed of the model"], a: 0 },
    { q: "A False Positive means the model predicts:", o: ["Yes, but the actual value is No", "No, but the actual value is Yes", "Yes, and the actual value is Yes", "No, and the actual value is No"], a: 0 },
    { q: "A False Negative means the model predicts:", o: ["No, but the actual value is Yes", "Yes, but the actual value is No", "Yes, and the actual value is Yes", "No, and the actual value is No"], a: 0 },
    { q: "Overfitting means the model:", o: ["Performs well on training data but poorly on new data", "Performs poorly on training data", "Has no data", "Is too simple to learn"], a: 0 },
    { q: "If TP = 40, TN = 50, FP = 5 and FN = 5, the accuracy is:", o: ["90%", "80%", "95%", "85%"], a: 0 },
    { q: "If TP = 30 and FP = 10, the precision is:", o: ["75%", "30%", "60%", "25%"], a: 0 }
  ],

  "Statistical Data": [
    { q: "Statistics is the science of:", o: ["Collecting, analysing and interpreting data", "Building machines", "Writing stories", "Drawing maps"], a: 0 },
    { q: "The mean of 10, 20 and 30 is:", o: ["20", "10", "30", "60"], a: 0 },
    { q: "The median is the:", o: ["Middle value of ordered data", "Most frequent value", "Average value", "Largest value"], a: 0 },
    { q: "The mode is the:", o: ["Most frequently occurring value", "Middle value", "Smallest value", "Average value"], a: 0 },
    { q: "The range of a data set is:", o: ["Maximum value – Minimum value", "Maximum value + Minimum value", "Mean – Median", "Sum of all values"], a: 0 },
    { q: "Standard deviation measures the:", o: ["Spread of data around the mean", "Largest value", "Number of values", "Middle value"], a: 0 },
    { q: "Variance is equal to the:", o: ["Square of the standard deviation", "Square root of the mean", "Double the mean", "Sum of the median"], a: 0 },
    { q: "Eye colour is an example of:", o: ["Qualitative (categorical) data", "Quantitative data", "Continuous numeric data", "Discrete numeric data"], a: 0 },
    { q: "Which graph shows the distribution of numerical data in bins?", o: ["Histogram", "Pie chart", "Line chart", "Map"], a: 0 },
    { q: "An outlier is a value that is:", o: ["Very different from the other values in the data", "Equal to the mean", "Always zero", "The most common value"], a: 0 }
  ],

  "Computer Vision": [
    { q: "Computer Vision enables machines to:", o: ["See and understand images and videos", "Hear sounds only", "Speak languages", "Play music"], a: 0 },
    { q: "A pixel is:", o: ["The smallest unit of a digital image", "A type of camera", "A kind of virus", "A programming language"], a: 0 },
    { q: "In a grayscale image, pixel values range from:", o: ["0 to 255", "0 to 100", "1 to 10", "0 to 1000"], a: 0 },
    { q: "In a grayscale image, the pixel value 0 represents:", o: ["Black", "White", "Red", "Grey"], a: 0 },
    { q: "An RGB image has how many colour channels?", o: ["3", "1", "2", "4"], a: 0 },
    { q: "Image classification means:", o: ["Assigning a label to an entire image", "Drawing boxes around objects", "Increasing image size", "Deleting an image"], a: 0 },
    { q: "Object detection involves:", o: ["Identifying objects and their locations in an image", "Only naming the picture", "Only changing colours", "Only compressing the image"], a: 0 },
    { q: "CNN stands for:", o: ["Convolutional Neural Network", "Computer Network Node", "Central Number Network", "Coded Neural Notation"], a: 0 },
    { q: "Which of the following is an application of Computer Vision?", o: ["Face unlock on a smartphone", "Spell checking in a document", "Voice typing", "Stock price calculator"], a: 0 },
    { q: "Feature extraction in Computer Vision means:", o: ["Identifying important details such as edges and shapes", "Deleting the image", "Adding noise to the image", "Printing the image"], a: 0 }
  ],

  "Natural Language Processing": [
    { q: "NLP stands for:", o: ["Natural Language Processing", "Natural Logic Programming", "Numerical Language Process", "New Language Protocol"], a: 0 },
    { q: "Chatbots are mainly of which two types?", o: ["Script-bot and Smart-bot", "Voice-bot and Image-bot", "Hard-bot and Soft-bot", "Text-bot and Video-bot"], a: 0 },
    { q: "Tokenisation is the process of:", o: ["Splitting text into smaller units (tokens)", "Joining all words", "Deleting all words", "Translating text"], a: 0 },
    { q: "Stop words are:", o: ["Common words like 'is' and 'the' that carry little meaning", "Words with the highest meaning", "Words in a different language", "Punctuation marks only"], a: 0 },
    { q: "Stemming is the process of:", o: ["Removing affixes from words to get the root form", "Adding new words", "Translating words", "Sorting words alphabetically"], a: 0 },
    { q: "Lemmatisation differs from stemming because it:", o: ["Gives a meaningful root word", "Gives a meaningless root word always", "Deletes all words", "Adds suffixes"], a: 0 },
    { q: "The Bag of Words algorithm:", o: ["Counts the occurrence of each word in a text", "Draws pictures", "Compresses audio", "Detects faces"], a: 0 },
    { q: "TF-IDF stands for:", o: ["Term Frequency – Inverse Document Frequency", "Total Frequency – Individual Data Format", "Text Format – Index Data File", "Time Frame – Input Data Flow"], a: 0 },
    { q: "Sentiment analysis is used to find:", o: ["The opinion or emotion in a text", "The size of a file", "The speed of the internet", "The colour of an image"], a: 0 },
    { q: "Which of the following is an application of NLP?", o: ["Virtual assistants like Siri and Alexa", "Face unlock", "Self-driving cars", "Image editing"], a: 0 }
  ],

  "Advanced Python": [
    { q: "Which Python library is mainly used for data analysis and manipulation?", o: ["Pandas", "Turtle", "Tkinter", "Pygame"], a: 0 },
    { q: "Which Python library is used for numerical computing with arrays?", o: ["NumPy", "Pillow", "Flask", "Django"], a: 0 },
    { q: "Which Python library is used for plotting graphs?", o: ["Matplotlib", "NumPy", "Requests", "Scrapy"], a: 0 },
    { q: "The two main data structures in Pandas are:", o: ["Series and DataFrame", "List and Tuple", "Stack and Queue", "Set and Dictionary"], a: 0 },
    { q: "The standard alias used when importing NumPy is:", o: ["np", "nm", "numpy1", "n"], a: 0 },
    { q: "Which function reads a CSV file in Pandas?", o: ["pd.read_csv()", "pd.open_csv()", "pd.load()", "pd.csv_read()"], a: 0 },
    { q: "What is the output of print(2 ** 3) in Python?", o: ["8", "6", "5", "9"], a: 0 },
    { q: "In Python, the index of the first element in a list is:", o: ["0", "1", "-1", "2"], a: 0 },
    { q: "What does df.head() display by default?", o: ["The first 5 rows of the DataFrame", "The last 5 rows", "All rows", "The column names only"], a: 0 },
    { q: "What is the output of len([1, 2, 3])?", o: ["3", "2", "1", "4"], a: 0 }
  ],
};


/* ---------- 3) SETTINGS: time ki limits (seconds mein) ----------
   60 sec tak = Leopard, 180 sec (3 min) tak = Rabbit, uske baad = Turtle */
const LEOPARD_LIMIT = 60;
const RABBIT_LIMIT  = 180;


/* ---------- 4) Kuch zaroori variables ---------- */
const app = document.getElementById("app");  /* index.html ka khali box jahan screens badalti hain */
let timerId = null;      /* timer ko roakne ke liye uski ID yahan rakhte hain */
let startTime = 0;       /* quiz kab shuru hua (time yahan save hota hai) */
let quizItems = [];      /* abhi chal rahe quiz ke questions (options mix hone ke baad) */


/* ---------- 5) Chhote helper functions ---------- */

/* Timer band karta hai */
function stopTimer() {
  if (timerId) { clearInterval(timerId); timerId = null; }
}

/* Seconds ko 01:05 jaise format mein badalta hai */
function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return m + ":" + s;
}

/* Options ko mix (shuffle) karta hai taaki sahi answer hamesha same jagah na ho */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


/* ---------- 6) SCREEN 1: Subjects dikhana ---------- */
function showSubjects() {
  stopTimer();
  let html = `<h2 class="title">Choose a subject</h2><div class="card-grid">`;

  /* Har subject ke liye ek button banta hai */
  Object.keys(SUBJECTS).forEach(function (name) {
    html += `<button class="card-btn" data-subject="${name}">
               <span class="card-icon">${SUBJECTS[name].icon}</span> ${name}
             </button>`;
  });

  html += `</div>`;
  app.innerHTML = html;

  /* Button dabane par agli screen (groups) khulti hai */
  app.querySelectorAll("[data-subject]").forEach(function (btn) {
    btn.onclick = function () { showGroups(btn.dataset.subject); };
  });
}


/* ---------- 7) SCREEN 2: Groups (jaise History, Geography...) ---------- */
function showGroups(subject) {
  let html = `<button class="back-btn" id="back">← Back</button>
              <h2 class="title">${SUBJECTS[subject].icon} ${subject}</h2>
              <div class="card-grid">`;

  Object.keys(SUBJECTS[subject].groups).forEach(function (group) {
    const count = SUBJECTS[subject].groups[group].length;
    html += `<button class="card-btn" data-group="${group}">
               📚 ${group} <span class="small-text">(${count} chapters)</span>
             </button>`;
  });

  html += `</div>`;
  app.innerHTML = html;

  document.getElementById("back").onclick = showSubjects;
  app.querySelectorAll("[data-group]").forEach(function (btn) {
    btn.onclick = function () { showChapters(subject, btn.dataset.group); };
  });
}


/* ---------- 8) SCREEN 3: Chapters ---------- */
function showChapters(subject, group) {
  const chapters = SUBJECTS[subject].groups[group];
  let html = `<button class="back-btn" id="back">← Back</button>
              <h2 class="title">${group}</h2>
              <div class="card-grid">`;

  chapters.forEach(function (ch) {
    /* Har chapter ka button banta hai (sab chapters active hain) */
    html += `<button class="card-btn" data-chapter="${ch}">📖 ${ch}</button>`;
  });

  html += `</div>`;
  app.innerHTML = html;

  document.getElementById("back").onclick = function () { showGroups(subject); };
  app.querySelectorAll("[data-chapter]").forEach(function (btn) {
    btn.onclick = function () { startQuiz(btn.dataset.chapter); };
  });
}


/* ---------- 9) SCREEN 4: Quiz (MCQ + timer) ---------- */
function startQuiz(chapter) {

  /* Options mix karke quiz ke questions tayyar karte hain.
     correct: true wala option sahi answer hai */
  quizItems = QUESTIONS[chapter].map(function (item) {
    const opts = item.o.map(function (text, i) {
      return { text: text, correct: i === item.a };
    });
    return { q: item.q, opts: shuffle(opts) };
  });

  /* Upar timer bar */
  let html = `<div class="timer-bar">
                <span class="timer-label">⏱️ Time</span>
                <span class="timer-time" id="clock">00:00</span>
              </div>
              <h2 class="title">${chapter}</h2>
              <p class="progress" id="progress">Answered: 0 / ${quizItems.length}</p>`;

  /* Har question ka card, uske andar radio buttons (tick karne ke liye) */
  quizItems.forEach(function (item, i) {
    html += `<div class="question-card">
               <p class="question-text">${i + 1}. ${item.q}</p>`;
    item.opts.forEach(function (opt, j) {
      html += `<label class="option">
                 <input type="radio" name="q${i}" value="${j}">
                 <span>${opt.text}</span>
               </label>`;
    });
    html += `</div>`;
  });

  html += `<button class="submit-btn" id="submit">Submit ✅</button>
           <p class="note" id="warn"></p>`;

  app.innerHTML = html;
  window.scrollTo(0, 0);

  /* Timer shuru: har 0.25 sec mein clock update hota hai */
  startTime = Date.now();
  stopTimer();
  timerId = setInterval(function () {
    const sec = Math.floor((Date.now() - startTime) / 1000);
    const clock = document.getElementById("clock");
    if (clock) clock.textContent = formatTime(sec);
  }, 250);

  /* Jab bhi koi option tick ho, "Answered" count update karo */
  app.querySelectorAll("input[type=radio]").forEach(function (r) {
    r.onchange = function () {
      const done = app.querySelectorAll("input[type=radio]:checked").length;
      document.getElementById("progress").textContent =
        "Answered: " + done + " / " + quizItems.length;
    };
  });

  /* Submit button: agar kuch questions chhute hain to ek baar chetawani deta hai */
  document.getElementById("submit").onclick = function () {
    const done = app.querySelectorAll("input[type=radio]:checked").length;
    const left = quizItems.length - done;
    if (left > 0 && !this.dataset.confirmed) {
      document.getElementById("warn").textContent =
        left + " question(s) left. Tap Submit again to finish anyway.";
      this.dataset.confirmed = "1";
      return;
    }
    finishQuiz();
  };
}


/* ---------- 10) SCREEN 5: Result (score + time + animal) ---------- */
function finishQuiz() {
  stopTimer();
  const totalSec = Math.round((Date.now() - startTime) / 1000);

  /* Har question mein user ne kaun sa option chuna, aur score nikalna */
  let score = 0;
  const picked = quizItems.map(function (item, i) {
    const el = app.querySelector('input[name="q' + i + '"]:checked');
    const idx = el ? Number(el.value) : -1;
    if (idx !== -1 && item.opts[idx].correct) score++;
    return idx;
  });

  /* Time ke hisab se animal chunna */
  let animal, label, msg;
  if (totalSec <= LEOPARD_LIMIT) {
    animal = "🐆"; label = "LEOPARD"; msg = "Lightning fast! You are a Leopard!";
  } else if (totalSec <= RABBIT_LIMIT) {
    animal = "🐇"; label = "RABBIT"; msg = "Nice speed! You are a Rabbit!";
  } else {
    animal = "🐢"; label = "TURTLE"; msg = "Slow and steady. Try to be faster next time!";
  }

  /* Result card */
  let html = `<div class="result-box">
                <div class="animal-icon">${animal}</div>
                <div class="animal-name">${label}</div>
                <p class="result-msg">${msg}</p>
                <div class="stats-row">
                  <div class="stat-box"><b>${score}/${quizItems.length}</b><small>Score</small></div>
                  <div class="stat-box"><b>${formatTime(totalSec)}</b><small>Time</small></div>
                </div>
                <button class="submit-btn" id="again">Back to Home 🏠</button>
              </div>
              <h2 class="title review-title">Answer review</h2>`;

  /* Review: sahi answer hara (✅), galat chuna hua laal (❌) */
  quizItems.forEach(function (item, i) {
    html += `<div class="question-card"><p class="question-text">${i + 1}. ${item.q}</p>`;
    item.opts.forEach(function (opt, j) {
      let cls = "option";
      let mark = "";
      if (opt.correct) { cls += " opt-correct"; mark = " ✅"; }
      else if (j === picked[i]) { cls += " opt-wrong"; mark = " ❌"; }
      html += `<div class="${cls}"><span>${opt.text}${mark}</span></div>`;
    });
    if (picked[i] === -1) html += `<p class="note">Not answered</p>`;
    html += `</div>`;
  });

  app.innerHTML = html;
  window.scrollTo(0, 0);
  document.getElementById("again").onclick = showSubjects;
}


/* ---------- 11) Website khulte hi pehli screen dikhao ---------- */
showSubjects();
