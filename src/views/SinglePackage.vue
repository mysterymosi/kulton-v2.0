<template>
	<div>
		<TheHeader />
		<!-- page-header -->
        <div class="page-header invest-header">
            <div class="other-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="page-caption">
                            <!-- <h1 class="page-title">Blog Page</h1> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.page-header-->
		<div class="content">
            <div class="container">
                <div class="row ">
                    <!--  section-title -->
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div class="section-title text-center">
                            <h2>Select a subpackage</h2>
                        </div>
                    </div>
                    <!--  /.section-title -->
                </div>
                <div class="row">
                    <div class="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
                        <div class="row">
                            <!-- post block -->
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mx-auto">
                                <div class="post-block">
                                    <div class="post-content text-center">
                                        <h2 class="post-title"><a href="#" class="title">Bronze</a></h2>
                                        <hr>
                                        <p>Minimum Investment 0f $2500</p>
                                        <p>Maximum Investment 0f $4999</p>
                                        <a href="#" class="btn btn-default">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mx-auto">
                                <div class="post-block">
                                    <div class="post-content text-center">
                                        <h2 class="post-title"><a href="#" class="title">Silver</a></h2>
                                        <hr>
                                        <p>Minimum Investment 0f $5000</p>
                                        <p>Maximum Investment 0f $9999</p>
                                        <a href="#" class="btn btn-default">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mx-auto">
                                <div class="post-block">
                                    <div class="post-content text-center">
                                        <h2 class="post-title"><a href="#" class="title">Gold</a></h2>
                                        <hr>
                                        <p>Minimum Investment 0f $10000</p>
                                        <p>Maximum Investment 0f $19999</p>
                                        <a href="#" class="btn btn-default">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                            <div class="post-img">
                                <a href="#" class="imghover">
                         <img src="./images/post_img_1.jpg" alt="" class="img-fluid"> </a>
                            </div>
                        </div> -->
                            <!-- /.post block -->
                        </div>
                        <!-- <hr> -->
                        <hr>
                    </div>
                </div>
            </div>
        </div>
		<TheFooter />
	</div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
	components: {
		TheHeader,
		TheFooter
	}
}
</script>