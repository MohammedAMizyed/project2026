import Header from "../components/Header"
import { useTranslation } from "react-i18next"
export default function News() {
  const { t } = useTranslation()
  return (
    <div>
      <Header title={t("News")} />
      News
    </div>
  )
}
