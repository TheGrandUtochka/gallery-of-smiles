import Wrapper from "./components/Wrapper/Wrapper.tsx";
import Header from "./components/Header/Header.tsx";
import MainHeroSection from "./components/MainHeroSection/MainHeroSection.tsx";
import MainServiceSection from "./components/MainServiceSection/MainServiceSection.tsx";

export default function App() {
    return (
        <Wrapper>
            <Header />
            <MainHeroSection />
            <MainServiceSection />
        </Wrapper>
    )
}
