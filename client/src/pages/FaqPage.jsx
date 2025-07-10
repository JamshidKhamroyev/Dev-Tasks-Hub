import faqtImage from "../../public/images/faq-image.png"

const FaqPage = () => {
  return (
    <section className="py-16 lg:px-28 md:px-8 px-1 md:py-20 font-Inter bg-gradient-to-b from-[#FFFFFF] to-[#F6EAFF]">
        <div className="w-full rounded-4xl grid md:grid-cols-2 p-4 grid-cols-1 items-start bg-gradient-to-r to-[#E1BEFC] from-[#F2EEFD]">
            <div className="flex flex-col font-sans items-start w-full max-w-2xl mx-auto space-y-4 py-8">
                <h2 className="text-3xl font-bold mb-4 font-Playfair">Ko'p So'raladigan Savollar</h2>

                <details className="group border border-gray-300 rounded-md p-4">
                    <summary className="cursor-pointer font-medium text-lg group-open:text-purple-600">
                        Bu platforma qanday ishlaydi?
                    </summary>
                    <p className="mt-2 text-gray-700">
                        Mentorlar tomonidan yuklangan loyihalardan birini tanlaysiz, uni yakunlab, adminlarga taqdim qilasiz va ball to‘plashni boshlaysiz.
                    </p>
                </details>

                <details className="group border border-gray-300 rounded-md p-4">
                    <summary className="cursor-pointer font-medium text-lg group-open:text-purple-600">
                        Ballarni qanday to‘plash mumkin?
                    </summary>
                    <p className="mt-2 text-gray-700">
                        Loyihalarni muvaffaqiyatli topshirganingizda, adminlar tomonidan tekshirib baholanadi va shunga yarasha ball beriladi.
                    </p>
                </details>

                <details className="group border border-gray-300 rounded-md p-4">
                    <summary className="cursor-pointer font-medium text-lg group-open:text-purple-600">
                        Loyihalar uchun cheklovlar bormi?
                    </summary>
                    <p className="mt-2 text-gray-700">
                        Ha, har bir loyiha ma’lum darajaga mos bo‘lib, darajangiz oshgan sari murakkabroq loyihalar ochiladi.
                    </p>
                </details>

                <details className="group border border-gray-300 rounded-md p-4">
                    <summary className="cursor-pointer font-medium text-lg group-open:text-purple-600">
                        GitHub va demo linkni qanday yuboraman?
                    </summary>
                    <p className="mt-2 text-gray-700">
                        Loyiha sahifasidagi topshirish tugmasi orqali GitHub repo, demo URL, ishlatilgan texnologiyalar va vaqtni yozib adminlarga yuborasiz.
                    </p>
                </details>
            </div>

            <div>
                <img src={faqtImage} alt="image" />
            </div>
        </div>
    </section>
  )
}

export default FaqPage