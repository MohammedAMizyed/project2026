import { Button } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { MdOutlineTranslate } from "react-icons/md"

export default function ChangeLang() {
  const { i18n } = useTranslation()
  return (
    <Button
      className="bg-[#58449375]!"
      onClick={() => {
        i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
      }}
    >
      <div className="flex justify-center items-center gap-2">
        {i18n.language === "ar" ? "انجليزي" : "Arabic"}
        <MdOutlineTranslate className="" size={20} />
      </div>
    </Button>
  )
}
