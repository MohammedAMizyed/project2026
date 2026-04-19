import Header from "../components/Header"
import { useTranslation } from "react-i18next"
export default function Request() {
  const { t } = useTranslation()
  return (
    <div>
      <Header title={t("Request")} />
      Request
    </div>
  )
}
