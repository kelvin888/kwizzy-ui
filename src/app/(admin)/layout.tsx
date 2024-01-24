import { ContentBox } from "components/layout/ContentBox/ContentBox";
import { AdminSidebar } from "components/layout/ContentBox/Sidebar/Sidebar";
import { AdminHeader } from "components/layout/Header/Header";

export default function QuizLayout({
    children,
}: {
    children: React.ReactNode
}) {
    console.log("checking rerender inner");

    return (
        <section className='bg-grayscale-20 relative h-screen  w-screen overflow-x-hidden'>
            <AdminHeader />
            <AdminSidebar />
            <ContentBox>
                {children}
            </ContentBox>
        </section>
    )
}