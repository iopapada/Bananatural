<template>
<div class="header">
    <div class="nav-wrap">
    <div class="container">
        <label class="hamburger"></label>
        <div class="logo">
			<span class="wsite-logo">
			<a href="index.html"> <img src="./../uploads/1/00/8/5/108537385/published/170702-Logo.png" />
			</a>
			</span>
		</div>
		<div class="nav desktop-nav">
			<ul class="wsite-menu-default">
			<li id="pg576470552329113904" class="wsite-menu-item-wrap ">
                <router-link class="wsite-menu-item" to="/">Home</router-link>
				<!-- <a href="index.html" class="wsite-menu-item ">Home</a> -->
			</li>
			<li id="pg209522028186084792" class="wsite-menu-item-wrap ">
                <router-link class="wsite-menu-item" to="/patent">Patent</router-link>
				<!-- <a href="patent.html" class="wsite-menu-item ">Patent</a> -->
			</li>
			<li id="pg311289773438403010" class="wsite-menu-item-wrap ">
                <router-link class="wsite-menu-item" to="/usage">Usage</router-link>
				<!-- <a href="usage.html" class="wsite-menu-item ">usage</a> -->
			</li>
			<li id="pg609939015923575182" class="wsite-menu-item-wrap ">
                <router-link class="wsite-menu-item" to="/benefits">Benefits</router-link>
				<!-- <a href="benefits.html" class="wsite-menu-item ">benefits</a> -->
			</li>
			<li id="active" class="wsite-menu-item-wrap ">
                <router-link class="wsite-menu-item" to="/contact">Contact</router-link>
				<!-- <a href="contact.html" class="wsite-menu-item active">Contact</a> -->
			</li>
			<!-- <li id="active" class="wsite-menu-item-wrap ">
				<router-link class="wsite-menu-item" to="/worldwide">Worldwide</router-link>
				<a href="contact.html" class="wsite-menu-item active">Worldwide</a>
			</li> -->
			<li id="pglolo122332545" class="wsite-menu-item-wrap ">
				<a href="./../uploads/pdfs/BanaNatural-Brochure.pdf" download>brochure</a>
			</li>
			</ul>
		</div>
		<div class="nav sidebar-nav">
			<div class="nav-wrap">
			<ul class="wsite-menu-default">
				<li id="pg576470552329113904" class="wsite-menu-item-wrap ">
					<router-link class="wsite-menu-item" to="/">Home</router-link>
					<!-- <a href="index.html" class="wsite-menu-item ">Home</a> -->
				</li>
				<li id="pg209522028186084792" class="wsite-menu-item-wrap ">
					<router-link class="wsite-menu-item" to="/patent">Patent</router-link>
					<!-- <a href="patent.html" class="wsite-menu-item ">Patent</a> -->
				</li>
				<li id="pg311289773438403010" class="wsite-menu-item-wrap ">
					<router-link class="wsite-menu-item" to="/usage">Usage</router-link>
					<!-- <a href="usage.html" class="wsite-menu-item ">usage</a> -->
				</li>
				<li id="pg609939015923575182" class="wsite-menu-item-wrap ">
					<router-link class="wsite-menu-item" to="/benefits">Benefits</router-link>
					<!-- <a href="benefits.html" class="wsite-menu-item ">benefits</a> -->
				</li>
				<li id="active" class="wsite-menu-item-wrap ">
					<router-link class="wsite-menu-item" to="/contact">Contact</router-link>
					<!-- <a href="contact.html" class="wsite-menu-item active">Contact</a> -->
				</li>
				<!-- <li id="active" class="wsite-menu-item-wrap ">
					<router-link class="wsite-menu-item" to="/worldwide">Worldwide</router-link>
					<a href="contact.html" class="wsite-menu-item active">Worldwide</a>
				</li> -->
					<li id="pglolo122332545" class="wsite-menu-item-wrap ">
					<a href="./../uploads/pdfs/BanaNatural-Brochure.pdf" download>brochure</a>
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