import { Button } from "@mantine/core"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import ChangeLang from "./components/ChangeLang"
import { Routes, Route } from "react-router-dom"
import LogIn from "./pages/LogIn"
import Home from "./pages/Home"
function App() {
  const { i18n, t } = useTranslation()

  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr"
  }, [i18n.language])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
      {/* <Button>Hello Mantine 🚀</Button>
      <h1>{t("welcome")}</h1>
      <ChangeLang /> */}
    </>
  )
}

export default App
