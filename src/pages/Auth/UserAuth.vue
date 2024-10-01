<template>
    
    <div>
        <base-dialog :show="!!error" title="An error occurred" @close="handleError">
    <p> {{ error }} </p>
    </base-dialog>
        <base-dialog :show="isLoading" title="Authenticating..." fixed>  
        <base-spinner></base-spinner>     
        </base-dialog>
         <base-card>
        <form @submit.prevent="submitForm" >
            <div class="form-control">
                <label for="E-MAIL">E-MAIL</label>
                <input type="email" id="E-MAIL" name="E-MAIL" placeholder="name@example.com" v-model="email">
            </div>
            <div class="form-control">
                <label for="Password">Password</label>
                <input type="password" id="Password" name="Password" placeholder="Password" v-model="password">
            </div>
            <p v-if="!formIsValid">The Email or Password are not valid please enter a valid ones</p>
            <base-button> {{ submitButtonCaption }} </base-button>
            <base-button type="button" @click="switchAuthMode" mode="flat"> {{ switchModeButtonCaption }} </base-button>
        </form>
    </base-card>
</div>



   
</template>

<script>


export default {
    data(){
        return{
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null
        }
    },
    computed:{
        submitButtonCaption(){
            if(this.mode=== 'login'){
                return 'Login';
            }
            else {
                return 'Signup';
            }
        },
        switchModeButtonCaption(){
            if(this.mode === 'login'){
                return 'Sign Up';
                }
                else {
                    return 'Login';
                }
        }
    },
    methods:{
       async submitForm(){
            this.formIsValid=true;
            if (
            this.email === '' 
            || !this.email.includes('@') 
            || this.password.length < 6 ){
                this.formIsValid=false;
                return;
            }

            this.isLoading=true;

            try{
                if (this.mode === 'login'){
                // login logic here
                await this.$store.dispatch('login',{
                    email: this.email,
                    password: this.password
                })
            }
            else {
                await this.$store.dispatch('signup',{
                    email: this.email,
                    password: this.password
                })
            }
            const redirectUrl =  '/' +  (this.$route.query.redirect || 'coaches');
            this.$router.replace(redirectUrl);
            }
            catch(err){
                this.error=err.message || 'Failed to Authenticate,try later';
            }

            this.isLoading=false;
            
        },
        switchAuthMode(){
            this.mode = this.mode === 'login' ? 'signup' : 'login';
        },
        handleError(){
            this.error=null;
        }
    }
}
</script>


<style scoped>
form {
    margin: 1rem;
    padding: 1rem;
  }
  
  .form-control {
    margin: 0.5rem 0;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
  }
  
  input:focus,
  textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
  }
</style>