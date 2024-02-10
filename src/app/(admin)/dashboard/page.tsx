"use client"
import Image from "next/image";
import ProfileIcon from "assets/images/person.jpg"
import Records from "./Records/Records";
import Achievements from "./Achievements/Achievements";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import { usePathname, useRouter } from "next/navigation";
import { ProgressBar } from "components/progressBar/ProgressBar";

export default function Dashboard() {
    const path = usePathname()

    return (
        <div className="p-5">
            <div className="flex items-start gap-6">
                <div className="border-2 border-grayscale-20 rounded-[1.875rem] hidden xl:block">
                    <Image className="rounded-[1.875rem] w-[18.6rem]" src={ProfileIcon} alt="profile icon" />
                </div>
                <div className="flex-1 pt-2">
                    <div className="text-[2rem] text-grayscale-90 font-poppins font-bold">Kelvin Orhungul</div>
                    <div className="mb-8 text-grayscale-90 text-lg">Bonus booster 24lv</div>
                    <ProgressBar value={50} />
                    <Records />
                </div>
            </div>
            <div className="flex gap-6 mt-20 flex-wrap">
                <Achievements />
                <FeaturedCategories />
            </div>
        </div>
    )
}