// import icons
import { FiSearch, FiUpload, FiAward } from "react-icons/fi";
import { IoMailOpenSharp, IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLightbulb, FaCheckCircle, FaFolderOpen, FaLevelUpAlt } from "react-icons/fa"
// import id
import { v4 as uuidv4 } from 'uuid';
// import images

import card1Image from "../../public/images/card-1.png"
import card2Image from "../../public/images/card-2.png"
import card3Image from "../../public/images/card-3.png"

export const benefits = [
  {
    id: 1,
    icon: FaLightbulb,
    text: "Real tajriba orttirasiz",
    description:
      "Bizning platformamiz orqali siz haqiqiy loyihalarda ishlash imkonini qo‘lga kiritasiz, bu esa nazariy bilimlarni amaliyotga aylantirishga yordam beradi va professional darajangizni oshiradi.",
  },
  {
    id: 2,
    icon: FaCheckCircle,
    text: "Kodlaringiz baholanadi",
    description:
      "Tajriba orttirganingiz sayin, mentorlar va jamoa a'zolari tomonidan yozgan kodlaringiz tahlil qilinib, sizga aniq va foydali feedback beriladi, bu esa o‘sishingiz uchun muhimdir.",
  },
  {
    id: 3,
    icon: FaFolderOpen,
    text: "Portfolio to‘plovchi loyiha",
    description:
      "Har bir bajarilgan loyiha sizning portfoliongizga qo‘shiladi, bu esa kelajakdagi ish beruvchilarga o‘z qobiliyatingizni namoyish etishda katta yordam beradi.",
  },
  {
    id: 4,
    icon: FaLevelUpAlt,
    text: "Murakkablik darajasi bo‘yicha o‘sib borasiz",
    description:
      "Platformada sizning malakangiz oshgan sari qiyinroq va murakkabroq loyihalar taqdim etiladi, shuning uchun doimiy ravishda rivojlanish va yangi cho‘qqilarni zabt etish imkoniyatiga ega bo‘lasiz.",
  },
]

export const headerMenu = [
  {
    id: uuidv4(),
    title: 'Features',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'Pricing',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'Blog',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'Community',
    link: '#',
  },
];

export const cards = [
  {
    id: uuidv4(),
    title: "Loyihani tanla",
    description:
      "Mentorlar tomonidan tayyorlangan loyihalarni ko‘rib chiqing, o‘z darajangizga mosini tanlang va boshlang!",
    icon: FiSearch,
    image: card1Image,
  },
  {
    id: uuidv4(),
    title: "Bajar va topshir",
    description:
      "Loyihani yakunlang, GitHub repo, demo link va ishlatilgan texnologiyalarni yozib, topshirish tugmasini bosing.",
    icon: FiUpload,
    image: card2Image,
  },
  {
    id: uuidv4(),
    title: "Ball to'pla va o's",
    description:
      "Adminlar tomonidan baholang, ball to‘plang va yuqoriroq darajaga o‘ting. Yangi va murakkab loyihalarga yo‘l oching!",
    icon: FiAward,
    image: card3Image,
  },
];

export const footerMenu = [
  {
    id: uuidv4(),
    title: 'About',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'Terms and conditions',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'Privacy',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'Disclaimer',
    link: '#',
  },
];

export const footerMedia = [
  {
    id: uuidv4(),
    icon: IoMailOpenSharp,
    link: '#'
  },
  {
    id: uuidv4(),
    icon: IoLogoTwitter,
    link: '#'
  },
  {
    id: uuidv4(),
    icon: IoLogoFacebook,
    link: '#'
  },
  {
    id: uuidv4(),
    icon: RiInstagramFill,
    link: '#'
  },
];