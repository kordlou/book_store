

export default function Header() {
    return (
        <div className="flex justify-between items-center pt-2 mx-40">
            <div className="flex flex-1 items-center grow">
                <div className="w-auto ml-3">
                    <img src="./images/logo.svg" className="w-16 inline-block" />
                </div>
                <div className="flex grow ml-auto">
                    <input className="w-[35rem] bg-gray-100 rounded p-2" placeholder="Search in store" />
                </div>
            </div>
            <div className="flex items-center justify-end gap-4">
                <button className="border border-[#3e8e89] rounded-lg p-2 text-[#3e8e89]">Sign in</button>
                <button className="border border-[#3e8e89] rounded-lg p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#3e8e89]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
