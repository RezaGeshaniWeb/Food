import Link from "next/link";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

export default function Card({ id, name, price, details, discount }) {
    return (
        <div className="flex flex-col w-[300px] shadow mb-10 p-2.5 rounded-lg relative">
            <img src={`images/${id}.jpeg`} alt={name} className="w-full rounded-md" />
            <div className="flex items-center justify-between text-gray-700 text-sm my-5">
                <h4 className="text-[#53c60b] font-semibold text-lg">{name}</h4>
                <div className="flex items-center">
                    <Location />
                    {details[0].Cuisine}
                </div>
            </div>
            <div className="flex items-center">
                <Dollar />
                {
                    discount ? (
                        <span className="text-[#ed4133]">
                            {(price * (100 - discount)) / 100} $
                        </span>
                    ) : (
                        <span>{price} $</span>
                    )
                }
                {
                    discount ? <div className="bg-[#ed4133] text-white p-1 rounded-md border-2 border-white absolute top-3.5 left-3.5">{discount} %</div> : null
                }
            </div>
            <Link href={`/menu/${id}`} className="bg-[#53c60b] text-white block w-full text-center mt-5 py-1.5 rounded-md">See Details</Link>
        </div>
    )
}