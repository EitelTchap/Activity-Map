import { GiForestCamp } from "react-icons/gi";
import { 
  FaBasketballBall,
  FaChessKnight,
  FaBookReader,
  FaRunning,
  FaGamepad,
  FaWater,
  FaCat,
  FaBeer,
  FaQuestion,
} from "react-icons/fa";
import { MdGroups, MdOutlineSportsMartialArts,  MdEvent, MdExplore } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";

export const categories = [
  {
    label: "Balling",
    icon: FaBasketballBall,
    description: "This is a balling activity!",
  },
  {
    label: "Board Game",
    icon: FaChessKnight,
    description: "This is a board game activity!",
  },
  {
    label: "Learn",
    icon: FaBookReader,
    description: "This is a learning activity!",
  },
  {
    label: "Fitness",
    icon: FaRunning,
    description: "This is a fitness activity!",
  },
  {
    label: "Gaming",
    icon: FaGamepad,
    description: "This is a gaming activity!",
  },
  {
    label: "Water",
    icon: FaWater,
    description: "This is a water based activity!",
  },
  {
    label: "Racket",
    icon: GiTennisRacket,
    description: "This is a racket activity!",
  },
  {
    label: "Martial Arts",
    icon: MdOutlineSportsMartialArts,
    description: "This is a martial art activity!",
  },
  {
    label: "Animals",
    icon: FaCat,
    description: "This is an activity for animals",
  },
  {
    label: "Networking",
    icon: MdGroups,
    description: "This is a networking activity!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This is a camping activity!",
  },
  {
    label: "Events",
    icon: MdEvent,
    description: "This is an event activity!",
  },
  {
    label: "Explore",
    icon: MdExplore,
    description: "This is an exploration activity!",
  },
  {
    label: "Social",
    icon: FaBeer,
    description: "This is a social activity!",
  },
  {
    label: "Others",
    icon: FaQuestion,
    description: "Other!",
  },
];

export const LISTINGS_BATCH = 16;

export const menuItems = [
  {
    label: "My activities",
    path: "/activities",
  },
  {
    label: "My favorites",
    path: "/favorites",
  },
  {
    label: "My reservations",
    path: "/reservations",
  },
  {
    label: "My clubs",
    path: "/clubs",
  },
];
