import { useMutation } from "@tanstack/react-query"
import { api } from "../api"
import type { LogInTypeResponse } from "../types/LogInTypeResponse"

type Data = {
  email: string
  password: string
}
const postData = async (data: Data) => {
  const response = await api.post<LogInTypeResponse>("/guest/admin/login", data)
  return response.data
}

export const useLogIn = () => {
  return useMutation({
    mutationFn: postData,
  })
}
