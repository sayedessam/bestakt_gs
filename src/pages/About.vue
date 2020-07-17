<template>
  <Layout>
  <v-container>
    <v-card color="grey lighten-3" outlined elevation="5">
        
         <v-card-title>
           <h1 class= "secondary--text">
            عنا
            </h1>
         </v-card-title>
         <v-card-text>
          <p>
                نحن نساعد الشركات التجارية فى المنطقة العربية على النمو وتوفير المصروفات التشغيلية والوقت المطلوب للتركيز على النمو فى الأغراض الأساسية للأعمال.
          </p>

          <p >
          خبراء بست تاكت والمؤسسين مجموعة من المدراء التنفيذيين كانوا يعملون بشركات متعددة الجنسيات وشركات كبرى بمنطقة الخليج العربي وشمال إفريقيا.
          </p>
          <p>
          نحن فى خدمة الشركات التجارية للاستعانة بمصادر
           خارجية في مجالات مختلفة منها:



              </p>
              <ul v-for="(n,i) in items" :key="i" class="services"
              
              >
                <li>
                  <v-icon color="purple" left
                  class="mx-2"
                  large
                  >
                     {{ icons[i] }}
                  </v-icon>  
                  
                  {{ n }} 


                </li>
              </ul>
              <br>
              <div class="mx-1 text-center d-block">
                <span
                v-for="(n,i) in icons" :key="i"
                class="mx-1"
                >
                  <v-icon color="purple">
                    {{ n }}
                  </v-icon>
                </span>
              </div>
              <br>
              <hr>
              <br>
               <h2 class="text-center secondary--text">
     الإحترافية - السرعة - الدقة - أسعار في المتناول
   </h2>
            
         </v-card-text>
     
    
      
    </v-card>
   </v-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'عنا'
  },
  data() {
    return {
      items: [
        'مؤشرات قياس أداء الشركة أو المشروع',
        'الموازنات التقديرية',
        'المشتريات',
        'مراقبة المخزون',
        'إصدار فواتير العملاء',
        'المحاسبة بنظام المعايير الدولية وإمساك الدفاتر',
        'إدارة النقد والحسابات البنكية',
        'إصدار القوائم المالية',
        'التقارير الإدارية',
        'تقييم المخاطر وكيفية مواجهتها',
        ' المرتبات وسجلات العاملين',
        'الإجراءات والسياسات',
        'بالإضافة إلى الإستشارات المجانية للمشتركين'
      ],
      icons:
      [
        'mdi-chart-bar',
        'mdi-diamond-stone',
        'mdi-cart-plus',
        'mdi-storefront',
        'mdi-note-outline',
        'mdi-bookshelf',
        'mdi-cash-multiple',
        'mdi-file-table-outline',
        'mdi-briefcase-account',
        'mdi-cancel',
        
        'mdi-human-handsup',
        'mdi-clipboard-check-multiple-outline',
        'mdi-head-cog-outline',
        'mdi-bugle',
        
        'mdi-city-variant-outline',
        'mdi-chart-bell-curve',
        'mdi-chart-line',
        
        'mdi-calendar-account',
        
        'mdi-truck-fast',
        'mdi-truck-outline',
        'mdi-tablet-ipad',
        
        'mdi-glasses',
        'mdi-gauge',
        'mdi-doctor',
        
        'mdi-do-not-disturb',
        'mdi-account-tie',
        
      ]
    }
  }
}
</script>

<style scoped>
  .about {
    margin-top: 60px;
  }

  .services {
    margin-right: 10px;
  }

  p, span, li {
    font-size: 16px; 
    font-weight: bold;
  }

  li {
    list-style-type: none;
    line-height: 1.3;
  }
</style>