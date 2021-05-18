export const state = () => ({
  isToggledNews: false,
  isToggledAbout: true,
  isToggledAwards: true,
  isToggledMusic: true,
  isToggledDiscography: true,
  isToggledActivism: true,
  isToggledEventsAndTours: true,
  isToggledBooking: true,
  isSignatureToogled: false
});

export const mutations = {
  UPDATE_THE_STORE_NEWS(state, value) {
    state.isToggledNews = value.isToggledNews;
  },
  UPDATE_THE_STORE_ABOUT(state, value) {
    state.isToggledAbout = value.isToggledAbout;
  },
  UPDATE_THE_STORE_AWARDS(state, value) {
    state.isToggledAwards = value.isToggledAwards;
  },
  UPDATE_THE_STORE_MUSIC(state, value) {
    state.isToggledMusic = value.isToggledMusic;
  },
  UPDATE_THE_STORE_DISCOGRAPHY(state, value) {
    state.isToggledDiscography = value.isToggledDiscography;
  },
  UPDATE_THE_STORE_ACTIVISM(state, value) {
    state.isToggledActivism = value.isToggledActivism;
  },
  UPDATE_THE_STORE_EVENTS_AND_TOURS(state, value) {
    state.isToggledEventsAndTours = value.isToggledEventsAndTours;
  },
  UPDATE_THE_STORE_BOOKING(state, value) {
    state.isToggledBooking = value.isToggledBooking;
  },
  UPDATE_THE_STORE_SIGNATURE(state, value) {
    state.isSignatureToogled = value;
  }
};

export const actions = {};

export const getters = {};
