const WorkSectionCard = ({ card }) => {
  const clickHandler = () => {
    console.log("Click");
  }

  return (
    <div className="h-[400px] border border-gray-200 shadow-md hover:-translate-y-4 duration-300 cursor-pointer md:justify-between justify-around rounded-sm flex flex-col gap-x-3">
      <div className="w-full h-1/2 p-1">
        <img src={card.image} alt={card.title} className="w-full h-full object-cover border-b"/>
      </div>

      <div className="md:p-4 p-1">
        <div className="flex justify-start md:gap-2 gap-1 items-center">
          <h3 className="lg:text-4xl sm:text-3xl text-2xl mb-2">{card.title}</h3>
          <card.icon size={30} />
        </div>
        <p className="font-sans opacity-80">{card.description}</p>
        <button className="py-2 rounded-sm text-white mt-3 cursor-pointer hover:bg-black/80 active:bg-black font-sans text-center w-full bg-black">Boshlash</button>
      </div>
    </div>
  )
}

export default WorkSectionCard