<template>
  <v-footer
    id="footer"
    color="white"
    width="100vw"
    class="footer pa-0"
  >
    <div
      v-if="scrollUp"
      class="goup"
      @click="$vuetify.goTo(0, {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      })"
    >
      <icons-arrow-top />
    </div>
    <v-container class="pa-4" fluid>
      <v-row class="footer__pre-footer" align="start" justify="start" no-gutters>
        <v-col cols="auto" class="mb-4 pa-4">
          <div class="mb-2 link-icon">
            <v-icon size="16" color="#0e1436" class="mr-2">
              language
            </v-icon>
            <a href="https://www.jbs.cam.ac.uk/ccaf" target="_blank">
              https://www.jbs.cam.ac.uk/ccaf
            </a>
          </div>
          <div class="mb-2 link-icon">
            <v-icon size="16" color="#0e1436" class="mr-2">
              email
            </v-icon>
            <a href="mailto:ccaf@jbs.cam.ac.uk">
              ccaf@jbs.cam.ac.uk
            </a>
          </div>
          <div class="link-icon">
            <v-icon size="16" color="#0e1436" class="mr-2">
              place
            </v-icon>
            10 Trumpington Street
            <div class="ml-7">
              Cambridge
            </div>
            <div class="ml-7 mb-2">
              CB2 1QA, UK
            </div>
          </div>
          <div class="ml-7">
            <v-row>
              <v-col>
                <a href="https://www.linkedin.com/company/cambridge-centre-for-alternative-finance" target="_blank">
                  <icons-socialLinkedin class="mr-2 hover hover-linkedin" style="width: 24px; height: 24px;" />
                </a>
                <a href="https://twitter.com/CambridgeAltFin" target="_blank">
                  <icons-socialTwitter class="hover hover-twitter" style="width: 24px; height: 24px;" />
                </a>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="auto" class="mb-4 pa-4">
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
            <img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg" />
          </a><br />
          <p style="font-size: 12px; max-width: 280px">
            This work is licensed under a
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
            </a>
          </p>
        </v-col>
        <v-spacer class="hidden-sm-and-down" />
        <v-col cols="auto" class="pa-4">
          <div class="mb-2" style="font-size: 16px; height: 20px">
            <strong>
              Supported by:
            </strong>
          </div>
          <a href="https://www.gov.uk/government/organisations/foreign-commonwealth-development-office" target="_blank">
            <img src="https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/sponsors%2FAID.webp?alt=media&token=520c95b9-b895-4d3b-8060-6d4b09de3c02" width="92" height="101" alt="UK AID">
          </a>
        </v-col>
      </v-row>
      <v-row class="footer__main-footer" align="center" :justify="$vuetify.breakpoint.smAndDown ? 'center' : 'space-between'" no-gutters>
        <v-col cols="auto">
          <a :href="`https://${env}ccaf.io/privacy_policy`">
            Privacy Policy
          </a>
        </v-col>
        <v-col cols="auto">
          <span>Cambridge Centre for Alternative Finance ©&nbsp;{{ ' ' + new Date().getFullYear() }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      env: '',
      scrollUp: false
    }
  },
  computed: {
  },
  mounted () {
    const isClientSide = typeof window !== 'undefined'
    if (isClientSide) {
      this.env = process.env.ENV === 'demo' ? 'demo.' : ''
      window.onscroll = () => {
        this.scrollUp = (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
        const sidebar = document.getElementById('sidebar')
        const menu = document.getElementById('sidebar__menu')
        const footer = document.getElementById('footer')
        if (menu && sidebar && footer) {
          const sidebarHeight = window.innerHeight < (menu.getBoundingClientRect().height + 72) ? window.innerHeight - 72 : menu.getBoundingClientRect().height
          const footerTop = footer.getBoundingClientRect().top
          const sidebarTop = menu.getBoundingClientRect().top
          const scrollTop = document.body.scrollTop
          let topPosition = Math.max(72, sidebarTop - scrollTop)
          if (scrollTop + sidebarHeight + 72 > footerTop) {
            topPosition = Math.min(topPosition, footerTop - scrollTop - sidebarHeight)
          }
          sidebar.style.top = topPosition + 'px'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .goup{
    cursor: pointer;
    padding: 10px;
    background-color: #292829;
    width: 40px;
    height: 40px;
    position: fixed;
    right: 10px;
    bottom: 50px;
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
    &__pre-footer{
      padding: 12px 63px 0;
      border-top: 1px rgba(0,0,0,.12) solid;
      .link-icon:hover{
        i {
          color: #FFB71A !important;
        }
      }
    }
    &__main-footer{
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
  }
  @media screen and (max-width: 960px) {
    .footer {
      &__pre-footer{
        padding: 28px 8px;
      }
      &__main-footer{
        padding: 0 20px;
        height: 90px;
      }
    }
  }
</style>
