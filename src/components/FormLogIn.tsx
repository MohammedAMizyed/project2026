import { Button } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { MdWavingHand } from "react-icons/md"
import ChangeLang from "./ChangeLang"

export default function FormLogIn() {
  const { t } = useTranslation()
  return (
    <>
      <div className="flex justify-between">
        <h1 className="flex items-center gap-2 text-[44px] font-bold mb-10">
          {t("Login")}
          <MdWavingHand />
        </h1>
        <div className="">
          <ChangeLang />
        </div>
      </div>
      <form>
        <label className=" mb-2 block">
          {t("userName")}
          <input
            className="w-full bg-[#58449375] rounded-[12px] outline-none px-3 py-2 my-2"
            type="text"
            placeholder={t("Enter User name")}
          />
        </label>
        <label className="block">
          {t("password")}
          <input
            className="w-full bg-[#58449375] rounded-[12px] outline-none px-3 py-2 my-2"
            type="text"
            placeholder={t("Enter Password")}
          />
        </label>
        <Button fullWidth color={"#230871"} radius={"8px"} m={"30px 0"}>
          {t("Login")}
        </Button>
      </form>
    </>
  )
}
