import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../api"

const destroyBlog = async (id: string | number) => {
  const response = await api.delete(`admin/blogs/${id}`)
  return response.data
}

export const useDeleteBlog = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: destroyBlog,
    onSuccess: () => {
      queryClient.invalidateQueries()
      console.log("delete successfully")
    },
    onError: (error) => {
      console.log("error on delete", { error })
    },
  })
}
