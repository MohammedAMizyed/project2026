import { Button } from "@mantine/core"
import Header from "../components/Header"
import { useTranslation } from "react-i18next"
import { MdAdd } from "react-icons/md"
import { useBlogs } from "../hooks/useBlogs"
import BlogCard from "../components/BlogCard"
import { Link } from "react-router-dom"
import ChangeLang from "../components/ChangeLang"
export default function Blogs() {
  const { t, i18n } = useTranslation()
  const { data, isLoading } = useBlogs()
  return (
    <div>
      <Header title={t("Blogs")} />
      <div className="flex justify-between items-center my-5">
        <h3>{t("Blogs Details")}</h3>
        <Link to={"/blogs/add"}>
          <Button variant="primary">
            {" "}
            <div className="flex justify-center items-center gap-1">
              <MdAdd size={25} />
              {t("Add New Blog")}
            </div>
          </Button>
        </Link>
      </div>
      <ChangeLang />
      <div className="flex flex-wrap justify-between  items-stretch gap-5">
        {data?.data.items.data.map((item, index) => {
          return (
            <div
              key={item.id}
              className="basis-[31%] border-[#EBEBEF] border rounded-[12px]"
            >
              <BlogCard
                title={i18n.language === "en" ? item.title_en : item.title_ar}
                desc={
                  i18n.language === "en"
                    ? item.short_description_en
                    : item.short_description_ar
                }
                date={item.publish_date}
                // description={item.content}
                img={item.logo}
                num={index + 1}
                id={item.id}
              />
            </div>
          )
        })}
      </div>
      {isLoading && <div className="animate-pulse">Loading...</div>}
    </div>
  )
}
