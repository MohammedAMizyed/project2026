import { useTranslation } from "react-i18next"
import { FaArrowLeft } from "react-icons/fa"
import Header from "../components/Header"
import { Button } from "@mantine/core"
import AddBlogForm from "../components/AddBlogForm"

export default function AddBlog() {
  const { t } = useTranslation()
  return (
    <div>
      <Header
        title={
          <div className="flex justify-center items-center gap-3">
            {" "}
            <Button
              variant="outline"
              className="border-[#817C74]! border!  rounded-[50%]! w-7! h-7! p-0! bg-none!"
            >
              <FaArrowLeft color="#817C74" />
            </Button>
            {t("add new blog")}
          </div>
        }
      />
      <AddBlogForm />
    </div>
  )
}
