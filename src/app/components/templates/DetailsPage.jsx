import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

export default function DetailsPage({ id, name, price, discount, introduction, details, ingredients, recipe }) {
    return (
        <div className="max-w-[1000px] mx-auto pt-24">
            <h2 className="border-b-[3px] border-[#53c60b] mb-12 text-3xl pb-4">Details</h2>
            <div>
                <div className="flex">
                    <img src={`/images/${id}.jpeg`} alt={name} className="w-[300px] rounded-[10px]" />
                    <div className="ml-8">
                        <h3 className="text-[#53c60b] text-lg">{name}</h3>
                        <span className="flex items-center text-gray-600 mt-5 mb-10">
                            <Location />
                            {details[0].Cuisine}
                        </span>
                        <span className="flex items-center">
                            <Dollar />
                            {discount ? (price * (100 - discount)) / 100 : price}$
                        </span>
                        {discount ? (
                            <span className="bg-[#ed4133] text-white py-2.5 flex justify-center mt-5 rounded-md">{discount}$ OFF</span>
                        ) : null}
                    </div>
                </div>
                <div className="my-14 leading-6 text-justify">
                    <p>{introduction}</p>
                </div>
                <div className="mb-14">
                    <h4 className="text-2xl text-[#53c60b] my-6">Details</h4>
                    <ul className="*:flex *:items-center *:my-2.5 *:before:content-['-']">
                        {details.map((detail, index) => (
                            <li key={index}>
                                <p className="text-lg font-semibold mx-2.5">{Object.keys(detail)[0]}: </p>
                                <span className="text-gray-600">{Object.values(detail)[0]}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-14">
                    <h4 className="text-2xl text-[#53c60b] my-6">Ingredients</h4>
                    <ul className="*:flex *:items-center *:my-2.5 *:before:content-['-']">
                        {ingredients.map((item, index) => (
                            <li key={index}>
                                <p className="text-lg font-semibold mx-2.5">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-24">
                    <h4 className="text-2xl text-[#53c60b] my-6">Recipe</h4>
                    {recipe.map((item, index) => (
                        <div key={index} className="flex items-center py-5 px-2.5 text-justify" style={{ backgroundColor: index % 2 ? '#e8ffdb' : '#bcff93' }}>
                            <span className="text-xl mr-3.5 ml-1">{index + 1}</span>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
                <button className="cursor-pointer w-full bg-[#53c60b] text-white p-3.5 text-xl rounded-lg mb-24">Add to Cart</button>
            </div>
        </div>
    )
}