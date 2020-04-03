<template>
<div class="header">
    <div class="nav-wrap">
    <div class="container">
        <label class="hamburger"><span></span></label>
        <div class="logo">
			<span class="wsite-logo">
			<router-link class="wsite-menu-item" to="/"> 
				<img src="../uploads/1/00/8/5/108537385/published/170702-Logo.png" />
			</router-link>
			</span>
		</div>
		<div class="nav desktop-nav">
			<ul class="wsite-menu-default">
			<li id="pg576470552329113904" class="wsite-menu-item-wrap ">
                <router-link class="wsite-menu-item" to="/">Home</router-link>
			</li>
			<li id="pg209522028186084792" class="wsite-menu-item-wrap ">
                <router-link class="wsite-menu-item" to="/patent">Patent</router-link>
			</li>
			<li id="pg311289773438403010" class="wsite-menu-item-wrap ">
                <router-link class="wsite-menu-item" to="/usage">Usage</router-link>
			</li>
			<li id="pg609939015923575182" class="wsite-menu-item-wrap ">
                <router-link class="wsite-menu-item" to="/benefits">Benefits</router-link>
			</li>
			<li id="ww-6" class="wsite-menu-item-wrap ">
				<router-link class="wsite-menu-item" to="/worldwide">Worldwide</router-link>
			</li>
			<li id="pg749030241805109034" class="wsite-menu-item-wrap ">
                <router-link class="wsite-menu-item" to="/contact">Contact</router-link>
			</li>
			<li id="pglolo122332545" class="wsite-menu-item-wrap ">
				<a href="../uploads/pdfs/BanaNatural-Brochure.pdf" download>brochure</a>
			</li>
			</ul>
		</div>
		<div class="nav sidebar-nav">
			<div class="nav-wrap">
			<ul class="wsite-menu-default">
				<!-- <li id="pg576470552329113904" class="wsite-menu-item-wrap "> -->
					<router-link tag="a" class="wsite-menu-item" to="/">Home</router-link>
				<!-- </li> -->
				<!-- <li id="pg209522028186084792" class="wsite-menu-item-wrap "> -->
					<router-link tag="a" class="wsite-menu-item" to="/patent">Patent</router-link>
				<!-- </li> -->
				<li id="pg311289773438403010" class="wsite-menu-item-wrap ">
					<router-link class="wsite-menu-item" to="/usage">Usage</router-link>
				</li>
				<li id="pg609939015923575182" class="wsite-menu-item-wrap ">
					<router-link class="wsite-menu-item" to="/benefits">Benefits</router-link>
				</li>
				<li id="ww-6" class="wsite-menu-item-wrap ">
					<router-link class="wsite-menu-item" to="/worldwide">Worldwide</router-link>
				</li>
				<li id="pg749030241805109034" class="wsite-menu-item-wrap ">
					<router-link class="wsite-menu-item" to="/contact">Contact</router-link>
				</li>
					<li id="pglolo122332545" class="wsite-menu-item-wrap ">
					<a href="../uploads/pdfs/BanaNatural-Brochure.pdf" download>brochure</a>
				</li>
			</ul>
			</div>
		</div>
		<div class="nav membership-cart">
			<span id="member-login" class="wsite-custom-membership-wrapper"><a href="#" id="wsite-nav-login-a"></a></span>
		</div>
	</div>
    <div class="nav contact">
		<span class="wsite-text wsite-phone">
			<span>129 Manou Katraki St.</span><br />
			<span>71410 Heraklion, Greece</span><br /><br />+44 (0) 7762 232707
		</span>
	</div>
    </div>
</div>
</template>

<script>
export default {
  name: "Sidebar"
  
}
</script>

<style>

</style>