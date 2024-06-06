import { createLazyFileRoute } from '@tanstack/react-router'
import MainHeroSection from "../pages/landing/MainHeroSection/MainHeroSection.tsx";
import MainServiceSection from "../pages/landing/MainServiceSection/MainServiceSection.tsx";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import MainReviewSection from "../pages/landing/MainReviewSection/MainReviewSection.tsx";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <MainHeroSection/>
            <div className='pb-12'/>
            <MainServiceSection/>
            <div className='pb-12'/>
            <MainReviewSection />
            <TanStackRouterDevtools/>
        </>
    )
}
