<template>
	<!-- header-section-->
    <div class="header-wrapper fixed-top">
        <div class="container">
            <div class="row">
                <div class="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="logo"> <a href="index.html"><img src="../assets/images/logo.png" alt=""> </a> </div>
                </div>
                <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
                    <!-- navigations-->
                    <div class="navigation">
                        <div id="navigation">
                            <ul>
                                <li class="active"><router-link to="/">Home</router-link></li>
                                <li class="active"><router-link to="/about">About</router-link></li>
                                <li class="active"><router-link to="/Investment-packages">Investment Packages</router-link></li>
                                <li class="active"><router-link to="/testimonies">Testimonies</router-link></li>
                                <li class="active"><router-link to="faqs">FAQS</router-link></li>
                                <li class="active"><router-link to="contact">Contact</router-link></li>
                              
                                <!-- <li class="has-sub"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog-default.html">Blog Default</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                    <!-- /.navigations-->
                </div>
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 d-none d-xl-block d-lg-block">
                    <div class="header-quick-info">
                        <router-link to="/login" class="btn btn-white btn-xs mr-1">Login</router-link>
                        <router-link to="signup" class="btn btn-default btn-xs">Sign up</router-link>
                    </div>
                </div>
            </div>
        </div>
        <VueInjectJs src="/js/menumaker.js" />
    </div>
    <!-- /. header-section-->
</template>

<script>
import VueInjectJs from "vue-inject-js"
export default {
	components: {
		VueInjectJs
	}
}
</script>