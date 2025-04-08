import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Instruction from "../modules/Instruction";
import Restrictions from "../modules/Restrictions";

export default function HomePage() {
    return (
        <div className="max-w-[1000px] mx-auto pt-24">
            <Banner />
            <Attributes />
            <Definition />
            <Instruction />
            <Guide />
            <Restrictions />
        </div>
    )
}