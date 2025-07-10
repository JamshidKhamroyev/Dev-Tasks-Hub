import { FiSearch, FiUpload, FiAward } from "react-icons/fi";
import card1Image from "../../public/images/card-1.png"
import card2Image from "../../public/images/card-2.png"
import card3Image from "../../public/images/card-3.png"


export const cards = [
    {
      id: 1,
      title: "Loyihani tanla",
      description:
        "Mentorlar tomonidan tayyorlangan loyihalarni ko‘rib chiqing, o‘z darajangizga mosini tanlang va boshlang!",
      icon: FiSearch,
      image: card1Image,
    },
    {
      id: 2,
      title: "Bajar va topshir",
      description:
        "Loyihani yakunlang, GitHub repo, demo link va ishlatilgan texnologiyalarni yozib, topshirish tugmasini bosing.",
      icon: FiUpload,
      image: card2Image,
    },
    {
      id: 3,
      title: "Ball to'pla va o's",
      description:
        "Adminlar tomonidan baholang, ball to‘plang va yuqoriroq darajaga o‘ting. Yangi va murakkab loyihalarga yo‘l oching!",
      icon: FiAward,
      image: card3Image,
    },
  ]
  