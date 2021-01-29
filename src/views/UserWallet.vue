<template>
    <div>
        <TheHeader />
        <!-- page-header -->
        <div class="post-pageheader">
            <div class="wallet-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="post-pagecaption">
                            <h1 class="text-white">Mosi's Wallet</h1>
                            <div class="meta text-white">
                                <span class="meta-date meta-divider">No package </span>
                                <span class="meta-admin">View <router-link to="/user-wallet/user/profile" class="meta-link">Profile</router-link></span>
                                <!-- <span class="meta-comments">05 comments </span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.page-header-->
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                        <!-- categories -->
                        <!-- <div class="widget widget-categories">
                        <h4 class="widget-title">Wallet</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">Bitcoin</a></li>
                            <li><a href="#">Ethereum</a></li>
                            <li><a href="#">Ripple</a></li>
                            <li> <a href="#">Litecoin</a></li>
                            <li> <a href="#">Stellar</a></li>
                        </ul>
                    </div> -->
                        <!-- /.categories -->
                        <!-- widget-tags -->
                        <div class="widget widget-tags">
                            <h4 class="widget-title">Wallet</h4>
                            <router-link to="/user-wallet/user" class="btn btn-default btn-xs">Dashboard</router-link> <br> <router-link to="/user-wallet/user/profile" class="btn btn-default btn-xs">View Profile</router-link> <br> <router-link to="/investment-packages" class="btn btn-default btn-xs">Invest</router-link> <br> <a href="#" class="btn btn-default btn-xs">Reqiest Withdrawal</a><br>
                        </div>
                        <div class="widget">
                            <h4 class="widget-title">Referral Link</h4>
                            <form>
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label required sr-only ">Name <span class="require">*</span></label>
                                            <input type="text" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                                        <button id="singlebutton" name="singlebutton" class="btn btn-primary">Copy Link</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.widget-tags -->
                    </div>
                   <router-view />
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>
<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue"
export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>
<style>
.bg-gold {
    background: #fdaf17 !important;
}
</style>