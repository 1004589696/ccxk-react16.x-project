import { createAction } from "redux-actions";

// createAction  创建action
// createActions 创建多个action

export const CURRENTURL = "CURRENTURL";
export const SAVEPAGER = "SAVEPAGER";
export const SAVEPAGERLIST = "SAVEPAGERLIST";
export const SAVEPAGERFIELD = "SAVEPAGERFIELD";

// savePager()  { type: 'SAVEPAGER' }
export const savePager = createAction(SAVEPAGER);

// savePagerList()  { type: 'SAVEPAGERLIST' }
export const savePagerList = createAction(SAVEPAGERLIST);

// savePagerField()  { type: 'SAVEPAGERFIELD' }
export const savePagerField = createAction(SAVEPAGERFIELD);

//CURRENTURL()  { type: 'CURRENTURL' }
export const currenturl = createAction(CURRENTURL);
