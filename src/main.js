import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseCard from "./components/BaseCard.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseSpinner from "./components/BaseSpinner.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueParticles from "vue-particles";

// Import specific icons from the free-regular-svg-icons and free-brands-svg-icons
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocation } from "@fortawesome/free-solid-svg-icons";

// Add the imported icons to the library

const app = createApp(App);

library.add(faFacebook, faLinkedin, faEnvelope, faPhone, faLocation);

app.use(router);
app.use(VueParticles);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
