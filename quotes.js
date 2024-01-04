const localQuotes = [
  {
      text: "Níłch'i Dóó Tsékooh (Love and Harmony) Navajo",
      author: "Emphasizes the importance of cultivating love and harmony within oneself and in relationships, promoting a positive and balanced life in Navajo spirituality."
  },
  {
      text: "Ałchííní (Ant People) Navajo",
      author: "References the Ant People, significant beings in Navajo cosmology, symbolizing industriousness, cooperation, and harmony with nature."
  },
  {
      text: "Táá hwó' ají t'éego (Self-Determination) Navajo",
      author: "Encourages individuals to exercise self-determination, taking control of their destiny and making choices that align with Navajo values and principles."
  },
  {
      text: "K'éí (Home) Navajo",
      author: "Emphasizes the sacredness of the home, highlighting it as a place where Navajo cultural teachings, traditions, and values are passed down through generations."
  },
  {
      text: "Níłtsá Hááijá (Thinking with Clarity) Navajo",
      author: "Encourages clear and thoughtful decision-making, emphasizing the importance of considering the consequences of one's actions in Navajo spirituality."
  },
  {
      text: "Háájí Doo Naat'aanii (Maternal Lineage) Navajo",
      author: "Highlights the significance of the maternal lineage in Navajo culture, recognizing the role of women and the transmission of cultural knowledge through generations."
  },
  {
      text: "Hózhóogo Iina (Walking in Beauty in Life) Navajo",
      author: "Reiterates the ongoing journey of walking in beauty throughout life, promoting balance, harmony, and positive relationships within the Navajo worldview."
  },
  {
      text: "Diné Bike'éyah (Navajo Wedding) Navajo",
      author: "References the traditional Navajo wedding ceremony, emphasizing the sacred union and the importance of harmony and balance in the marital relationship."
  },
  {
      text: "T'áá hwó' ají t'éego (Self-Reliance) Navajo",
      author: "Encourages individuals to be self-reliant and resilient, taking responsibility for their actions and decisions within the Navajo cultural context."
  },
  {
      text: "Hááyoo Yee Doo Nahodałtsoh (Respecting Elders) Navajo",
      author: "Stresses the importance of respecting elders, recognizing their wisdom and the role they play in preserving and passing down Navajo cultural traditions."
  },
  {
      text: "Baa Hózhó (Long Life and Prosperity) Navajo",
      author: "Expresses the desire for long life and prosperity, highlighting the interconnectedness of health, balance, and well-being in Navajo cultural aspirations."
  },
  {
      text: "Tó éí Iina (Sacred Mountain) Navajo",
      author: "References sacred mountains in Navajo cosmology, symbolizing spiritual connection, protection, and the presence of divine beings in the landscape."
  },
  {
      text: "Hágoóneełti'i (Teaching of Respect) Navajo",
      author: "Stresses the teaching of respect, emphasizing its importance in Navajo culture and encouraging individuals to show reverence for all aspects of life."
  },
  {
      text: "Níłtsą́ Nítsą́ (Seeking Balance) Navajo",
      author: "Encourages individuals to seek balance in all aspects of life, recognizing the interconnectedness of physical, mental, and spiritual well-being in Navajo teachings."
  },
  {
      text: "Ahóóhai (Compassion) Navajo",
      author: "Emphasizes the value of compassion, encouraging individuals to show kindness and empathy to others, promoting harmonious relationships in Navajo culture."
  },
  {
      text: "Háyoołkááłti'í (Life Learning) Navajo",
      author: "Highlights the concept of life learning, recognizing that every experience and challenge provides opportunities for growth and wisdom in Navajo spirituality."
  },
  {
      text: "Shash Yázhí (Bear) Navajo",
      author: "Symbolizes strength, introspection, and healing in Navajo culture. The bear is revered for its abilities to navigate both the physical and spiritual realms."
  },
  {
      text: "Ma'ii (Coyote) Navajo",
      author: "Represents a trickster figure in Navajo mythology. The coyote is seen as both cunning and foolish, teaching valuable lessons about balance and consequences."
  },
  {
      text: "Tótsohnii (Big Horn Sheep) Navajo",
      author: "Signifies endurance, determination, and balance. The Big Horn Sheep teaches the importance of navigating life's challenges with grace and resilience."
  },
  {
      text: "Dibé (Sheep) Navajo",
      author: "Holds cultural and spiritual significance, symbolizing sustenance, warmth, and protection. Sheep are essential in Navajo ceremonies and daily life."
  },
  {
      text: "Bilasáana (Birds) Navajo",
      author: "Various birds hold symbolic meanings in Navajo culture. For example, eagles are revered for their connection to the sky and spiritual realms."
  },
  {
      text: "Tł'ééjí (Horse) Navajo",
      author: "Represents companionship, strength, and harmony. Horses are respected for their roles in Navajo history, aiding in transportation and daily life."
  },
  {
      text: "Chʼosh (Snake) Navajo",
      author: "Symbolizes transformation and healing. The shedding of its skin represents renewal and the cycles of life, death, and rebirth in Navajo spirituality."
  },
  {
      text: "Dootł'izhii (Mountain Lion) Navajo",
      author: "Signifies leadership, courage, and balance. The mountain lion is respected for its ability to navigate diverse landscapes and its connection to the spirit world."
  },
  {
      text: "Tłʼízí (Turkey) Navajo",
      author: "Carries cultural importance, symbolizing abundance and gratitude. Turkeys are often associated with ceremonies and expressions of thanksgiving."
  },
  {
      text: "Dzeh (Ant) Navajo",
      author: "Teaches lessons of industriousness, cooperation, and harmony with nature. Ants are revered for their diligence and interconnectedness."
  },
  {
      text: "Yéiitsoh (Monster Slayer) Navajo",
      author: "Legendary figure who defeated monsters threatening Navajo people. Embodies bravery, protection, and the triumph of good over evil."
  },
  {
      text: "Chʼil Hajiin (Bluebird) Navajo",
      author: "Symbolizes happiness, good fortune, and the arrival of spring. The bluebird is associated with positive omens and blessings in Navajo culture."
  },
  {
      text: "Táá hwó' ají t'éego (Self-Reliance) Navajo",
      author: "Encourages individuals to be self-reliant and resilient, learning from the independence and adaptability observed in various animals."
  },
  {
    text: "Sáanii (Ghostway Ceremony) Navajo",
    author: "Emphasizes the ceremonial practices conducted to guide the spirit of the deceased to the afterlife. Reflects the belief in the importance of maintaining harmony and balance for the soul's journey."
  },
  {
    text: "Yá'át'ééh Késhmish (Condolences) Navajo",
    author: "The expression of condolences is a crucial aspect of Navajo culture when someone passes away. Encourages community support and empathy during times of grief."
  },
  {
    text: "Tl'iish (Bitter Water) Navajo",
    author: "Refers to the bitter water ceremony, which is conducted to cleanse and purify individuals affected by death. Symbolizes the acknowledgment of the hardships associated with loss and the importance of spiritual purification."
  },
  {
    text: "Shí naashá (Mourning) Navajo",
    author: "Mourning practices are observed to honor and remember the departed. Reinforces the communal aspect of grieving, emphasizing the support provided by the community."
  },
  {
    text: "Anííní (Breath of Life) Navajo",
    author: "Signifies the belief in the continuation of life through the breath, even after physical death. Reflects the interconnectedness of all living things and the enduring nature of the spirit."
  },
  {
    text: "Chʼį́įdii (Ceremonial Blessings) Navajo",
    author: "Ceremonial blessings are often conducted to bring peace to the departed soul and comfort to the grieving community. Reinforces the spiritual connection between the living and the deceased."
  },
  {
    text: "Hałneezí (Burying the Placenta) Navajo",
    author: "In some Navajo communities, the placenta is ceremonially buried to ensure a strong spiritual connection between the individual and the land. Represents the belief in the cyclical nature of life and death."
  },
  {
    text: "Hózhóogo Iiná (Walking in Beauty in Life) Navajo",
    author: "Emphasizes the importance of leading a balanced and harmonious life, recognizing that death is a part of the natural order. Encourages individuals to live in a way that contributes to the overall beauty and harmony of existence."
  },
  {
    text: "Yikáísdáhí (Changing Woman) Navajo",
    author: "Changing Woman is a significant deity associated with the celestial realm, embodying life, fertility, and the cyclical nature of existence. The stars are seen as her children, reflecting the interconnectedness of all life."
  },
  {
    text: "Níłchʼi Diyin (Holy Wind) Navajo",
    author: "The Holy Wind is a spiritual force that can be associated with the movement of celestial bodies, including the stars. Symbolizes the presence of the divine in the natural world, connecting the earthly and celestial realms."
  },
  {
    text: "Bilasáana (Meteor Shower) Navajo",
    author: "Meteor showers are considered significant celestial events in Navajo culture. The streaking lights are often seen as messages or signs from the spiritual realm, carrying symbolic meaning."
  },
  {
    text: "Dibé Nitsaa (Pleiades) Navajo",
    author: "The Pleiades star cluster holds cultural importance and is associated with the Dibé (Sheep) ceremony. The appearance of the Pleiades in the night sky marks the beginning of the winter season and holds significance in ceremonial timing."
  },
  {
    text: "Tó éí Iina (Sacred Mountain) Navajo",
    author: "Sacred mountains are considered earthly manifestations of celestial beings and hold a spiritual connection to the stars. The alignment of sacred mountains with celestial events is seen as a reflection of the divine order."
  },
  {
    text: "Yéigo Diné (Navajo Night Chant) Navajo",
    author: "The Night Chant ceremony involves rituals conducted at night and includes chants that connect participants to celestial forces. Participants seek blessings and guidance from the stars during this ceremonial event."
  },
  {
    text: "Ałchííní (Ant People) Navajo",
    author: "The Ant People are believed to have come from the stars and played a role in guiding the Navajo people during times of hardship. Represents the idea of extraterrestrial influence in Navajo cosmology."
  },
  {
    text: "Tłéehił (Rainbow) Navajo",
    author: "While not a star, the Rainbow is seen as a celestial bridge connecting the physical and spiritual realms. Reflects the interconnectedness of the universe and the harmonious balance between different elements."
  },
];