import logo from "../assets/logomain.png"
import { useTranslation } from "react-i18next"
import blogs from "../assets/blugs.png"
import requerst from "../assets/request.svg"
import note from "../assets/note.svg"
import { useState } from "react"
import { cn } from "../lib/utils"
import Blogs from "../pages/Blogs"
import Request from "../pages/Request"
import News from "../pages/News"
export default function Dashboard() {
  const { t } = useTranslation()
  const [activeItem, setActiveItem] = useState<number>(1)
  const handleToggleClick = (id: number) => {
    setActiveItem(id)
  }
  const pages = [
    { id: 1, title: t("Request"), icon: blogs },
    { id: 2, title: t("Blogs"), icon: requerst },
    { id: 3, title: t("News and Updates"), icon: note },
  ]
  return (
    <>
      <div className="bg-[#F5F5F7] p-2 h-screen max-w-[220px]">
        <div className="p-5">
          <img className="object-contain " src={logo} alt="logo" />
        </div>
        {pages.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => handleToggleClick(item.id)}
              className={cn(
                " my-5  cursor-pointer  rounded-[8px] py-1 px-2 flex  items-center gap-3",
                activeItem === item.id && "bg-[#E8E8ED]",
              )}
            >
              <img src={item.icon} alt="icon" />
              {item.title}
            </div>
          )
        })}
      </div>
      {activeItem === 1 && <Request />}
      {activeItem === 2 && <Blogs />}
      {activeItem === 3 && <News />}
    </>
  )
}
