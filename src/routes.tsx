import { Routes, Route } from 'react-router-dom';
import { PageNotFound } from './components/pages/PageNotFound';
import { Home  } from './components/pages/Home';

export default function PathRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    )
}