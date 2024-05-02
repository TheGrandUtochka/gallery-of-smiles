import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from "../components/Header/Header.tsx";
import Wrapper from "../components/Wrapper/Wrapper.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <Wrapper>
                <Header/>
                <div className='pb-12'/>
                <Outlet/>
                <TanStackRouterDevtools/>
            </Wrapper>
        </>
    ),
    notFoundComponent: () => {
        return (
            <div>
                <p>Ошибочка вышла</p>
            </div>
        )
    },
})