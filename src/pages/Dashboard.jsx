import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance"
import { Users } from "../components/Users";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    if(!token){
        return;
    }

    useEffect(() => {

        axios.get("https://paytm-backend-olive.vercel.app/api/v1/user/me", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            setName(response.data.firstName);
        })
    },[])

    useEffect(() => {
        axios.get("https://paytm-backend-olive.vercel.app/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            setBalance(response.data.balance.toFixed(4));
        })
    }, [balance])

    return <div>
        {name && <Appbar username={name}/>}
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}