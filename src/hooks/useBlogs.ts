import { useQuery } from "@tanstack/react-query"
import { api } from "../api"
import type { BlogsResponse } from "../types/BlogsUserTypeResponse"

const fetchingData = async () => {
  const response = await api<BlogsResponse>("admin/blogs")
  return response.data
}

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetchingData(),
  })
}
