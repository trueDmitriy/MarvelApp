import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicPage = lazy(() => import("../pages/SingleComicPage"));
const SingleCharPage = lazy(() => import("../pages/SingleCharPage"));
const SinglePage = lazy(() => import("../pages/SinglePage"));


//test
const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route exact path='/' element={<MainPage />} />
                            <Route exact path='/comics' element={<ComicsPage />} />
                            <Route exact path='/characters/:id' element={<SinglePage Component={SingleCharPage} dataType='character' />} />
                            <Route exact path='/comics/:id' element={<SinglePage Component={SingleComicPage} dataType='comic' />} />
                            <Route path='*' element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>

            </div>
        </BrowserRouter>
    )
}

export default App;