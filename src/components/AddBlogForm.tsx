import { Button, TextInput } from "@mantine/core"

export default function AddBlogForm() {
  return (
    <div className="my-5">
      <div className="flex justify-center items-center">
        <div className="flex-1/3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          fugit aspernatur laudantium incidunt dolores. Necessitatibus, qui cum
          enim error amet veniam nobis adipisci atque repellendus provident
          maiores architecto expedita itaque.
        </div>
        <div className="flex-2/3">
          <div className="flex gap-5 justify-center items-center">
            <TextInput
              className="flex-[50%]"
              label="Tag"
              placeholder="Enter Tag"
            />
            <TextInput
              label="Date"
              className={"flex-[50%]"}
              placeholder={"Enter User name"}
            />
          </div>
          <TextInput
            label="Title"
            placeholder={"Enter your title"}
            className="my-5"
          />
          <TextInput
            label="Short description"
            placeholder={"Enter Short description"}
            className="my-5"
          />
        </div>
      </div>
      <div>
        <TextInput
          label="Blog Title"
          placeholder={"Enter your title"}
          className="my-5"
        />
        <TextInput
          label="Blog Content"
          placeholder={"Enter Blog Content"}
          className="my-5"
        />
      </div>
      <Button w={"90%"} m={"auto"} className="text-center!">
        Add Blog
      </Button>
    </div>
  )
}
