import MenuPage from "../components/templates/MenuPage";

export default async function Menu() {
    const res = await fetch(`https://json-server-jade-eta.vercel.app/data`)
    const data = await res.json()

    return <MenuPage data={data} />
}