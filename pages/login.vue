<template>
  <v-layout align-center justify-center>
    <v-flex justify-center>
      <v-card tile light>
        <v-toolbar class="d-flex justify-space-around text-center my-3" height="auto" tile elevation="0">
          <div class="mx-auto">
            <v-img contain height="52" class="mx-auto mb-4" :src="logo" alt="E-Booking" />
            <v-toolbar-title class="text-h4 font-weight-black">
             Login
            </v-toolbar-title>
            <v-card-text>Please enter your email and password correctly.</v-card-text>
          </div>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  label="email"
                  dense
                  outlined
                  name="email"
                  prepend-inner-icon="mdi-email"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="password"
                  dense
                  outlined
                  name="password"
                  prepend-inner-icon="mdi-lock"
                />
              </v-col>
            </v-row>
            <v-card-actions>
              <v-divider vertical class="px-1" />
              <v-spacer />
              <v-btn
                color="blue accent-2"
                type="submit"
              >
                <v-icon left>mdi-login</v-icon>
                submit
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>


