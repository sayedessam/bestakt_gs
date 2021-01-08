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
            to="/services/budget"
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
          :src="require('~/revenue1.png')"
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
      title: 'الموازنة التقديرية السنوية',
      taskList: [
        'نعمل على مساعدة إدارة الشركة لتحديد الإيرادات والنفقات المستقبلية من أجل تحسين إدارة ومراقبة الإنفاق وتقييم أداء إدارات الشركة خلال العام المالى. وتبدأ بتحديد الافتراضات والأهداف المالية التي تحددها الإدارة العليا للشركة.',
        'وتتحدد فى الموازنة مقدار الإيرادات والأرباح والتدفقات النقدية ومعدلات النمو وأرباح المنتجات ومجموعات العملاء والفروع. كما تحدد فى الموازنة المخاطر المحتملة وتستخدم كأداة فعالة من أجل السيطرة على كيفية الإنفاق على البنود المختلفة.',
        
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