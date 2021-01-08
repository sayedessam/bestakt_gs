<template>
  <div class="acct">
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
    >
      <v-card>
        <v-card-title class="secondary">
          <span class="headline white--text">
            {{ title }}
          </span>

          <v-spacer></v-spacer>

          

          <v-btn
            dark
            icon
            to="/services/accounts"
          >
            <v-icon>mdi-page-next</v-icon>
          </v-btn>
        </v-card-title>

        <v-list
          v-for="item in taskList" :key="item.id"
        >
          <v-list-item
          >
            <v-list-item-action>
              <v-icon color="secondary">mdi-human-greeting</v-icon>
            </v-list-item-action>
              {{ item }}
            <v-list-item-content>
              <v-list-item-title>

              </v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>

          <v-divider inset></v-divider>

        </v-list>

        <v-img
       
          align="center"
          :src="require('~/Cover-page.png')"
          :height="this.$vuetify.breakpoint.width > 600 ? 600 : 300"
     
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
  <br>
  </div>
</template>

<script>
export default {
  name: 'Acct',
  data () {
    return {
      title: 'المحاسبة وإمساك الدفاتر والضرائب',
      taskList: [
        'تسجيل جميع القيود المحاسبية حسب المعايير الدولية والمحلية المعتمدة.',
        'إقفال الفترات المالية بعد مطابقة الحسابات.',
        'إصدار القوائم المالية للفترات المحاسبية والحسابات الختامية للسنة المالية.',
        'إعداد الإقرارات الضريبية.',
        'إعداد ملف كامل للمراجع الخارجي.'

      ]
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>