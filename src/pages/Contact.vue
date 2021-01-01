<template>
  <Layout>
  <v-container max-width="600">

      <v-card dense elevation="8" outlined max-width="700" class="mx-auto">
			<v-row dense justify="center" align="center">
				<v-col>
					<v-card-title
          	class="headline secondary--text font-weight-bold"      
					>
					إتصل بنا
					</v-card-title>
				</v-col>
        <v-col>
          <v-badge
            x-large
            bordered
            bottom
            color="purple"
            right
            
            offset-x="110"
          >
            <template v-slot:badge height="20px">
              
                <span >جاهز للرد علي إستفساراتك</span>
              
            </template>
          
            <v-avatar size="100">
                
              <v-img :src="require('~/sharawy.png')"></v-img>
                
            </v-avatar>
        
        
          </v-badge>
        </v-col>
			</v-row>
      	<v-row dense justify="center" align="center">
				<v-col>
					<v-card-subtitle
          	class="secondary--text font-weight-bold"      
					>
					سيتم الرد عليكم خلال 24 ساعة عمل
					</v-card-subtitle>
				</v-col>
        <v-col>
          <span>أ/الشعراوي المحمدي - خبير إداري ومالي </span>
        </v-col>
			</v-row>
			<v-row dense>
          <v-col cols="10" offset="1">
          <div>
                
                <v-card dense color="green lighten-5" >
                <v-form
                  ref="form"
                >
                  <v-text-field
                  color="black"
                    outlined
                    label=" الاسم الكريم" 
										v-model="name"
                    :rules="[rules.required]"
                  ></v-text-field>

                  <v-text-field
                  color="black"
                    outlined
                    label=" عنوان الرسالة" 
										v-model="title"
                    :rules="[rules.required]"
                  ></v-text-field>

                  <v-text-field
                  color="black"
                    outlined
                    label=" رقم الجوال ورمز الدولة" 
										v-model="mobile"
                    :rules="[rules.required]"
                  ></v-text-field>
                  <v-text-field
                    color="black"
                    outlined
                    label="البريد الاكترونى"
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                  ></v-text-field>

                  <v-textarea
                    color="black"
                    outlined
                    label="تفضل بكتابة رسالتك"
										v-model="text"
                    :rules="[rules.required]"
                  >
                  
                  </v-textarea>
                  <v-btn
                    color="primary"
                    class="mr-4 black--text font-weight-bold"
                    :disabled="isSending"
										@click="sendMessage"
                  >
									<span v-if="isSending">
										<v-icon class="purple--text">mdi-selection-ellipse mdi-spin</v-icon>
									</span>
									<span v-else>
                    ارسل
									</span>
                  </v-btn>

                  
                </v-form>
                </v-card>
               
              </div>
          </v-col>
          
        </v-row>
                     
      </v-card>
    </v-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact us'
  },
  data() {
		return {
			isSending: false,
			name: '',
      email: '',
      title: '',
      mobile: '',
			text: '',
			rules: {
          required: value => !!value || 'مطلوب',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'خطأ'
          }
        }
		}
	},
	methods: {
		  sendMessage() {
        this.isSending = true
        if (!this.$refs.form.validate()) {
					swal('خطأ!',
					'من فضلك تصحيح الخطأ', 'error')
					this.isSending = false
					return
				}
        const cloudFunc = 'https://us-central1-bestakt-v1-0.cloudfunctions.net/bestakt_contact_email'
        const req = {
          to: 'client@bestakt.com',
          subject: `Client msg: ${this.title}`,
          text: `
          from: ${this.name} \n
          email: ${this.email} \n
          mobile: ${this.mobile} \n
          message: ${this.text}
          `
        }
        fetch(cloudFunc, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(req) // body data type must match "Content-Type" header
        })
        .then( res => res.json() )
        .then (data => {
					swal("شكراً جزيلاً", 
					"تم إرسال إستفسارك بنجاح وسيتم التواصل معكم خلال 24 ساعة", "success")

					this.isSending=false
					this.$router.push('/')
          
          } )
      }
	}
}
</script>
