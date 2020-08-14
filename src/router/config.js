import loadable from "@loadable/component"; // react 楼层按需加载

export default [
  {
    path: "/index",
    component: loadable(() => import("@/pages/test_management/lifecycle")),
  }
];
