import Link from "next/link";

export default function Banner() {
    return (
        <div className="flex items-center">
            <div className="flex flex-col mt-2.5">
                <h2 className="border-b-[3px] border-[#53c60b] text-lg p-2 w-fit my-5">BotoFood</h2>
                <p className="font-semibold my-4 text-2xl">Food Delivery and Takeout!</p>
                <span className="text-[gray] w-[90%] text-justify">
                    BotoFood is an online food ordering and delivery platform launched by
                    Uber in 2014. Meals are delivered by couriers using cars, scooters,
                    bikes, or on foot.
                </span>
                <Link href="/menu" className="bg-[#53c60b] text-white py-2.5 px-7 w-fit mt-7 rounded-md">See All</Link>
            </div>

            <div className="*:w-[350px] md:*:w-[450px]">
                <img src="/images/banner.png" alt="Food image" />
            </div>
        </div>
    )
}
