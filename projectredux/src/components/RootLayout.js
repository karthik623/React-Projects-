import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import { Provider } from "react-redux"
import store from "../store/store"


const RootLayout = () =>{
    return (
        <>
        <Provider store={store}>
        <Navigation />
        <Outlet />
        </Provider>
        </>
    )
}

export default RootLayout