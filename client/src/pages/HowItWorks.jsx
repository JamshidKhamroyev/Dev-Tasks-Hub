import WorkSectionCard from "../components/WorkSectionCard"
import { cards } from "../constants"

const HowItWorks = () => {
  return (
    <section className="py-16 lg:px-28 md:px-8 px-1 md:py-20 font-Inter bg-gradient-to-b from-[#FFFFFF] to-[#F6EAFF]">
        <div className="w-full flex items-center justify-center text-center">
            <h1 className="font-Playfair font-medium text-3xl sm:text-5xl md:text-7xl leading-tight">
                Bu qanday ishlaydi?
            </h1>
        </div>

        <div className="w-full grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1  items-center py-12">
            {cards.map(card => (
                <WorkSectionCard card={card} key={card.id} />
            ))}
        </div>
    </section>
  )
}

export default HowItWorks