import { BrowserRouter as Router , Routes , Route, Navigate} from "react-router-dom"
import { Login } from "../pages/login/login"
import { Dashboard } from "../pages/dashboard/dashboard"
import PendingPortal from "../pages/placeholder-portals/pending-portal"
import PortalPage from "../pages/portal-page/portal-page"
import PortalEdit, { EditPage } from "../pages/portal-edit/portal-edit"
import AddPortal from "../pages/add-portal/add-portal"
import AddLocation from "../pages/add-location/add-location"

export function MyRoutes(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route  path="/login" element= {<Login/>} ></Route>
                    <Route  path="/dashboard" element= {<Dashboard/>} >
                    </Route>
                    <Route path="/portal-page" element={<PortalPage/>}></Route>
                    <Route path="/portal-edit/:id" element={<PortalEdit/>}></Route>
                    <Route  path="/dashboard/placeholder-portals" element= {<PendingPortal />} ></Route>
                    <Route  path="portal-edit" element= {<AddPortal />} ></Route>
                    <Route  path="portal/location" element= {<AddLocation    />} ></Route>
                    
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </div>
    )
    
}