import { Button, Textarea, TextInput } from "@mantine/core"
import DropZone from "./DropZone"
import { useForm } from "@mantine/form"
import img from "../assets/profile.jpeg"
import { useTranslation } from "react-i18next"
import { useAddBlog } from "../hooks/useAddBlog"
import { useState } from "react"
export default function AddBlogForm() {
  const { mutate, isPending, isError, isSuccess } = useAddBlog()
  const { t } = useTranslation()
  const [file, setFile] = useState<File | null>(null)
  const form = useForm({
    initialValues: {
      tag: "",
      data: "",
      title: "",
      short_description: "",
      content: "",
    },
    validate: {
      tag: (value: string) => {
        return !value ? t("the tag is requeird") : null
      },
      title: (value: string) => {
        return !value ? t("The name is required") : null
      },
      content: (value: string) => {
        return !value ? t("the content is requeird") : null
      },
      short_description: (value: string) => {
        return !value ? t("the description is required") : null
      },
      data: (value: string) => {
        return !value ? t("the date is requeird") : null
      },
    },
  })
  const handleSubmit = (values: typeof form.values) => {
    console.log(values)
    console.log(file)
    mutate(
      {
        title_ar: values.title,
        title_en: values.title,
        content_ar: values.content,
        content_en: values.content,
        short_description_ar: values.short_description,
        short_description_en: values.short_description,
        publish_date: new Date(values.data).toISOString(),
        logo: String(file), // أو اسم ثابت مثل Postman
      },
      {
        onError(error) {
          console.log(error)
        },
      },
    )
  }
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className="my-5">
        <div className="flex justify-center items-center gap-10">
          <div className="">
            <h3 className="text-[14px] text-[#817C74] my-2 font-medium">
              368*351
            </h3>
            <DropZone
              onDrop={(files) => {
                if (files.length > 0) {
                  setFile(files[0])
                }
              }}
            />
          </div>
          <div className="flex-1">
            <div className="flex gap-5 justify-center items-center">
              <TextInput
                key={form.key("tag")}
                {...form.getInputProps("tag")}
                className="flex-[50%]"
                label="Tag"
                placeholder="Enter Tag"
                styles={{
                  label: {
                    margin: "0 0 8px 0",
                  },
                }}
              />
              <TextInput
                key={form.key("data")}
                {...form.getInputProps("data")}
                label="Date"
                className={"flex-[50%]"}
                placeholder={"Enter User name"}
                styles={{
                  label: {
                    margin: "0 0 8px 0",
                  },
                }}
              />
            </div>
            <TextInput
              key={form.key("title")}
              {...form.getInputProps("title")}
              label="Title"
              placeholder={"Enter your title"}
              className="my-5"
              styles={{
                label: {
                  margin: "0 0 8px 0",
                },
              }}
            />
            <Textarea
              key={form.key("short_description")}
              {...form.getInputProps("short_description")}
              label="Short description"
              placeholder={"Enter Short description"}
              styles={{
                input: {
                  height: 180,
                },
                label: {
                  margin: "0 0 8px 0",
                },
              }}
            />
          </div>
        </div>
        <div>
          <TextInput
            label="Blog Title"
            placeholder={"Enter your title"}
            className="my-5"
            styles={{
              label: {
                margin: "0 0 8px 0",
              },
            }}
          />
          <Textarea
            key={form.key("content")}
            {...form.getInputProps("content")}
            label="Blog Content"
            placeholder={"Enter Blog Content"}
            className="my-5"
            styles={{
              input: {
                height: 200,
              },
              label: {
                margin: "0 0 8px 0",
              },
            }}
          />
        </div>
        <Button
          type={"submit"}
          onError={() => {}}
          w={"90%"}
          className="m-auto block! bg-[#230871]! text-[18px] font-bold "
        >
          {isPending ? (
            <span className="animate-pulse">Adding Blog...</span>
          ) : isSuccess ? (
            <span className="text-green-500">Add Successfuly</span>
          ) : (
            "Add Blog"
          )}
        </Button>
        {isError && (
          <div className="text-red-400 ">
            There is something went wrong please try again later
          </div>
        )}
      </div>
    </form>
  )
}
