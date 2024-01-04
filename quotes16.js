const localQuotes16 = [
    {
        text: "Anishinaabe Kinship and Respect.",
        author: "Emphasizes the concept of Anishinaabe Kinship, recognizing the interconnectedness of all living beings and the importance of respect for one another."
    },
    {
        text: "Nbakadeyek (Respect for All)",
        author: "Encourages respect for all living things, promoting harmony and balance in relationships with animals, plants, and the environment."
    },
    {
        text: "Dbaajmowen (Wisdom)",
        author: "Celebrates the pursuit of wisdom through learning, experience, and the guidance of elders, recognizing the importance of wise decision-making."
    },
    {
        text: "Aki (The Earth)",
        author: "Emphasizes the sacred relationship with the Earth (Aki), teaching responsible stewardship and sustainability to ensure the well-being of current and future generations."
    },
    {
        text: "Mno bmaadismin (Living a Good Life)",
        author: "Encourages individuals to strive for a good and balanced life, encompassing physical, mental, and spiritual well-being in harmony with the natural world."
    },
    {
        text: "Nme (Harmony)",
        author: "Teaches the importance of living in harmony with nature, recognizing the interconnected relationships and maintaining a balance between humans and the environment."
    },
    {
        text: "Gdaa-ndamaagewin (Respect for Elders)",
        author: "Stresses the respect and value of elders, recognizing their wisdom, guidance, and the importance of passing down cultural teachings."
    },
    {
        text: "Migisi giizhik (Eagle)",
        author: "Symbolizes strength, vision, and a connection to the spiritual realm, representing a guide and protector."
    },
    {
        text: "Gzhemnidoo (Thunder)",
        author: "Acknowledges the power and significance of thunder, symbolizing strength, cleansing, and the voice of the Creator."
    },
    {
        text: "Niizhwaaswi gagiikwewin (Humility)",
        author: "Reiterates the value of humility, recognizing that true strength lies in acknowledging one's own limitations and learning from others."
    },
    {
        text: "Makwa (Bear)",
        author: "The bear holds cultural significance, symbolizing strength, courage, and healing. Potawatomi teachings may include stories and lessons associated with the bear."
    },
    {
        text: "Wiigwaasabak (Birch Bark Scrolls)",
        author: "Acknowledges the cultural importance of wiigwaasabak, birch bark scrolls, which contain written or pictorial teachings and stories passed down through generations."
    },
    {
        text: "Gizhaaate nibi onji (Take care of the water)",
        author: "Emphasizes the sacredness of water, recognizing it as a life-giving force that requires respect and protection."
    },
    {
        text: "Zhaawano giizhik (South Wind)",
        author: "Acknowledges the significance of the south wind, symbolizing warmth, growth, and the renewal of life."
    },
    {
        text: "Wiisokotaadiwin (Humility)",
        author: "Teaches the value of humility, emphasizing the importance of approaching life with modesty, respect, and a willingness to learn."
    },
    {
        text: "Wiisiniwin (Generosity)",
        author: "Encourages a spirit of generosity, recognizing the interconnectedness of all beings and the joy that comes from sharing with others."
    },
    {
        text: "Miinawaa gaa-bimoseyaang (Perseverance)",
        author: "Embraces the concept of perseverance, encouraging individuals to face challenges with determination and resilience."
    },
    {
        text: "Mno-bimaadiziwin (A good life)",
        author: "Encourages the pursuit of a good and balanced life, encompassing physical, mental, and spiritual well-being."
    },
    {
        text: "Mnidoo (Spirit)",
        author: "Acknowledges the presence of spiritual forces in all aspects of life, promoting a deep connection to the spiritual dimensions of existence."
    },
    {
        text: "Bakade-aya'aad (Do not fear)",
        author: "Promotes a mindset of fearlessness, encouraging individuals to face challenges with strength and courage."
    },
    {
        text: "Gizis bakadeyaang (Sunrise)",
        author: "Symbolizes new beginnings, hope, and the continuous cycle of life represented by the rising sun."
    },
    {
        text: "Bimaadiziwin miinawaa gikendaasowin (Life and knowledge)",
        author: "Emphasizes the interconnectedness of life and knowledge, recognizing the value of wisdom in navigating life's journey."
    },
    {
        text: "Wiisakodewin (Love)",
        author: "Celebrates the importance of love in all its forms, promoting compassion, empathy, and a harmonious way of life."
    },
    {
        text: "Gwayako-bimaadiziwin (A genuine life)",
        author: "Encourages living authentically, true to one's values, identity, and cultural heritage."
    },
    {
        text: "Gizaagi'in (Honor)",
        author: "Emphasizes the importance of living with honor, integrity, and a strong sense of personal responsibility."
    },
    {
        text: "Bemaadiziwin (The Good Life)",
        author: "Encourages individuals to seek a good life through positive actions, community involvement, and spiritual well-being."
    },
    {
        text: "Aandeg (Crow)",
        author: "Symbolizes resourcefulness, adaptability, and intelligence, often featured in Potawatomi stories and teachings."
    },
    {
        text: "Dbaajmowen (Wisdom)",
        author: "Celebrates the pursuit of wisdom, gained through experience, reflection, and learning from elders."
    },
    {
        text: "Mshkiki (Medicine)",
        author: "Recognizes the healing power of traditional medicines, emphasizing a holistic approach to well-being."
    },
    {
        text: "Bakwaaswi-giizis (Frost Moon)",
        author: "Acknowledges the significance of the frost moon, a celestial event tied to seasonal changes and agricultural practices."
    },
    {
        text: "Gneshinaagan (Song)",
        author: "Recognizes the power of songs as a means of expressing emotions, telling stories, and connecting with the spirit world."
    },
    {
        text: "Weweni (Remember)",
        author: "Encourages remembrance of ancestors, cultural teachings, and the interconnectedness of past, present, and future."
    },
    {
        text: "Zhimaaganish (Maple Tree)",
        author: "Symbolizes strength, endurance, and resilience, often featured in Potawatomi cultural stories."
    },
    {
        text: "Makak (Black Bear)",
        author: "Symbolizes courage, strength, and protection, featuring prominently in Potawatomi folklore and symbolism."
    },
    {
        text: "Wiigwaasi-jibesh (Sweetgrass)",
        author: "Recognizes the spiritual significance of sweetgrass, often used in ceremonies for purification and healing."
    },
    {
        text: "Bakwezhigaans (Bream Fish)",
        author: "Symbolizes humility and the importance of valuing even the smallest and humblest of creatures."
    },
    {
        text: "Nookomis (Grandmother Moon)",
        author: "Acknowledges the cultural significance of the grandmother moon, tied to lunar cycles and traditional practices."
    },
    {
        text: "Mshkiki-gaami (Medicine Lake)",
        author: "Recognizes the sacredness of Medicine Lake, often associated with healing ceremonies and spiritual practices."
    },
    {
        text: "Gimiigwechiwenimishinaan (Rainbow)",
        author: "Symbolizes beauty, harmony, and the interconnectedness of different elements, often seen as a sign of blessings."
    },
    {
        text: "Gashkadino-giizis (Freezing Moon)",
        author: "Acknowledges the significance of the freezing moon, a time for preparing and adapting to winter conditions."
    },
    {
        text: "Gisinaa-giizis (Little Frog Moon)",
        author: "Acknowledges the significance of the little frog moon, a time associated with spring and rebirth."
    },
    {
        text: "Aagimaak (Beaver)",
        author: "Symbolizes industriousness, community building, and the importance of working together for common goals."
    },
    {
        text: "Bakwate (Wild Rice)",
        author: "Acknowledges the cultural and spiritual importance of wild rice, often celebrated in traditional ceremonies."
    },
    {
        text: "Bebamendam (Understanding)",
        author: "Encourages the cultivation of deep understanding, empathy, and insight in interactions with others and the world."
    },
    {
        text: "Wiisdom (Love)",
        author: "Emphasizes the importance of love as a guiding principle in relationships, promoting harmony and connection."
    },
    {
        text: "Makizin (Snapping Turtle)",
        author: "Symbolizes perseverance, determination, and protection, often appearing in Potawatomi stories and teachings."
    },
    {
        text: "Wiisiniwin (Friendship)",
        author: "Highlights the value of genuine and meaningful friendships, recognizing the positive impact of social connections."
    },
    {
        text: "Mandamin (Corn)",
        author: "Acknowledges the cultural and spiritual significance of corn, often viewed as a gift from the Creator and a symbol of sustenance."
    },
    {
        text: "Wiikwegamaa (Rain)",
        author: "Recognizes the essential role of rain in nourishing the Earth, promoting growth, and sustaining life."
    },
    {
        text: "Bebamendam (Respectful Listening)",
        author: "Stresses the importance of respectful and attentive listening as a means of understanding and learning from others."
    },
    {
        text: "Ziigwan (Spring)",
        author: "Acknowledges the arrival of spring, a time of renewal, growth, and the blossoming of life."
    },
    {
        text: "Miichim (Whitefish)",
        author: "Acknowledges the cultural and economic importance of whitefish, often featured in Potawatomi stories and traditions."
    },
    {
        text: "Waabooz (Rabbit)",
        author: "Symbolizes agility, fertility, and resourcefulness, often appearing in Potawatomi folklore and symbolism."
    },
    {
        text: "Mko (Bearberry)",
        author: "Recognizes the medicinal and cultural significance of bearberry, often used in traditional healing practices."
    },
    {
        text: "Gwa'shke'weni (Autumn)",
        author: "Acknowledges the arrival of autumn, a time of harvest, reflection, and preparation for the winter season."
    },
    {
        text: "Bmaadiziwin (Resilience)",
        author: "Encourages resilience in the face of challenges, recognizing the strength and adaptability of the human spirit."
    },
    {
        text: "Minaadendamowin (Reflection)",
        author: "Promotes the practice of reflection, allowing individuals to gain insight, wisdom, and a deeper understanding of themselves and the world."
    },
    {
        text: "Gwayakwaadiziwin (Balance in Life)",
        author: "Stresses the importance of maintaining balance in all aspects of life, recognizing the interconnectedness of physical, mental, and spiritual well-being."
    },
    {
        text: "Miigwan (Feather)",
        author: "Symbolizes spirituality, connection to the Creator, and the significance of feathers in ceremonial practices."
    },
    {
        text: "Waabishkaa (Martlet Bird)",
        author: "Symbolizes a positive omen and good fortune, often seen as a harbinger of positive change."
    },
    {
        text: "Nookomis Giizis (Grandmother Sun)",
        author: "Acknowledges the cultural and spiritual significance of the grandmother sun, providing light, warmth, and life to the Earth."
    },
    {
        text: "Akiwenziwin (Earth Wisdom)",
        author: "Recognizes the wisdom inherent in the Earth, promoting sustainable and harmonious living in balance with the natural world."
    },
    {
        text: "Nokomis (Grandmother)",
        author: "Honors the role of grandmothers as sources of wisdom, guidance, and keepers of cultural traditions within Potawatomi communities."
    },
    {
        text: "Mshkikiwi-giizis (Midwinter Moon)",
        author: "Acknowledges the significance of the midwinter moon, a time for reflection, storytelling, and coming together as a community."
    },
    {
        text: "Bmaadiziwin (Harmony in Life)",
        author: "Encourages a harmonious way of life, emphasizing the interconnectedness of individuals, communities, and the natural world."
    },
    {
        text: "Zaagi'idiwin (Love for All)",
        author: "Promotes a love that extends beyond personal relationships to encompass compassion and care for all living beings and the Earth."
    },
    {
        text: "Giiwenh (Giving)",
        author: "Highlights the value of generosity and giving, recognizing the positive impact of sharing one's resources with others."
    },
    {
        text: "Wiikwedong (Dreams)",
        author: "Recognizes the spiritual significance of dreams, which are considered as messages and guidance from the spirit world."
    },
    {
        text: "Mookomaan (Wolf)",
        author: "Symbolizes loyalty, teamwork, and family unity, often featured in Potawatomi stories and teachings."
    },
    {
        text: "Gzhemnidoo-bimaadiziwin (Thunderbird's Life)",
        author: "Acknowledges the Thunderbird's life, embodying power, strength, and protection, often seen as a symbol of divine intervention."
    },
    {
        text: "Waabanong (Eastern Direction)",
        author: "Recognizes the spiritual significance of the eastern direction, symbolizing new beginnings, enlightenment, and the start of each day."
    },
    {
        text: "Ojigkwanong (Northern Direction)",
        author: "Acknowledges the spiritual significance of the northern direction, symbolizing wisdom, guidance, and the enduring strength of traditions."
    },
    {
        text: "Zhaawanong (Southern Direction)",
        author: "Recognizes the spiritual significance of the southern direction, symbolizing warmth, growth, and the renewal of life."
    },
    {
        text: "Ziisbaakdoke Giizhig (Summer Solstice)",
        author: "Celebrates the summer solstice, a time of abundance, joy, and connection to the cycles of nature."
    },
    {
        text: "Gikenjige (Rainbow)",
        author: "Symbolizes unity, diversity, and the interconnectedness of different elements, often seen as a bridge between the spiritual and physical worlds."
    },
    {
        text: "Wewebimooka (Honor Song)",
        author: "Acknowledges the importance of honor songs in Potawatomi traditions, expressing respect, gratitude, and reverence for the Creator."
    },
    {
        text: "Gikendaasowin (Wisdom)",
        author: "Encourages the pursuit of wisdom, emphasizing the value of learning from experiences, elders, and cultural teachings."
    },
    {
        text: "Bekaadiziwin (Righteousness)",
        author: "Promotes righteousness, guiding individuals to act in a just and moral manner, in alignment with Potawatomi cultural values."
    },
    {
        text: "Ziigwan Giizhig (Spring Equinox)",
        author: "Celebrates the spring equinox, a time of balance, renewal, and the awakening of life after the winter season."
    },
    {
        text: "Ode'imini-giizhig (Strawberry Moon)",
        author: "Acknowledges the significance of the strawberry moon, a time for gathering strawberries and celebrating the sweetness of life."
    },
    {
        text: "Waabooz (Snowshoe Hare)",
        author: "Symbolizes adaptability, quick thinking, and resourcefulness, often featured in Potawatomi stories and teachings."
    },
    {
        text: "Giwedin (Cedar)",
        author: "Recognizes the spiritual and healing properties of cedar, often used in ceremonies and as a symbol of protection."
    },
    {
        text: "Gigoonh (Fish)",
        author: "Symbolizes abundance, fertility, and the importance of responsible stewardship of water and aquatic ecosystems."
    },
    {
        text: "Aandeg (Crow)",
        author: "Represents the sacredness of crows in Potawatomi traditions, often associated with communication between the spirit world and the earthly realm."
    },
    {
        text: "Dbaajmowen (Dreaming)",
        author: "Honors the significance of dreams as a channel for spiritual messages, guidance, and personal revelation."
    },
    {
        text: "Giizhigong (Ceremonial Fire)",
        author: "Acknowledges the sacredness of ceremonial fires, representing the connection between the earthly and spiritual realms."
    },
    {
        text: "Waabigwanii (Snow Goose)",
        author: "Symbolizes migration, adaptability, and the interconnectedness of different regions and landscapes."
    },
    {
        text: "Waabshki-makwa (White Bear)",
        author: "Symbolizes strength, courage, and the ability to navigate both the physical and spiritual realms."
    },
    {
        text: "Wiisakodewin (Sweetness)",
        author: "Celebrates the sweetness of life, acknowledging the positive aspects and blessings that bring joy and fulfillment."
    },
    {
        text: "Makadewaagamin (Bear's Den)",
        author: "Symbolizes the bear's den as a place of rest, rejuvenation, and reflection, emphasizing the importance of self-care."
    },
    {
        text: "Waabizheshi (Marten)",
        author: "Symbolizes tenacity, cleverness, and the importance of adaptability in navigating life's challenges."
    },
    {
        text: "Gwiingwa'aage (Rainbird)",
        author: "Symbolizes the importance of rain in sustaining life, often featured in Potawatomi stories and symbolism."
    },
    {
        text: "Mnidoo Mnising (Manitoulin Island)",
        author: "Acknowledges the spiritual significance of Manitoulin Island, often considered a sacred place in Potawatomi culture."
    },
    {
        text: "Mishiikenh (Turtle)",
        author: "Symbolizes longevity, wisdom, and the importance of living in harmony with the natural world."
    },
    {
        text: "Omaa (Sour Berry)",
        author: "Symbolizes the importance of balance, recognizing that life's experiences encompass both sweetness and sourness."
    },
    {
        text: "Ogimaa (Chief)",
        author: "Honors the role of chiefs as leaders and guardians of the community, responsible for maintaining harmony and justice."
    },
    {
        text: "Wiigwaas Minik (Birchbark Whistle)",
        author: "Acknowledges the cultural significance of birchbark whistles, often used in ceremonies for communication with the spirit world."
    },
    {
        text: "Gzhemnidoo-giizhig (Thunder Moon)",
        author: "Acknowledges the significance of the thunder moon, a time when thunderstorms are common, symbolizing cleansing and renewal."
    },
    {
        text: "Waaban Giizhig (Dawn Moon)",
        author: "Recognizes the spiritual significance of the dawn moon, symbolizing new beginnings, hope, and the start of a new day."
    },
    {
        text: "Ningaabii'anong (Summer Thunderstorms)",
        author: "Acknowledges the importance of summer thunderstorms, seen as a natural cleansing and renewal process for the Earth."
    },
    {
        text: "Wiisibakad (Flint)",
        author: "Symbolizes sharpness, resilience, and the ability to overcome obstacles, often featured in Potawatomi cultural stories."
    },
    {
        text: "Gaa-dibaakibinesiwag (Two-Spirit)",
        author: "Honors the diversity of gender identities within Potawatomi culture, recognizing the sacredness and unique qualities of Two-Spirit individuals."
    },
    {
        text: "Gnoozhekaaning (Pipestone)",
        author: "Acknowledges the sacredness of pipestone, often used in the creation of pipes for ceremonial and spiritual practices."
    },
    {
        text: "Waabshki-gekko (White Falcon)",
        author: "Symbolizes freedom, vision, and the ability to soar to great heights, often featured in Potawatomi symbolism."
    },
    {
        text: "Makwamigwess (Earth Diver)",
        author: "Represents the Earth Diver as a powerful being in Potawatomi cosmology, responsible for shaping the world and bringing forth life."
    },
    {
        text: "Aandeg (Crow)",
        author: "Symbolizes communication, intelligence, and the ability to bridge the physical and spiritual realms in Potawatomi traditions."
    },
    {
        text: "Waabandek (Wind)",
        author: "Recognizes the spiritual significance of the wind, seen as a messenger and carrier of prayers in Potawatomi cultural practices."
    },
    {
        text: "Bimibatoo (Cloud)",
        author: "Acknowledges the importance of clouds in the sky, symbolizing change, transformation, and the interconnectedness of all things."
    },
    {
        text: "Gimiigwechiwenimishinaan (Rainbow)",
        author: "Symbolizes the beauty of diversity, harmony, and the interconnectedness of different elements in Potawatomi cultural symbolism."
    },
    {
        text: "Miizh (Cedar Waxwing)",
        author: "Symbolizes harmony, balance, and the interconnectedness of all living beings, often featured in Potawatomi symbolism."
    },
    {
        text: "Bakade-aya'aad (Do Not Fear)",
        author: "Promotes courage, resilience, and the ability to face challenges without fear in Potawatomi cultural teachings."
    },
    {
        text: "Nookomis Giizis (Grandmother Sun)",
        author: "Recognizes the warmth, light, and life-giving qualities of the grandmother sun in Potawatomi cultural and spiritual beliefs."
    },
    {
        text: "Akiwenziwin (Earth Wisdom)",
        author: "Promotes the wisdom inherent in the Earth, guiding individuals to live in harmony with the natural world in Potawatomi culture."
    },
    {
        text: "Wiisiniwin (Friendship)",
        author: "Emphasizes the value of genuine and meaningful friendships, recognizing the positive impact of social connections in Potawatomi communities."
    },
    {
        text: "Bdebwewin (Truth)",
        author: "Stresses the importance of truthfulness and honesty, recognizing these qualities as fundamental to personal integrity and community well-being."
    },
    {
        text: "Gnoozhekaaning (Pipestone)",
        author: "Acknowledges the sacredness of pipestone, often used in the creation of pipes for ceremonial and spiritual practices in Potawatomi culture."
    },
    {
        text: "Aabita Biboon (Winter)",
        author: "Recognizes the spiritual significance of the winter season, symbolizing introspection, rest, and the importance of preparation for the coming seasons."
    },
    {
        text: "Wiisakodewin (Sweetgrass)",
        author: "Acknowledges the cultural importance of sweetgrass, often used in ceremonies and considered a sacred herb with purifying properties."
    },
    {
        text: "Gimaajii-makizin (Snail Shell Moon)",
        author: "Recognizes the significance of the snail shell moon, symbolizing protection, adaptability, and the cyclical nature of life."
    },
    {
        text: "Bmose-waaboo (Falling Leaves Moon)",
        author: "Acknowledges the falling leaves moon, symbolizing the beauty of transitions, letting go, and the natural cycle of renewal."
    },
    {
        text: "Mzenegenekwe (Butterfly)",
        author: "Symbolizes transformation, beauty, and the interconnectedness of all life stages, often featured in Potawatomi cultural symbolism."
    },
    {
        text: "Wiigwaas Minis (Maple Syrup Moon)",
        author: "Recognizes the maple syrup moon, symbolizing the time for harvesting maple sap and the sweetness that comes from collective efforts."
    },
    {
        text: "Waaban Bemaadizid (Morning Star)",
        author: "Acknowledges the spiritual significance of the morning star, symbolizing guidance, enlightenment, and the start of a new day."
    },
    {
        text: "Gizhigookwe (Sky Woman)",
        author: "Represents the Sky Woman as a central figure in Potawatomi creation stories, embodying resilience, wisdom, and the source of life."
    },
    {
        text: "Ogiimakwe (Rose)",
        author: "Symbolizes beauty, love, and the interconnectedness of all living things, often featured in Potawatomi cultural symbolism."
    },
    {
        text: "Bawaagan Giizis (Fall Moon)",
        author: "Acknowledges the fall moon, symbolizing the harvest season, gratitude, and the abundance of blessings received."
    },
    {
        text: "Mnidoo Miigwan (Thunderbird)",
        author: "Symbolizes power, protection, and the spiritual significance of thunder, often depicted as a powerful bird in Potawatomi traditions."
    },
    {
        text: "Aanikoobijigan (Tobacco)",
        author: "Acknowledges the sacredness of tobacco, often used in ceremonies and considered a powerful offering in Potawatomi spiritual practices."
    },
    {
        text: "Gichitwaawiziwin (Bravery)",
        author: "Promotes bravery, courage, and the willingness to face challenges with strength and resilience in Potawatomi cultural teachings."
    },
    {
        text: "Zhashagi (Love)",
        author: "Emphasizes the importance of love, compassion, and interconnectedness in Potawatomi cultural values and relationships."
    },
    {
        text: "Manidoo-Gaabawiziiwin (Respect for All Life)",
        author: "Stresses the reverence for all life forms, recognizing the interconnectedness and sacredness of every living being in Potawatomi teachings."
    },
    {
        text: "Dibaajimowin (Storytelling)",
        author: "Acknowledges the cultural importance of storytelling, a means of passing down knowledge, values, and traditions through generations."
    },
    {
        text: "Aakodewewin (Bravery)",
        author: "Encourages bravery and strength in facing life's challenges, emphasizing the importance of resilience and determination in Potawatomi culture."
    },
    {
        text: "Miigwan (Feather)",
        author: "Symbolizes communication with the spirit world, often used in ceremonies and considered a sacred item in Potawatomi cultural practices."
    },
    {
        text: "Ziigwan Wiigwaasing (Birch Bark)",
        author: "Acknowledges the cultural importance of birch bark, used in various ways, including crafting containers and canoes in Potawatomi traditions."
    },
    {
        text: "Mshkiki (Medicine)",
        author: "Recognizes the spiritual significance of traditional medicine, emphasizing healing, balance, and the interconnectedness of mind, body, and spirit."
    },
    {
        text: "Gimiizh (Copper)",
        author: "Symbolizes strength, durability, and the cultural importance of copper, often used in crafting tools and ornaments in Potawatomi traditions."
    },
    {
        text: "Wiigwaasi-Jiimaan (Birchbark Canoe)",
        author: "Acknowledges the cultural significance of the birchbark canoe, a traditional vessel used for transportation and trade in Potawatomi history."
    },
    {
        text: "Gikendaasowin (Kindness)",
        author: "Emphasizes the value of kindness, generosity, and positive interactions, recognizing their importance in fostering harmony within the community."
    },
];