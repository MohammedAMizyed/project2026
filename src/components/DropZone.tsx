import { useState } from "react"
import {
  Dropzone,
  IMAGE_MIME_TYPE,
  type DropzoneProps,
} from "@mantine/dropzone"
import { Button, Group, Text } from "@mantine/core"
import { IconUpload } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"
export default function DropZone(props: Partial<DropzoneProps>) {
  const { t } = useTranslation()
  const [image, setImage] = useState<string | null>(null)

  return (
    <>
      <Dropzone
        className="bg-[#F5F5F7]! flex justify-center items-center !h-[351px] w-[368px] rounded-xl overflow-hidden relative"
        onDrop={(files) => {
          const file = files[0]
          const url = URL.createObjectURL(file)
          setImage(url)
        }}
        accept={IMAGE_MIME_TYPE}
        maxSize={5 * 1024 ** 2}
        {...props}
      >
        {image && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${image})` }}
            />

            {/* 🔥 زر حذف */}
            <div className="absolute top-[50%] right-[50%] p-3 -translate-x-[-50%]! -translate-y-[50%]! bg-[#FFFFFFA6] rounded-[8px] p-1 shadow z-10">
              <div className="flex flex-col items-center justify-center">
                <IconUpload size={32} color="#230871" />
                <Text
                  c="indigo"
                  className="font-medium text-[15px]! text-[#230871]!"
                  size="xl"
                >
                  {t("Reupload")}
                </Text>
              </div>
            </div>
          </>
        )}

        {!image && (
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: "none" }}
          >
            <Dropzone.Idle>
              <div className="flex flex-col items-center justify-center">
                <IconUpload size={32} color="#230871" />
                <Text
                  c="indigo"
                  className="font-medium text-[#230871]!"
                  size="xl"
                >
                  {t("Browse")}
                </Text>
              </div>
            </Dropzone.Idle>
          </Group>
        )}
      </Dropzone>
      {image && (
        <Button
          variant="primary"
          onMouseDown={(e) => {
            e.stopPropagation()
            e.preventDefault()
          }}
          onClick={(e) => {
            e.stopPropagation()
            setImage(null)
          }}
          className=" bg-white rounded-[20px] m-auto! my-2! block! cursor-pointer p-2 px-5 shadow z-10"
        >
          {t("Delete file")}
        </Button>
      )}
    </>
  )
}
