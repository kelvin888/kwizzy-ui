import Image from "next/image";
import ProfileIcon from "assets/images/person.jpg"
import Records from "./Records/Records";

export default function Dashboard() {

    return (
        <div>
            <div className="flex items-start gap-6">
                <div className="border-2 border-grayscale-20 rounded-md">
                    <Image className="rounded-md w-[220px]" src={ProfileIcon} alt="profile icon" />
                </div>
                <div className="flex-1">
                    <div className="text-[33px] text-grayscale-90 font-poppins font-bold">Kelvin Orhungul</div>
                    <div className="mb-8 text-grayscale-90 text-lg">Bonus booster 24lv</div>
                    <div className="w-full bg-grayscale-30 rounded-[30px] h-3 mb-10">
                        <div className="bg-grayscale-40 rounded-[30px] text-xs h-full leading-none py-1 text-center w-[45%]">&nbsp;</div>
                    </div>
                    <Records />
                </div>
            </div>
            <div className="flex gap">
                <div>left</div>
                <div>right</div>
            </div>
        </div>
    )
}