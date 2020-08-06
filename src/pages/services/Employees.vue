
<template>
  <Layout>
    <v-container app>
  
    <h1 class="center">
إدارة شئون الموظفين والمرتبات الشهرية  </h1>
   <h3 class="center red--text">
    خصم 30%
    <v-icon color="secondary">mdi-tag-off-outline</v-icon>
      لمدة محدودة - 5.5 دولار أمريكى/موظف بالشهر مع العقود السنوية 
      <span class="text-decoration-line-through">
      بدلاً من 8 دولار أمريكي
      </span>
      </h3>
      <br>
      <g-image alt="" 
				src="~/H2R-min.png" fit="contain" style="width: 100%" />
      <v-card outlined elevation="5" >
        <v-card-title class="font-weight-bold secondary--text">
          توصيات خبراء بست تاكت (BesTakt) رفع إنتاجية العاملين 
        </v-card-title>
        
        <v-card-text class="mr-5">
          <ol  class="font-weight-bold">
            <li  v-for="(i,n) in advices" :key="n">
              {{ i }}
            </li>
          </ol>
        </v-card-text>
      </v-card>
  <br>
 <g-image alt="" 
				src="~/employee-productivity-min.png" fit="contain" style="width: 100%" />
    <br>
    <br>
    <h2>
      <v-icon color="secondary" large>mdi-layers-plus</v-icon>
      ما هي عملية اداره العاملين  ؟
    </h2>
    <p>
تقديم الخدمات اليومية التي يحتاجها كافة العاملين على أختلاف مستوياتهم الوظيفية للتفرغ لأداء واجباتهم وأعمالهم اليومية والعمل على اختيار الأفراد الملائمين لإنجاز أعمال المشاريع بالتعرف على طبيعة الأعمال ودراسة مواصفاتها الخاصة بدقة ومن ثم التعرف على أعدادها والبحث عن مصادرها وإجراء الاختبارات وإكمال مسوغات التوظيف والتعيين
    </p>
   

    <br>
    <h2 class="secondary--text center font-weight-bold">
خبراء بست تاكت (BesTakt) يقدمون نماذج مجانية للموازنة السنوية
    
    <v-btn color="primary secondary--text" class=" font-weight-bold" to="/contact">
      إتصل بنا (إستشارة مجانية)
    </v-btn></h2> 
    <br>
    <br>
<g-image alt="نماذج مجانية للموازنة السنوية" 
				src="~/revenue1.png" fit="contain" style="width: 80%; display: block; margin: auto;" />
  <p class="center">
نماذج مبسطة وجاهزة لإعداد الموازنة بسهولة لتحقيق أهدافك

  </p>
  <p class="center  secondary--text">
    أرسل لنا طلبك مع تحديد القطاع الذي تعمل به ، مثلاً:
تجارة الجملة-
تجارة التجزئة-
فندق / شقق مفروشة-
مقاولات-
نقل ركاب أو بضائع وتخزين-
مركز طبي-
مدرسة أو جامعة


  </p>
    <br>
      <h2>
        <v-icon color="secondary" large>mdi-numeric-1-box-multiple</v-icon>
طلبات التوظيف المعتمده 
      </h2>
    <p>
فتح ملف للموظف الجديد يحفظ على سحابة إلكترونية آمنة ( عقود – ارصده اجازات وقرارات اداريه )  
    </p>
  
  
    <br>
    <h2>
      <v-icon color="secondary" large>mdi-numeric-2-box-multiple</v-icon>
اصدار الرواتب الشهريه 
    </h2>
   <p>

   </p>
 
    <br>
    <h2>
      <v-icon color="secondary" large>mdi-numeric-3-box-multiple</v-icon>
اصدار مسير الرواتب 
    </h2>
 
    <br>
    <h2>
      <v-icon color="secondary" large>mdi-numeric-4-box-multiple</v-icon>
احتساب التامينات الاجتماعيه 
    </h2>
 


    <br>
    <h2>
      <v-icon color="secondary" large>mdi-numeric-5-box-multiple</v-icon>
استلام ملف حمايه الاجور
    </h2>


    <br>
    <h2>
      <v-icon color="secondary" large>mdi-numeric-6-box-multiple</v-icon>
نهايه الخدمه 
    </h2>



    <br>
    <g-image alt="نموذج قائمة الدخل" 
				src="~/pl1.png" fit="contain" style="width: 70%; display: block; margin: auto;" />
  <p class="center">
نموذج قائمة الدخل والنسب المالية المرتبطة بها - نماذج مجانية

  </p>
    <p>
شكراً لكم
    </p>

    <br>
  
    <v-btn color="primary secondary--text" class=" font-weight-bold" to="/contact">
      إتصل بنا (إستشارة مجانية)
    </v-btn>
  <br>
  <br>
   <h3 class="center red--text">
    خصم 30%
    <v-icon color="secondary">mdi-tag-off-outline</v-icon>
      لمدة محدودة - 5.5 دولار أمريكى/موظف بالشهر مع العقود السنوية 
      <span class="text-decoration-line-through">
      بدلاً من 8 دولار أمريكي
      </span>
      </h3>
      <br>


  </v-container>
  
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Procure-to-Pay'
  },
  data() {
    return {
      advices: [
        ' قياس إنتاجية العاملين عن طريق تطبيقات قياس الإنتاجية',
        'مكافآت وجوائز سخية للمتميزيين',
        'ربط الأجر المتغير بأهداف الشركة ومعدلات النمو',
        'توازن بين الأجر الثابت والمتغير',
        
      ]
    }
  }
}
</script>
