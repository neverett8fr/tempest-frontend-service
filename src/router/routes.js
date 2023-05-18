import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Analytics = () => import(/* webpackChunkName: "dashboard" */"@/pages/Analytics.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
// const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
// const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Data = () => import(/* webpackChunkName: "common" */ "@/pages/Data.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/data",
    children: [
      {
        path: "analytics",
        name: "analytics",
        component: Analytics
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      // {
      //   path: "notifications",
      //   name: "notifications",
      //   component: Notifications
      // },
      // {
      //   path: "icons",
      //   name: "icons",
      //   component: Icons
      // },
      {
        path: "data",
        name: "data",
        component: Data
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
