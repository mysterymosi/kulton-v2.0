<template>
	<div class="bg-primary pdt100">
		<div class="content">
        <div class="container">
            <div class="row">
                <!-- login-form -->
                <div class="offset-xl-3 col-xl-6 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12 ">
                    <div class="login-form">
                        <h2 class="text-center mb30">Sign in to CoinTrade</h2>
                        <form>
                            <div class="form-group">
                                <label class="control-label sr-only" for="email"></label>
                                <input id="email" type="text" name="email" placeholder="Email" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label class="control-label sr-only" for="password"></label>
                                <input id="password" type="password" name="password" placeholder="create password" class="form-control" required>
                            </div>
                            <span>
    <input id="box1" type="checkbox" class="with-font">
    <label for="box1">Keep me signed in on this computer</label>

  </span>
                            <button type="submit" name="singlebutton" class="btn btn-default btn-lg  btn-block mt20">Sign</button>
                        </form>
                    </div>
                    <p class="text-white">Not a member? <router-link to="/signup" class="text-yellow">Sign up</router-link><span class="pull-right"><a href="index.html" class="text-white">Back to Home</a> </span></p>
                </div>
                <!-- /.login-form -->
            </div>
        </div>
    </div>
	</div>
</template>
<style scoped>
.pdt100 {
	height: 100vh;
}
</style>