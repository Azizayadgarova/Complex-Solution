import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// Sahifalar
import Home from "./rautes/Home";
import Abaute from "./rautes/Abaute";
import Blog from "./rautes/Blog";
import Contact from "./rautes/Contact";
import Portfolio from "./rautes/Portfolio";
import Serevises from "./rautes/Serevises";

// Portfolio componentlari
import PortfolioAll from "./Components/PortfolioAll";
import PortfolioLife from "./Components/PortfolioLife";
import PortfolioMoments from "./Components/PortfolioMoments";
import PortfolioNature from "./Components/PortfolioNature";
import PortfolioTravel from "./Components/PortfolioTravel";
import PortfolioEducation from "./Components/PortfolioEducation";
import PortfolioSector from "./Components/PortfolioSector";

// Advantage (xizmatlar) componentlari
import Advantage1 from "./Components/Advantage1";
import Advantage2 from "./Components/Advantage2";
import Advantage3 from "./Components/Advantage3";
import Advantage4 from "./Components/Advantage4";
import Advantage5 from "./Components/Advantage5";

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
