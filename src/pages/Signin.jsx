import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post("https://paytm-backend-olive.vercel.app/api/v1/user/signin", {
        username,
        password
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
      }
    } catch (err) {
      console.log("error: ", err);
      alert(err.response?.data?.message || "Signin failed. Please try again.");
    }
  }


  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />

        <InputBox onChange={(e) => {
          setUsername(e.target.value)
        }} placeholder="akash@gmail.com" label={"Email"} />

        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />

        <div className="pt-4">
          <Button onClick={handleSignin} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}

export default Signin;