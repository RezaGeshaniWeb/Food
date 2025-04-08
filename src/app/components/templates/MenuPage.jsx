import Card from "../modules/Card";

export default async function MenuPage({ data }) {
    return (
        <div className="max-w-[1000px] mx-auto pt-24">
            <h2 className="border-b-[3px] border-[#53c60b] w-fit font-semibold mb-12 text-3xl">Menu</h2>
            <div className="flex flex-wrap justify-between">
                {data.map(food => <Card key={food.id} {...food} />)}
            </div>
        </div>
    )
}