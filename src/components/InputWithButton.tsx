import { IconArrowRight, IconSearch } from "@tabler/icons-react"
import { ActionIcon, TextInput, type TextInputProps } from "@mantine/core"
import { useTranslation } from "react-i18next"
export function InputWithButton(props: TextInputProps) {
  // const theme = useMantineTheme()
  const { t } = useTranslation()

  return (
    <TextInput
      radius="xl"
      size="md"
      className="border-1    rounded-[12px] border-[#DFDEDC] max-w-[340px]! w-full "
      classNames={{
        input: "placeholder:text-[#230871]!",
      }}
      variant="unstyled"
      placeholder={t("Search questions")}
      rightSectionWidth={42}
      leftSection={<IconSearch color={"#230871"} size={18} stroke={1.5} />}
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={"#230871"}
          variant="filled"
          aria-label="Search"
        >
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
      aria-label="Search questions"
      {...props}
    />
  )
}
