export const EDIT_USER = "EDIT_USER";

// edit_user 函数就是一个 Action Creator

export function edit_user(preload) {
  return { type: EDIT_USER, preload };
}
