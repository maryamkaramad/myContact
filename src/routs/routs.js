
import { createBrowserRouter } from 'react-router-dom'
import Index from '../pages/index'
import Contacts from '../pages/contact/Contacts'
import Addcontact from '../pages/Addcontact/Addcontact'
const router = createBrowserRouter([{
    path: "/",
    element: <Index/>,
},
{
    path: "/contacts/:id",
    element: <Contacts/>,
},
{
    path: "/addcontact",
    element: <Addcontact/>,
},

])

export default router