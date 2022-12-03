import React from 'react'

import { Route, Redirect } from "react-router-dom"

export default function PrivateRoute({ component: Component, isAuth,handleCloseModal, ...rest }) {
    return <Route {...rest} component={(props) =>


        isAuth ? <Component handleCloseModal={handleCloseModal} {...props} /> : <Redirect to="/login" />

    } />
}
