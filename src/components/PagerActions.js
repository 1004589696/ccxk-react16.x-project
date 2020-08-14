import $axios from "@/api/api.js";
import store from "./Pager/node_modules/@/store";

export default {
  //导出ActionCreators
  getPagerDataList: function (payload) {
    let {
      pagerReducer: { url, list, fields, page },
    } = store.getState();
    // console.log(payload, url, list, fields, page);
    $axios[url]({
      page: page.currentPage,
      pageSize: page.pageSize,
      ...fields,
    }).then(({ data }) => {
      store.dispatch({ type: "SET_PAGER_LIST" }, data.list);
      store.dispatch(
        { type: "SET_PAGER_PAGE" },
        {
          ...page,
          ...data.page,
        }
      );
    });
  },
};
