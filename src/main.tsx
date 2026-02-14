import { createRoot } from 'react-dom/client';
import './index.css';
import './external.css';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import Home from './pages/home/page.tsx';
import Realisations from './pages/activites/page.tsx';
import About from './pages/about/page.tsx';
import Contact from './pages/contact/page.tsx';
import MainLayout from './layout/MainLayout.tsx';
import DiseasesLayout from './layout/DiseasesLayout.tsx';
import ProgramAssistance from './pages/assistance_program/page.tsx';
import BreastCancer from './pages/maladies/cancer/page.tsx';
import Blog from './pages/blog/page.tsx';
import Partners from './pages/partners/page.tsx';
import Politique from './pages/politique/page.tsx';
import Condition from './pages/conditions/page.tsx';
import MlaTourRose from './pages/activites/mla_tour/page.tsx';
import MlaTourRose2017 from './pages/activites/mla_tour/2017/page.tsx';
import MlaTourRose2018 from './pages/activites/mla_tour/2018/page.tsx';
import MlaTourRose2019 from './pages/activites/mla_tour/2019/page.tsx';
import MlaTourRose2020 from './pages/activites/mla_tour/2020/page.tsx';
import MlaTourRose2021 from './pages/activites/mla_tour/2021/page.tsx';
import MlaTourRose2022 from './pages/activites/mla_tour/2022/page.tsx';
import MlaTourRose2023 from './pages/activites/mla_tour/2023/page.tsx';
import MlaTourRose2024 from './pages/activites/mla_tour/2024/page.tsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'activites', element: <Realisations /> },
            { path: 'a-propos', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'aide-financiere', element: <ProgramAssistance /> },
            { path: 'cancer-seins', element: <BreastCancer /> },
            { path: 'blog', element: <Blog /> },
            { path: 'partenaires', element: <Partners /> },
            { path: 'politique-confidentialite', element: <Politique /> },
            { path: 'conditions-utilisation', element: <Condition /> },
            {
                path: 'diseases',
                element: <DiseasesLayout />,
                children: [
                    // Ajoute ici les routes internes si tu veux (comme /diseases/diabete etc.)
                ],
            },
            // Routes MLA Tour Rose
            { path: 'activites/mla_tour', element: <MlaTourRose /> },
            { path: 'activites/mla_tour/2017', element: <MlaTourRose2017 /> },
            { path: 'activites/mla_tour/2018', element: <MlaTourRose2018 /> },
            { path: 'activites/mla_tour/2019', element: <MlaTourRose2019 /> },
            { path: 'activites/mla_tour/2020', element: <MlaTourRose2020 /> },
            { path: 'activites/mla_tour/2021', element: <MlaTourRose2021 /> },
            { path: 'activites/mla_tour/2022', element: <MlaTourRose2022 /> },
            { path: 'activites/mla_tour/2023', element: <MlaTourRose2023 /> },
            { path: 'activites/mla_tour/2024', element: <MlaTourRose2024 /> },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
