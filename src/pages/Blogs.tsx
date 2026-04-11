import { Button } from "@mantine/core"
import Header from "../components/Header"
import { useTranslation } from "react-i18next"
import { MdAdd } from "react-icons/md"
import { useUserBlogs } from "../hooks/useUserBlogs"
import BlogCard from "../components/BlogCard"
export default function Blogs() {
  const { t } = useTranslation()
  const { data } = useUserBlogs()
  return (
    <div>
      <Header title="Blogs" />
      <div className="flex justify-between items-center my-5">
        <h3>{t("Blogs Details")}</h3>
        <Button variant="primary">
          {" "}
          <div className="flex justify-center items-center gap-1">
            <MdAdd size={25} />
            Add New Blog
          </div>
        </Button>
      </div>
      <div className="flex flex-wrap justify-between  items-stretch gap-5">
        {data?.data.items.data.map((item) => {
          return (
            <div key={item.id} className="basis-[31%]">
              <BlogCard
                title={item.title}
                desc={item.short_description}
                date={item.publish_date}
                // description={item.content}
                img={item.logo}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
