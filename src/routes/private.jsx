
import AdminDashboard from "../components/AdminDashboard"
import UserProfile from "../pages/UserProfile"
import EnquiryPage from "../pages/admin/Enquiry"
import ProjectPage from "../pages/admin/Project"
import SkillsPage from "../pages/admin/Skills"


const PrivateRoutes = [

  { path: '/app/admindashboard',  name: 'AdminDashboard', component: AdminDashboard },

  { path: '/app/profile', name: 'UserProfile', component: UserProfile },
  { path: '/app/projects', name: 'ProjectPage', component: ProjectPage },
  { path: '/app/skills', name: 'SkillsPage', component: SkillsPage },
  { path: '/app/enquiry', name: 'EnquiryPage', component: EnquiryPage },




]
export default PrivateRoutes