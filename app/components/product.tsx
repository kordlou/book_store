

export default function Product(props) {


    return (
        <div className="w-full border h-80 bg-white rounded-lg">
            <div className="h-48 flex justify-center py-4 border-b">
                <img src={"en_book/" + props.book.image}   className="w-28"/>
            </div>
            <div>
                <h3 className="text-sm text-gray-500 m-2 line-clamp-2">{props.book.name}</h3>
                <div className="flex justify-between items-center p-2">
                    <div className="text-sm">
                        <span>$</span>
                        <span className="pl-1">{props.book.price}</span>
                    </div>
                    <div>
                        <div className="bg-red-400 rounded p-1 text-sm text-white">{props.book.discount}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
