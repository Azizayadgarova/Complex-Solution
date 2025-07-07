import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Abaute from "./rautes/Abaute";
import Blog from "./rautes/Blog";
import Contact from "./rautes/Contact";
import Home from "./rautes/Home";
import Portfolio from "./rautes/Portfolio";
import Serevises from "./rautes/Serevises";

// Portfolio components
import PortfolioAll from "./Componets/portfolioAll";
import PortfolioLife from "./Componets/PortfolioLife";
import PortfolioMoments from "./Componets/PortfolioMoments";
import PortfolioNature from "./Componets/PortfolioNature";
import PortfolioTravel from "./Componets/PortfolioTravel";
import PortfolioEducation from "./Componets/PortfolioEducation";
import PortfolioSector from "./Componets/PortfolioSector";

// Advantage components
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
        element: <Abaute />,
      },
      {
        path: "services",
        element: <Serevises />,
        children: [
          { index: true, element: <Advantage1 /> },
          { path: "one", element: <Advantage2 /> },
          { path: "two", element: <Advantage3 /> },
          { path: "three", element: <Advantage4 /> },
          { path: "four", element: <Advantage5 /> },
        ],
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
          { path: "portfoliosector", element: <PortfolioSector /> },
        ],
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
