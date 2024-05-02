import { createLazyFileRoute } from '@tanstack/react-router'
import MainHeroSection from "../pages/landing/MainHeroSection/MainHeroSection.tsx";
import MainServiceSection from "../pages/landing/MainServiceSection/MainServiceSection.tsx";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <MainHeroSection />
            <MainServiceSection />
            <TanStackRouterDevtools />
        </>

    )
}
