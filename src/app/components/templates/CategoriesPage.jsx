"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "../modules/Card";

export default function CategoriesPage({ filteredData }) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [query, setQuery] = useState({ difficulty: '', time: '' })

    const difficulty = searchParams.get('difficulty') || ''
    const time = searchParams.get('time') || ''

    useEffect(() => {
        if (query.difficulty !== difficulty || query.time !== time) {
            setQuery({ difficulty, time })
        }
    }, [])

    const changeHandler = e => {
        setQuery({ ...query, [e.target.name]: e.target.value })
    }

    const searchHandler = () => {
        const queryString = new URLSearchParams(query).toString()
        router.push(`/categories?${queryString}`)
    }

    return (
        <div className="max-w-[1000px] mx-auto pt-24">
            <h2 className="border-b-[3px] border-[#53c60b] pb-2.5 w-fit mb-12 text-3xl">Categories</h2>
            <div className="flex items-center gap-7">
                <select
                    className="w-[150px] h-10 rounded-lg mr-2.5 p-2.5 text-[#48ac0a] outline-none border border-[#48ac0a] shadow-2xl"
                    name="difficulty" value={query.difficulty} onChange={changeHandler}
                >
                    <option value="">Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <select className="outline-none border border-[#48ac0a] w-[150px] h-10 rounded-lg mr-2.5 p-2.5 text-[#48ac0a] shadow-2xl" name="time" value={query.time} onChange={changeHandler}>
                    <option value="">Cooking Time</option>
                    <option value="more">More than 30 min</option>
                    <option value="less">Less than 30 min</option>
                </select>
                <button onClick={searchHandler} className="bg-[#48ac0a] text-white h-[38px] px-5 rounded-lg cursor-pointer">Search</button>
            </div>
            <div className="flex flex-wrap justify-between mt-20">
                {!filteredData.length ? (
                    <img src="/images/search.png" alt="Category" className="mx-auto block w-[280px]" />
                ) : null}
                {filteredData.map((food) => (
                    <Card key={food.id} {...food} />
                ))}
            </div>
        </div>
    )
}
