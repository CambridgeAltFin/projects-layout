<template>
  <v-footer id="footer" color="white" width="100vw" class="footer pa-0">
    <div
      v-if="scrollUp"
      class="goup"
      @click="
        goTo(0, {
          duration: 300,
          offset: 0,
          easing: 'easeInOutCubic'
        })
      "
    >
      <v-icon size="18" color="#FFB71A" icon="mdi-arrow-up"> </v-icon>
    </div>
    <v-container fluid>
      <div class="footer__pre-footer" align="start" justify="start" no-gutters>
        <div class="footer__info">
          <div class="footer__pre-links mb-4 pa-4" cols="auto">
            <a
              class="footer__link mb-2 link-icon"
              :href="webLink"
              target="_blank"
            >
              <v-icon size="16" color="#0e1436" class="mr-2" icon="mdi-web" />
              <p>{{ webLink }}</p>
            </a>
            <a class="footer__link mb-2 link-icon" :href="`mailto:${email}`">
              <v-icon size="16" color="#0e1436" class="mr-2" icon="mdi-email" />
              <p>{{ email }}</p>
            </a>
            <a
              :href="locationLink"
              class="footer__link footer__link--location mb-2 link-icon"
            >
              <v-icon
                size="16"
                color="#0e1436"
                class="mr-2"
                icon="mdi-map-marker"
              >
              </v-icon>
              <p>{{ location }}</p>
            </a>
            <div class="ml-7">
              <v-row>
                <v-col>
                  <a
                    v-if="linkedinLink"
                    class="link-icon"
                    :href="linkedinLink"
                    target="_blank"
                  >
                    <v-icon
                      size="24"
                      color="#0e1436"
                      class="mr-2"
                      icon="mdi-linkedin"
                    >
                    </v-icon>
                  </a>
                  <a
                    v-if="twitterLink"
                    class="link-icon"
                    :href="twitterLink"
                    target="_blank"
                  >
                    <v-icon
                      size="24"
                      color="#0e1436"
                      class="mr-2"
                      icon="mdi-twitter"
                    >
                    </v-icon>
                  </a>
                  <a
                    v-if="facebookLink"
                    class="link-icon"
                    href="facebookLink"
                    target="_blank"
                  >
                    <v-icon
                      size="24"
                      color="#0e1436"
                      class="mr-2"
                      icon="mdi-facebook"
                    >
                    </v-icon>
                  </a>
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="footer__pre-commons mb-4 pa-4" cols="auto">
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
            >
              <img
                alt="Creative Commons License"
                style="border-width: 0"
                src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg"
              /> </a
            ><br />
            <p style="font-size: 12px; max-width: 280px">
              This work is licensed under a
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                style="color: #262b4a"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International License
              </a>
            </p>
          </div>
        </div>
        <slot name="supported" />
      </div>
      <v-row
        class="footer__main-footer"
        align="center"
        :justify="smAndDown ? 'center' : 'space-between'"
        no-gutters
      >
        <v-col :class="{'footer-privacy': smAndDown}" cols="auto">
          <a :href="`https://${env}ccaf.io/privacy_policy`"> Privacy Policy </a>
        </v-col>
        <v-col cols="auto">
          <span
            >Cambridge Centre for Alternative Finance ©&nbsp;{{
              ' ' + new Date().getFullYear()
            }}</span
          >
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import {defineProps, ref, onMounted} from 'vue';
import {useDisplay, useGoTo} from 'vuetify';

const goTo = useGoTo();

const {smAndDown} = useDisplay();

defineProps({
  webLink: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  locationLink: {
    type: String,
    default: ''
  },
  env: {
    type: String,
    default: ''
  },
  linkedinLink: {
    type: String,
    default: ''
  },
  twitterLink: {
    type: String,
    default: ''
  },
  facebookLink: {
    type: String,
    default: ''
  }
});

const scrollUp = ref(false);

onMounted(() => {
  const isClientSide = typeof window !== 'undefined';
  if (isClientSide) {
    window.onscroll = () => {
      scrollUp.value =
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
      const sidebar = document.getElementById('sidebar');
      const menu = document.getElementById('sidebar__menu');
      const footer = document.getElementById('footer');
      if (menu && sidebar && footer) {
        const sidebarHeight =
          window.innerHeight < menu.getBoundingClientRect().height + 72
            ? window.innerHeight - 72
            : menu.getBoundingClientRect().height;
        const footerTop = footer.getBoundingClientRect().top;
        const sidebarTop = menu.getBoundingClientRect().top;
        const scrollTop = document.body.scrollTop;
        let topPosition = Math.max(72, sidebarTop - scrollTop);
        if (scrollTop + sidebarHeight + 72 > footerTop) {
          topPosition = Math.min(
            topPosition,
            footerTop - scrollTop - sidebarHeight
          );
        }
        sidebar.style.top = topPosition + 'px';
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.goup {
  cursor: pointer;
  padding: 10px;
  background-color: #292829;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 10px;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}
.footer {
  z-index: 6 !important;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &__pre-footer {
    display: flex;
    align-items: center;
    padding: 12px 63px 0;
    border-top: 1px rgba(0, 0, 0, 0.12) solid;
    @media (width < 960px) {
      flex-direction: column;
    }
  }
  &__main-footer {
    a {
      color: #fff !important;
      font-size: 14px;
    }
    span {
      color: #fff;
      font-size: 14px;
    }
    padding: 0 75px;
    background: #292829;
    height: 45px;
  }
  &__info {
    display: flex;
    @media (width < 600px) {
      flex-direction: column;
      align-items: center;
    }
  }
}
.link-icon:hover {
  i {
    color: #ffb71a !important;
  }
}
.link-icon__location {
  max-width: 250px;
}

@media screen and (max-width: 960px) {
  .footer {
    &__pre-footer {
      padding: 28px 8px;
    }
    &__main-footer {
      padding: 0 20px;
      height: 90px;
    }
  }
}
.footer-privacy {
  margin-right: 20px;
}
.footer__link {
  display: flex;
  text-decoration: none;
  color: $base-color;
  i{
    margin-top: 5.5px;
  }
  &--location {
    max-width: 250px;
  }

  &:hover {
    text-decoration: none !important;
    p {
      text-decoration: underline;
    }
  }
}
</style>
<style lang="scss">
.v-footer {
  .v-container {
    padding: 0;
  }
}
</style>
