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
                                    <input id="name" type="text" placeholder="name" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="email"></label>
                                    <input id="email" type="text" name="email" placeholder="Email" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="dob"></label>
                                    <input id="dob" type="date" name="email" placeholder="Date of Birth" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="address"></label>
                                    <input id="address" type="text" placeholder="address" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="city"></label>
                                    <input id="city" type="text" placeholder="city" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="state"></label>
                                    <input id="state" type="text" placeholder="state" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="country"></label>
                                    <input id="country" type="text" placeholder="country" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="zip"></label>
                                    <input id="zip" type="text" placeholder="zip" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="phone"></label>
                                    <input id="phone" type="tel" placeholder="phone number" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="ssn"></label>
                                    <input id="ssn" type="text" placeholder="SSN" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="security-question"></label>
                                    <input id="security-question" type="text" placeholder="security question" class="form-control" required>
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
                                <button type="submit" name="singlebutton" class="btn btn-default btn-lg  btn-block mb10">create Account</button>
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