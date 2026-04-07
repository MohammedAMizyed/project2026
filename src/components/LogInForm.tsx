import { Button, TextInput } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { MdWavingHand } from "react-icons/md"
import ChangeLang from "./ChangeLang"
import { useForm } from "@mantine/form"
import { useLogIn } from "../hooks/useLogIn"
import { useNavigate } from "react-router-dom"
export default function FormLogIn() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { mutate, isPending, isError, isSuccess } = useLogIn()
  const form = useForm({
    initialValues: {
      name: "",
      password: "",
    },
    validate: {
      name: (value: string) =>
        !value
          ? t("The name is required")
          : value.length < 3
            ? t("The name is too short")
            : null,

      password: (value: string) =>
        value.length < 6 ? t("Password must be at least 6 characters") : null,
    },
  })
  const handleSubmit = (values: typeof form.values) => {
    mutate(
      { password: values.password, mobile: "966508570275" },
      {
        onSuccess: (data) => {
          localStorage.setItem("accessTaken", data.data.token)
          navigate("/")
        },
        onError: (error) => {
          return console.log(error)
        },
      },
    )
  }
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
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Username"
          placeholder={t("Enter User name")}
          key={form.key("name")}
          {...form.getInputProps("name")}
          className="my-5"
        />
        <TextInput
          label={t("password")}
          placeholder={t("Enter Password")}
          type="password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <Button
          loading={isPending}
          type={"submit"}
          fullWidth
          color={"#230871"}
          radius={"8px"}
          m={"55px 0 15px 0"}
        >
          {t("Login")}
        </Button>
        {isError && (
          <div className="text-center my-2 text-[#d90808]">
            {t("There is something went wrong please true again later")}
          </div>
        )}
        {isSuccess && (
          <div className="text-center my-2 text-green-500">
            {t("LogInSuccess")}
          </div>
        )}
      </form>
    </>
  )
}
