<template>
    <div class="bg-primary pdt30 pdb30">
        <div class="content">
            <div class="container">
                <div class="row">
                    <!-- register-form -->
                    <div class="offset-xl-3 col-xl-6 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12 ">
                        <div class="register-form">
                            <h2 class="text-center mb30">Create Your Account</h2>
                            <form>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="name"></label>
                                    <input v-model="user.name" id="name" type="text" placeholder="name" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="email"></label>
                                    <input v-model="user.email" id="email" type="text" name="email" placeholder="Email" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="dob"></label>
                                    <input v-model="user.dob" id="dob" type="date" name="email" placeholder="Date of Birth" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="address"></label>
                                    <input v-model="user.address" id="address" type="text" placeholder="address" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="city"></label>
                                    <input v-model="user.city" id="city" type="text" placeholder="city" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="state"></label>
                                    <input v-model="user.state" id="state" type="text" placeholder="state" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="country"></label>
                                    <input v-model="user.country" id="country" type="text" placeholder="country" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="zip"></label>
                                    <input v-model="user.zip" id="zip" type="text" placeholder="zip" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="phone"></label>
                                    <input v-model="user.phone" id="phone" type="tel" placeholder="phone number" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="ssn"></label>
                                    <input v-model="user.ssn" id="ssn" type="text" placeholder="SSN" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="security-question"></label>
                                   <!--  <input v-model="" id="security-question" type="text" placeholder="security question" class="form-control" required> -->
                                   <select id="security_question" class="form-control" v-model="user.security_question">
                                       <option></option>
                                   </select>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="first-car"></label>
                                    <input id="first-car" type="text" placeholder="what was your first car?" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="mother-maiden"></label>
                                    <input id="mother-maiden" type="text" placeholder="what is your Mother's maiden name?" class="form-control" required>
                                </div>

                                <div class="form-group">
                                    <label class="control-label sr-only" for="password"></label>
                                    <input id="password" type="password" name="password" placeholder="create password" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="password"></label>
                                    <input id="password" type="password" name="password" placeholder="confirm password" class="form-control" required>
                                </div>
                                <span>
                                    <input id="box1" type="checkbox" class="with-font">
                                    <label for="box1"></label>
                                </span>
                                <p class="register-text">I certify that I am 18 years of age or older, and I agree to the User Agreement and<a href="#" class="btn-link"> Privacy Policy.</a></p>
                                <button @click.prevent="storeSignupDetails" type="submit" name="singlebutton" class="btn btn-default btn-lg  btn-block mb10">create Account</button>
                            </form>
                        </div>
                        <p class="text-white">Already have an account?<router-link to="/login" class="text-yellow"> Log in</router-link> <span class="pull-right"><a href="index.html" class="text-white">Back to Home</a></span> </p>
                    </div>
                    <!-- /.register-form -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import VueInjectJs from "vue-inject-js";
// import KnowYourCustomer from "@/components/KnowYourCustomer.vue";
// import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
    // components: {
    //     VueInjectJs,
    //     KnowYourCustomer,
    //     ValidationProvider,
    //     ValidationObserver
    // },

    data() {
        return {
            user: {
                name: null,
                email: null,
                password: null,
                repeat_password: null,
                dob: null,
                phone: null,
                city: null,
                state: null,
                country: null,
                zip: null,
                security_question: null,
                answer: null

            }
        };
    },

    mounted() {
        this.$store.dispatch("user/getSecurityQuestions");
        console.log("gotten");
    },

    methods: {
        storeSignUpDetails() {
            this.$store.commit("user/SET_INITIAL_SIGNUP_DETAILS", {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                repeat_password: this.user.repeat_password
                // subscribe: this.subscribeIsChecked
            });
            this.kycReady = true;
            console.log("shit, it worked");
        }
    }
};
</script>