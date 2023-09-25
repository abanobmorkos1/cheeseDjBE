import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./components/Index"
import Show from "./components/Show"
import 'milligram'
import { CheesesLoader, ShowCheese } from "./loaders"
import { createCheese, updateCheese, deleteAction} from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={CheesesLoader}/>
            <Route path="cheese/:id" element={<Show/>} loader={ShowCheese}/>
            <Route path="create" action={createCheese}/>
            <Route path="update/:id" action={updateCheese}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
))

export default router