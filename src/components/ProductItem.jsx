import { useLanguage } from "../hooks/useLanguage";

export default function ProductItem({ item, index, setSelectedItem }) {
  const { language, t } = useLanguage();

  return (
    <li
      key={`ProductItem-${index}`}
      className="flex justify-between gap-x-6 p-5 text-white rounded-2xl shadow-md hover:bg-gray-800 cursor-pointer"
      data-aos="fade-up" data-aos-delay={index * 50}
      onClick={() => setSelectedItem(item)}
    >
      <div className="flex min-w-0 gap-x-4 cursor-pointer">
        {/* <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-12 flex-none rounded-full bg-gray-50" /> */}
        <div className="min-w-0 flex-auto ">
          <p className="font-display text-xl font-bold text-white font-display ">
            {/* text-brand-orange */}
            {item.name[language]}
          </p>
          <p className="text-gray-400 mt-1 truncate text-sm/5">
            {item.description[language]}
          </p>
        </div>
      </div>
      <div className="shrink-0 flex flex-col sm:items-end justify-center">
        <div className="flex bg-brand-orange text-white px-3 py-1 rounded-full font-bold mx-auto">
          ₡{item.price}
        </div>
        {/* <p className="mt-1 text-xs/5 ">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p> */}
      </div>
    </li>
  )
}