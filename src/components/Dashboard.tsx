import logo from "../assets/logomain.png"
import { useTranslation } from "react-i18next"
import blogs from "../assets/blugs.png"
import requerst from "../assets/request.svg"
import note from "../assets/note.svg"
import { cn } from "../lib/utils"
import Blogs from "../pages/Blogs"
import News from "../pages/News"
import Request from "../pages/Request"
import { NavLink, Outlet } from "react-router-dom"
export default function Dashboard() {
  const { t, i18n } = useTranslation()

  const pages = [
    {
      id: 1,
      title: t("Request"),
      icon: requerst,
      component: <Request />,
      path: "request",
    },
    {
      id: 2,
      title: t("Blogs"),
      icon: blogs,
      component: <Blogs />,
      path: "blogs",
    },
    {
      id: 3,
      title: t("News and Updates"),
      icon: note,
      component: <News />,
      path: "news",
    },
  ]
  return (
    <div className={cn("flex w-full")}>
      <div
        className={cn(
          "bg-[#F5F5F7] p-2 fixed top-0  h-screen max-w-[220px]",
          i18n.language === "en" ? " left-0" : "right-0",
        )}
      >
        <div className="p-5">
          <img className="object-contain " src={logo} alt="logo" />
        </div>
        {pages.map((item) => {
          return (
            <NavLink
              to={item.path}
              key={item.id}
              className={({ isActive }) =>
                cn(
                  "my-5 cursor-pointer rounded-[8px] py-1 px-2 flex items-center gap-3",
                  isActive && "bg-[#E8E8ED]",
                )
              }
            >
              <img src={item.icon} alt="icon" />
              {item.title}
            </NavLink>
          )
        })}
      </div>
      <div
        className={cn(
          "flex-1 p-5 ",
          i18n.language === "en" ? "ml-52" : "mr-52",
        )}
      >
        <Outlet />
      </div>
    </div>
  )
}
