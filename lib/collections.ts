export const collections = [
  {
    slug: "gold",
    title: "Gold jewelry",
    description: "Explore sculptural chains, cuffs, and earrings. Specify the gold fineness, finish, dimensions, and quantity in your inquiry.",
    specificationHint: "Include your preferred gold fineness, finish, and dimensions.",
    pieces: [
      { id: "LHG-G01", title: "Sculptural gold collar", image: "/images/gold-chain.webp", alt: "Sculptural yellow-gold collar necklace on warm limestone" },
      { id: "LHG-G02", title: "Sunburst cuff", image: "/images/gold-cuff.webp", alt: "Wide gold cuff with geometric sunburst fluting" },
      { id: "LHG-G03", title: "Ribbed drop earrings", image: "/images/gold-earrings.webp", alt: "Pair of ribbed yellow-gold statement earrings on mauve fabric" },
    ],
  },
  {
    slug: "diamonds",
    title: "Diamonds",
    description: "Describe the stones you’re looking for by shape, size range, grading preferences, and any documentation you need.",
    specificationHint: "Note loose or set stones, natural or lab-grown preference, shape, carat range, and grading report needs.",
    pieces: [
      { id: "LHG-D01", title: "Faceted stone selection", image: "/images/loose-diamonds.webp", alt: "Five loose clear gemstones of different cuts on plum suede" },
      { id: "LHG-D02", title: "Oval halo ring", image: "/images/diamond-ring.webp", alt: "Oval clear center stone with a double halo and pavé band" },
      { id: "LHG-D03", title: "Chandelier earrings", image: "/images/diamond-drops.webp", alt: "Pair of articulated clear-stone chandelier earrings on champagne silk" },
    ],
  },
  {
    slug: "fine-jewelry",
    title: "Fine jewelry",
    description: "Discuss distinctive settings, colored stones, and statement pieces. Include material preferences and presentation needs.",
    specificationHint: "Include your preferred metal, stone, setting, dimensions, and gift packaging.",
    pieces: [
      { id: "LHG-F01", title: "Green stone pendant", image: "/images/gem-pendant.webp", alt: "Green center gemstone framed by clear stones in an ornate gold pendant" },
      { id: "LHG-F02", title: "Crimson cocktail ring", image: "/images/gem-ring.webp", alt: "Crimson oval gemstone ring encircled by pale baguette-cut stones" },
    ],
  },
] as const;
