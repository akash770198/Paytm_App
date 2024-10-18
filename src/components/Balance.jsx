export const Balance = ({ value }) => {
    return (
        <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
            <div className="font-bold text-xl text-gray-800">
                Your balance
            </div>
            <div className="font-semibold ml-4 text-xl text-green-600">
                Rs {value}
            </div>
        </div>
    );
};
