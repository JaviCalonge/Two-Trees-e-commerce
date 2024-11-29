<script setup>
import logo from "../assets/logo-hexagon.svg";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, signOut } from "firebase/auth";

const router = useRouter();
const showModalIn = ref(false);
const showModalOut = ref(false);
const message = ref("");
const email = ref("");

const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
});

onMounted(async () => {
  const auth = getAuth();

  if (isSignInWithEmailLink(auth, window.location.href)) {
    const storedEmail = window.localStorage.getItem("emailForSignIn");
    if (storedEmail) {
      await signInWithEmailLink(auth, storedEmail, window.location.href);
      showModalIn.value = true;
      message.value = "Successfully signed in!";
      window.localStorage.removeItem("emailForSignIn");
      router.push({ name: "products" });
    }
  }
});

async function signIn() {
  if (!email.value) {
    return;
  }
  const auth = getAuth();
  const actionCodeSettings = {
    url: "https://two-trees-e-commerce.onrender.com/products",
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email.value, actionCodeSettings);
    message.value = "A login link was sent to your email";
    showModalIn.value = true;
    window.localStorage.setItem("emailForSignIn", email.value);
    setTimeout(() => {
      closeModal();
    }, 1000);
  } catch (err) {
    console.error("Error sending email link:", err);
  }
}

function signingOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      message.value = "You have successfully signed out.";
      showModalOut.value = true;
      setTimeout(() => {
        closeModal();
      }, 1000);
    })
    .catch((err) => {
      console.error("Error signing out:", err);
    });
}

function openModalIn() {
  showModalIn.value = true;
}

function openModalOut() {
  showModalOut.value = true;
}

function closeModal() {
  showModalIn.value = false;
  showModalOut.value = false;
  message.value = "";
}
</script>

<template>
  <div class="nav-bar">
    <RouterLink :to="{ name: 'products' }" class="products-link">
      <div class="logo-wrap">
        <img :src="logo" alt="logo" />
      </div>
    </RouterLink>
  </div>
  <div class="nav-buttons-wrap">
    <button v-if="!props.user" @click="openModalIn" class="sign-in-out">
      Sign in
    </button>
    <button v-if="props.user" @click="openModalOut" class="sign-in-out">
      Sign Out
    </button>
    <RouterLink :to="{ name: 'cart' }">
      <button class="btn-cart">Shopping Cart</button>
    </RouterLink>
  </div>

  <!-- Modal Log In -->
  <div v-if="showModalIn" class="modal-overlay" role="dialog" aria-labelledby="modal-title-in">
    <div class="modal-content">
      <h2 id="modal-title-in" v-if="!message">Please enter your email to sign in</h2>
      <h2 v-else>{{ message }}</h2>
      <div v-if="!message">
        <input v-model="email" type="email" placeholder="Enter your email" class="email-input" />
        <div class="modal-buttons">
          <button class="modal-button" @click="signIn">Log In</button>
          <button class="modal-button" @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Log Out -->
  <div v-if="showModalOut" class="modal-overlay" role="dialog" aria-labelledby="modal-title-out">
    <div class="modal-content">
      <h2 id="modal-title-out" v-if="!message">Hope to see you soon</h2>
      <div v-else>
        <h2>{{ message }}</h2>
        <div v-if="message === 'You have successfully signed out.'">
          <button class="modal-button" @click="closeModal">OK</button>
        </div>
      </div>
      <div v-if="!message">
        <button class="modal-button" @click="signingOut">Log Out</button>
        <button class="modal-button" @click="closeModal">Cancel</button>
      </div>
    </div>
  </div>
</template>


<!-- <script setup>
import logo from "../assets/logo-hexagon.svg";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink,
  signInWithEmailLink, signOut } from "firebase/auth";

const route = useRoute();
const router = useRouter();
const showModalIn = ref(false);
const showModalOut = ref(false);
const message = ref("");
const email = ref("");

const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
});

// Cuando se monta el componente, chequea si se está accediendo desde un link de autenticación y, si es así, inicia sesión
onMounted(async () => {
  const auth = getAuth();

  if (isSignInWithEmailLink(auth, window.location.href)) {
    const email = window.localStorage.getItem("emailForSignIn");
    await signInWithEmailLink(auth, email, window.location.href);
    showModalIn.value = true;
    message.value = "Successfully signed in!";
    window.localStorage.removeItem("emailForSignIn");
    router.push({ name: "products" });
  }
});

// Función para enviar el link de inicio de sesión
async function signIn() {
  if (!email.value) {
    return;
  }
  const auth = getAuth();
  const actionCodeSettings = {
    url: "https://two-trees-e-commerce.onrender.com/products",
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email.value, actionCodeSettings);
    message.value = "A login link was sent to your email";
    showModalIn.value = true;
    window.localStorage.setItem("emailForSignIn", email.value);
    setTimeout(() => {
      closeModal();
    }, 1000);
  } catch (err) {
    console.error("Error sending email link:", err);
  }
}

function signingOut() {
  const auth = getAuth();
  signOut(auth).then(() => {
    message.value = 'You have successfully signed out.';
    showModalOut.value = true;
    setTimeout(() => {
      closeModal();
    }, 1000);
  });
}

// Funciones para abrir y cerrar modales
function openModalIn() {
  showModalIn.value = true;
}
function openModalOut() {
  showModalOut.value = true;
}
function closeModal() {
  showModalIn.value = false;
  showModalOut.value = false;
  message.value = "";
}

</script>

<template>
    <div class="nav-bar">
      <RouterLink :to="{ name: 'products' }" class="products-link">
        <div class="logo-wrap">
          <img :src="logo" alt="logo" />
        </div>
      </RouterLink>
    </div>
    <div class="nav-buttons-wrap">
      <button v-if="!props.user" @click="openModalIn" class="sign-in-out">
          Sign in
        </button>
      <button v-if="props.user" @click="openModalOut" class="sign-in-out">
        Sign Out
      </button>
      <RouterLink :to="{ name: 'cart' }">
        <button class="btn-cart">Shopping Cart</button>
      </RouterLink>
    </div>

     Modal Log In
    <div v-if="showModalIn" class="modal-overlay">
      <div class="modal-content">
        <h2 v-if="!message">Please enter your email to sign in</h2>
        <h2 v-else>{{ message }}</h2>
        <div v-if="!message">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="email-input"
          />
          <div class="modal-buttons">
            <button class="modal-button" @click="signIn">Log In</button>
            <button class="modal-button" @click="closeModal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    Modal Log Out
  <div v-if="showModalOut" class="modal-overlay">
    <div class="modal-content">
      <h2 v-if="!message">Hope to see you soon</h2>
      <div v-else>
        <h2>{{ message }}</h2>
        <div v-if="message === 'You have successfully signed out.'">
          <button
            class="modal-button"
            @click="closeModal"
           >
            OK
          </button>
        </div>
      </div>
        <div v-if="!message">
         <button
            class="modal-button"
            @click="signingOut"
          >
            Log Out
          </button>
          <button
            class="modal-button"
            @click="closeModal"
          >
            Cancel
          </button>
        </div>
    </div>
  </div>
</template> -->
