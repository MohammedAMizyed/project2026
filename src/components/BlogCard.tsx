import { Button } from "@mantine/core"
import { MdEdit } from "react-icons/md"

import { RiDeleteBin6Line } from "react-icons/ri"
import { useDeleteBlog } from "../hooks/useDeleteBlog"
type Props = {
  title: string
  desc?: string
  description?: string
  date: string
  img: string
  num: number
  id: number | string
}
export default function BlogCard({
  title,
  desc,
  description,
  date,
  img,
  num,
  id,
}: Props) {
  const { mutate } = useDeleteBlog()
  return (
    <div className="">
      <div className="border-b-1 p-5 border-[#DFDEDC] flex justify-between gap-2 items-center ">
        <h1>Blog {num}</h1>
        <div className="flex gap-3">
          <div>unHide</div>
          <Button variant={"primary"}>
            <MdEdit />
          </Button>
          <Button
            onClick={() => {
              mutate(id, {
                onSuccess: () => {
                  window.location.reload()
                },
              })
            }}
            variant={"primary"}
          >
            <RiDeleteBin6Line />
          </Button>
        </div>
      </div>

      <div className="p-5">
        <img
          className="rounded-[8px] mb-5 object-fit w-full h-full"
          src={img}
          alt=""
        />
        <div>
          <h3 className={"text-[14px] font-medium "}>{title}</h3>
          <h4 className="text-[#2B261E] text-[16px] font-medium">{desc}</h4>
          <p className="text-[#817C74] text-[14px] font-medium">
            {description}
          </p>
          <h5 className="font-normal text-[14px] py-4">{date}</h5>
        </div>
      </div>
    </div>
  )
}
