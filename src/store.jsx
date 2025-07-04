import PortfolioAll from "./Componets/portfolioAll";
import PortfolioLife from "./Componets/PortfolioLife";
import MainLayout from "./layout/MainLayout";
import Abaute from "./rautes/Abaute";
import Blog from "./rautes/Blog";
import Contact from "./rautes/Contact";
import Home from "./rautes/Home";
import Portfolio from "./rautes/Portfolio";
import PortfolioMoments from "./Componets/PortfolioMoments";
import Serevises from "./rautes/Serevises";
import { createBrowserRouter } from "react-router-dom";
import PortfolioNature from "./Componets/PortfolioNature";
import PortfolioTravel from "./Componets/PortfolioTravel";
import PortfolioEducation from "./Componets/PortfolioEducation";
import PortfolioSector from "./Componets/PortfolioSector";
import Advantages from "./Componets/Advantages";
import Advantage1 from "./Componets/Advantage1";
import Advantage2 from "./Componets/Advantage2";
import Advantage3 from "./Componets/Advantage3";
import Advantage4 from "./Componets/Advantage4";
import Advantage5 from "./Componets/Advantage5";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "aboute",
                element: < Abaute />,
            },
            {
                path: "services",
                element: <Serevises />,
                children: [
                    { index: true, element: <Advantage1/> },
                    { path: "one", element: <Advantage2 /> },
                    { path: "two", element: <Advantage3/> },
                    { path: "three", element: <Advantage4 /> },
                    { path: "four", element: <Advantage5 /> }
                ]
            },
            {
                path: "portfolio",
                element: <Portfolio />,
                children: [
                    { index: true, element: <PortfolioAll /> },
                    { path: "portfoliolife", element: <PortfolioLife /> },
                    { path: "portfoliomoments", element: <PortfolioMoments /> },
                    { path: "portfolionature", element: <PortfolioNature /> },
                    { path: "portfoliotravel", element: <PortfolioTravel /> },
                    { path: "portfolioeducation", element: <PortfolioEducation /> },
                    { path: "portfoliosector", element: <PortfolioSector /> }, // ✅ yangi path
                ]
            },

            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "contact",
                element: <Contact />,
            }
        ]
    }
]);

export default router;
