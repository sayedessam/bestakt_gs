


<template>
  <Layout>
    <v-container app>
  
    <h1 class="center">
    الإيرادات (المبيعات) وحسابات العملاء
</h1>
   <h3 class="center red--text">
    خصم 30%
    <v-icon color="secondary">mdi-tag-off-outline</v-icon>
      لمدة محدودة - 15 دولار أمريكى/فاتورة مع العقود السنوية 
      <span class="text-decoration-line-through">
      بدلاً من 22 دولار أمريكي
      </span>
      </h3>
      <br>
      <g-image alt="" 
				src="~/O2C-min.png" fit="contain" style="width: 100%" />
        <g-image alt="" 
				src="~/O2C2-min.png" fit="contain" style="width: 100%" />
      <v-card outlined elevation="5" >
        <v-card-title class="font-weight-bold secondary--text">
          توصيات خبراء بست تاكت (BesTakt) 
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
      ما هي عملية الإيرادات (المبيعات) ؟
    </h2>
    <p>
زيادة في حقوق الملكية المُتعلقة ببيع منتج أو خدمة لتحقيق الدخل، أي أنها الدخل الذي تحصل عليه الشركة من أنشطتها التجارية، وهناك العديد من أنواع الإيرادات المختلفة، بما في ذلك مبيعات المنتجات ورسوم الاستشارات والخدمات الأخرى والإيجار وحتى التسويق بالعمولة، حيث يعد أي نوع من الدخل المكتسب من العمليات التجارية إيرادات، فالإيرادات هي إجمالي العائدات التي تتلقاها الشركة عندما تبيع سلعها أو خدماتها ويشار إليها أحيانًا باسم المبيعات، نظرًا لوجود مجموعة من التكاليف الثابتة والمتغيرة في الإنتاج دائمًا، حيث يتم خصمها كنفقات من إيرادات لحساب صافي ربح الشركة،     </p>
   

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
طلب الشراء من العميل 
      </h2>
    <p>
فتح ملف للموظف الجديد يحفظ على سحابة إلكترونية آمنة ( عقود – ارصده اجازات وقرارات اداريه )  
    </p>
  
  
    <br>
    <h2>
      <v-icon color="secondary" large>mdi-numeric-2-box-multiple</v-icon>
اصدار فاتوره البيع 
    </h2>
   <p>

   </p>
 
    <br>
    <h2>
      <v-icon color="secondary" large>mdi-numeric-3-box-multiple</v-icon>
تسجيل الفاتورة
    </h2>
 
    <br>
    <h2>
      <v-icon color="secondary" large>mdi-numeric-4-box-multiple</v-icon>
متابعه التحصيل 
    </h2>
 


    <br>
    <h2>
      <v-icon color="secondary" large>mdi-numeric-5-box-multiple</v-icon>
استلام المتحصلات 
    </h2>


    <br>
    <h2>
      <v-icon color="secondary" large>mdi-numeric-6-box-multiple</v-icon>
اعداد التقارير الشهرية
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
      لمدة محدودة - 15 دولار أمريكى/موظف بالشهر مع العقود السنوية 
      <span class="text-decoration-line-through">
      بدلاً من 22 دولار أمريكي
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
