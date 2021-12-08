import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import AppHeader from '../app-header/app-header'
import ToyPage from '../../pages/toy-page/toy-page'
import ChristmasTreePage from '../../pages/christmas-tree-page/christmas-tree-page'
import StartPage from '../../pages/start-page/start-page'

export default function App () {
    return (
        <div>
            <AppHeader/>

            <Routes>
                <Route path = '/toys' element={<ToyPage />} />
                <Route path = '/tree' element={<ChristmasTreePage />}/>
                <Route path = '/' element={<StartPage />}/>
            </Routes>
        </div>

    )
}