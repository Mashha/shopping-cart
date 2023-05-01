import money_tree from "../../images/plants/Money_Tree.png";
import money_tree_close from "../../images/plants/Money_Tree_Close.jpg"
import philodendron from "../../images/plants/Philodendron_Birkin.png";
import rattlesnake from "../../images/plants/Calathea_Rattlesnake.png";
import zzPlant from "../../images/plants/ZZ_plant.png";

export const smallPlants = [
  {
    name: "Money Tree",
    id: "money_tree",
    image: money_tree,
    price: 68,
    description:
      "The Money Tree is the perfect low-care indoor plant to bring a tropical feel with a touch of good fortune. With its intricately braided trunk and bright green, palm-like leaves, it looks both like a tree and a palm. The Money Tree gets its name in part from the natural Feng Shui this plant gives. It's believed this plant will bring positive energy and good luck to the owner. The gorgeous Money Tree makes for a meaningful gift or your own good luck charm.",
    size: "small",
    gallery: [
      money_tree,
      money_tree_close
    ],
    qty: 1
  },
  {
    name: "Philodendron Birkin",
    id: "philodendron_birkin",
    image: philodendron,
    price: 48,
    description:
      "A lively, pet-friendly plant topped with palmate leaves upon a stout trunk. A mini-version of the beloved braided Money Tree",
      gallery: [
        money_tree,
        philodendron,
        zzPlant
      ],
      qty: 1
  },
  {
    name: "Calathea Rattlesnake",
    id: "calathea_rattlesnake",
    image: rattlesnake,
    price: 58,
    description:
      "A lively, pet-friendly plant topped with palmate leaves upon a stout trunk. A mini-version of the beloved braided Money Tree",
      gallery: [
        money_tree,
        philodendron,
        zzPlant
      ],
      qty: 1
  },
  {
    name: "ZZ Plant",
    id: "zz-plant",
    image: zzPlant,
    price: 48,
    description:
      "A lively, pet-friendly plant topped with palmate leaves upon a stout trunk. A mini-version of the beloved braided Money Tree",
      gallery: [
        money_tree,
        philodendron,
        zzPlant
      ],
      qyt: 1
  },
];
