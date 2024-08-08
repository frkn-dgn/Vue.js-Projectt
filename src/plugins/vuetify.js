import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css"; // mdi ikonları

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // 'mdi' kullanarak Material Design Icons kullanılır
  },
});
