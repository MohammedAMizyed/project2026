// import { Button } from "@mantine/core"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
// import ChangeLang from "./components/ChangeLang"
import { Routes, Route } from "react-router-dom"
import LogIn from "./pages/LogIn"
import "@mantine/core/styles.css"
import "@mantine/dropzone/styles.css"
import Request from "./pages/Request"
import Blogs from "./pages/Blogs"
import AddBlog from "./pages/AddBlog"
import News from "./pages/News"
import Dashboard from "./components/Dashboard"

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr"
  }, [i18n.language])
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/request" element={<Request />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/news" element={<News />} />
        </Route>{" "}
        <Route path="login" element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
