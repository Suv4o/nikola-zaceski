export const state = () => ({
  menuValue: {
    title: "",
    link: ""
  }
});

export const mutations = {
  UPDATE_THE_STORE_MENU(state, value) {
    state.menuValue.title = value.title;
    state.menuValue.link = value.link;
  }
};

export const actions = {};

export const getters = {};
