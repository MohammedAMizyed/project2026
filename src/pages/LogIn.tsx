import background from "../assets/Rectangle 240663856.svg"
import logo from "../assets/Group 351.svg"
import FormLogIn from "../components/FormLogIn"
export default function LogIn() {
  return (
    <div className="h-screen relative ">
      <img
        className="w-full h-screen  object-cover "
        src={background}
        alt="background"
      />
      <div className="absolute inset-0 bg-[#100433DE]" />
      <div className=" w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="flex  gap-2 items-center  ">
          <div className="w-[50%] flex justify-center items-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="w-[50%] text-white max-w-[540px] ">
            <FormLogIn />
          </div>
        </div>
      </div>
    </div>
  )
}
