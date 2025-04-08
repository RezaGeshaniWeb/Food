import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";

export default function Attributes() {
  return (
    <div className="mt-28">
      <h3 className="text-2xl text-[#53c60b] my-6">Why us?</h3>
      <div className="flex justify-between *:w-[150px] *:rounded-[10px] *:shadow-2xl *:text-center *:flex *:flex-col *:items-center *:pt-6 *:pb-5 *:px-5 *:mt-5">
        <div>
          <Fast />
          <p className="font-bold mt-5">Fast</p>
        </div>
        <div>
          <Food />
          <p className="font-bold mt-5">Best</p>
        </div>
        <div>
          <Choice />
          <p className="font-bold mt-5">Your Choice</p>
        </div>
        <div>
          <Clock />
          <p className="font-bold mt-5">24-7</p>
        </div>
      </div>
    </div>
  )
}