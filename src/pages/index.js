import React from "react"
import MainLayout from '../components/layout/MainLayout'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import destroySite from '../store/menu/Reducers'
import ReactBreakpoints from 'react-breakpoints'

const store = createStore(destroySite)

const breakpoints = {
    mobile: 320,
    mobileLandscape: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1200,
    desktopLarge: 1500,
    desktopWide: 1920,
  }

export default () => (
    <Provider store={store}>
        <ReactBreakpoints breakpoints={breakpoints}>
            <MainLayout />
        </ReactBreakpoints>
    </Provider>
  )