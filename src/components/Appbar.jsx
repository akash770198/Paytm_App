export const Appbar = ({ username }) => {
    return (
        <div className="sticky top-0 z-50 shadow-md bg-white flex justify-between items-center h-14 px-4">
            <div className="flex flex-col justify-center h-full text-xl font-semibold text-gray-800">
                PayTM App
            </div>

            <div className="flex items-center">
                <div className="flex flex-col justify-center h-full mr-4 text-gray-600">
                    {username}
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mx-1 mr-2 shadow">
                    <div className="flex flex-col justify-center h-full text-xl font-bold text-gray-700">
                        {username[0].toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
    );
};
