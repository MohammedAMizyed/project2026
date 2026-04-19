import { useMutation } from "@tanstack/react-query"
import { api } from "../api"
type Data = {
  title_ar: string
  title_en: string
  content_ar: string
  content_en: string
  logo: string
  short_description_ar: string
  short_description_en: string
  publish_date: string
}
const postData = async (data: Data) => {
  const response = await api.post("admin/blogs", data)
  return response.data
}

export const useAddBlog = () => {
  return useMutation({
    mutationFn: postData,
  })
}
