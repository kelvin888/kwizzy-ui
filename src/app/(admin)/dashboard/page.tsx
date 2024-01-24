import Image from "next/image";
import ProfileIcon from "assets/images/person.jpg"
import Records from "./Records/Records";
import Achievements from "./Achievements/Achievements";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import { Progress } from "components/Progress/Progress";

export default function Dashboard() {

    return (
        <div>
            <div className="flex items-start gap-6">
                <div className="border-2 border-grayscale-20 rounded-[30px]">
                    <Image className="rounded-[30px] w-[298px]" src={ProfileIcon} alt="profile icon" />
                </div>
                <div className="flex-1 pt-2">
                    <div className="text-[33px] text-grayscale-90 font-poppins font-bold">Kelvin Orhungul</div>
                    <div className="mb-8 text-grayscale-90 text-lg">Bonus booster 24lv</div>
                    <Progress value={50} />
                    <Records />
                </div>
            </div>
            <div className="flex gap-6 mt-20">
                <Achievements />
                <FeaturedCategories />
            </div>
        </div>
    )
}