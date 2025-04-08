import Link from "next/link";

export default function Guide() {
    return (
        <div className="flex justify-between mt-20 *:shadow-2xl *:py-3.5 *:px-12 *:bg-[#53c60b] *:text-white *:rounded-md *:text-lg">
            <Link href="/menu">Menu</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/">Discount</Link>
        </div>
    )
}
