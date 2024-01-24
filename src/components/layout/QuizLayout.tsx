import { ContentBox } from "./ContentBox/ContentBox"
import { AdminSidebar } from "./ContentBox/Sidebar/Sidebar"
import { AdminHeader } from "./Header/Header"

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