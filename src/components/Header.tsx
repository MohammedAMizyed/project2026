import React from "react"
import { InputWithButton } from "./InputWithButton"
type Props = {
  title: React.ReactNode | string
}
export default function Header({ title }: Props) {
  return (
    <div className="border-b-1 pb-5 border-[#EBEBEF] flex justify-between items-center">
      <h1 className="text-[20px] font-bold">{title}</h1>
      <InputWithButton />
    </div>
  )
}
