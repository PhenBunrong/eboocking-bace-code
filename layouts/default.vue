<template>
  <v-app dark>
    <v-system-bar
      window
      fixed
      app
      dark
      color="red lighten-2"
      class="justify-center"
    >
      <v-icon>mdi-email</v-icon>
      <v-card-subtitle class="pa-0"> </v-card-subtitle>
    </v-system-bar>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-list nav tile>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-ticket-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mb-2" />
        <template v-for="(item, i) in items">
          <v-divider v-if="item.divider" :key="i" class="py-1" />
          <template v-if="item.canView">
            <v-list-item :key="i" :to="item.to">
              <v-tooltip right content-class="v-tooltip__right" nudge-right="15">
                <template #activator="{ on, attrs }">
                  <v-list-item-action v-bind="attrs" v-on="on">
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <span>{{ item.title }}</span>
              </v-tooltip>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed flat app color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn v-if="drawer" icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid class="grey lighten-4 h-full">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
const items = computed(() => [
  {
    icon: "mdi-apps",
    title: "Welcome",
    canView: true,
    to: "/",
  },
  {
    icon: "mdi-chart-bubble",
    title: "Inspire",
    canView: true,
    to: "/inspire",
  },
  {
    icon: "mdi-login",
    title: "Login",
    canView: true,
    to: "/login",
  },
  {
    icon: "mdi-chart-line",
    canView: false,
  },
]);
</script>

<script lang="ts">
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "E-Boocking",
    };
  },
};
</script>
