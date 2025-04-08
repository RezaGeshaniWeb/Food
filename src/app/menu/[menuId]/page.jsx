import DetailsPage from "@/app/components/templates/DetailsPage"
import { notFound } from "next/navigation"

export default async function Details({ params }) {
    const res = await fetch(`https://json-server-jade-eta.vercel.app/data/${params.menuId}`)
    const food = await res.json()

    if (!food.id) notFound()

    return <DetailsPage {...food} />
}

export async function generateStaticParams() {
    const res = await fetch(`https://json-server-jade-eta.vercel.app/data`)
    const data = await res.json()

    return data.map(food => ({
        menuId: food.id.toString()
    }))
}