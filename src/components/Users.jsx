import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("https://paytm-backend-olive.vercel.app/api/v1/user/bulk?filter=" + filter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            setUsers(response.data.user);
        });
    }, [filter]);

    return (
        <div className="mt-6">
            <h2 className="font-bold text-lg">Users</h2>
            <div className="my-2">
                <input
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="space-y-2">
                {users.map(user => <User key={user._id} user={user} />)}
            </div>
        </div>
    );
}

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-sm rounded-lg hover:shadow-md transition duration-300"> {/* Reduced shadow */}
            <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mr-3">
                    <span className="text-xl font-semibold">{user.firstName[0].toUpperCase()}</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">{user.firstName} {user.lastName}</span>
                </div>
            </div>

            <div className="flex">
                <Button
                    onClick={() => navigate("/send?id=" + user._id + "&name=" + user.firstName)}
                    label="Send Money"
                />
            </div>
        </div>
    );
}
