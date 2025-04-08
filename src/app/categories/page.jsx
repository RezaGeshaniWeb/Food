import CategoriesPage from "../components/templates/CategoriesPage";

export default async function page({ searchParams }) {
  const difficulty = searchParams.difficulty || ''
  const time = searchParams.time || ''

  const res = await fetch(`https://json-server-jade-eta.vercel.app/data`)
  const data = await res.json()

  const filteredData = data.filter(item => {
    const difficultyResult = item.details.filter(detail => detail.Difficulty && detail.Difficulty === difficulty)

    const timeResult = item.details.filter(detail => {
      const cookingTime = detail["Cooking Time"] || ''
      const timeDetail = cookingTime.split(' ')[0]
      if (time === 'less' && timeDetail && +timeDetail <= 30) {
        return detail
      } else if (time === 'more' && +timeDetail > 30) {
        return detail
      }
    })

    if (time && difficulty && timeResult.length && difficultyResult.length) { 
      return item
    } else if (!time && difficulty && difficultyResult.length) {
      return item
    } else if (time && !difficulty && timeResult.length) {
      return item
    }
  })

  return <CategoriesPage filteredData={filteredData} />
}
