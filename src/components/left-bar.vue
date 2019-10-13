<template>
	<!-- LEFT BAR -->
	<aside id="left-col" class="uk-light uk-visible@m">
		<div class="left-logo uk-flex uk-flex-middle">
			<img class="custom-logo" src="./static/img/dashboard-logo.svg" alt="">
		</div>
		<div class="left-content-box  content-box-dark">
			<!-- <img src="./static/img/avatar.svg" alt="" class="uk-border-circle profile-img"> -->
			<h4 class="uk-text-center uk-margin-remove-vertical text-light">Hi [user]</h4>
			
			<div class="uk-position-relative uk-text-center uk-display-block">
			    <a href="#" class="uk-text-small uk-text-muted uk-display-block uk-text-center" data-uk-icon="icon: triangle-down; ratio: 0.7">[group user]</a>
			    <!-- user dropdown -->
			    <div class="uk-dropdown user-drop" data-uk-dropdown="mode: click; pos: bottom-center; animation: uk-animation-slide-bottom-small; duration: 150">
			    	<ul class="uk-nav uk-dropdown-nav uk-text-left">
							<li><a href="#"><span data-uk-icon="icon: settings"></span> Config</a></li>
							<li class="uk-nav-divider"></li>
							<li><a href="#"><span data-uk-icon="icon: sign-out"></span> Sign Out</a></li>
				    </ul>
			    </div>
			    <!-- /user dropdown -->
			</div>
		</div>
		
		<div class="left-nav-wrap">
			<ul class="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
				<li class="uk-nav-header">ACTIONS</li>
				<li><a href="/#/dashboard"><span data-uk-icon="icon: paint-bucket" class="uk-margin-small-right"></span>Dashboard</a></li>
				<li><a href="/#/handover"><span data-uk-icon="icon: move" class="uk-margin-small-right"></span>Handover</a></li>
				<li><a href="/#/contactus"><span data-uk-icon="icon: comments" class="uk-margin-small-right"></span>Contact Us</a></li>
				<li><a href="/#/About"><span data-uk-icon="icon: users" class="uk-margin-small-right"></span>About</a></li>
				<li><a href="/#/project_sa"><span data-uk-icon="icon: move" class="uk-margin-small-right"></span>Project SA</a></li>
			</ul>
		<div class="bar-bottom">
			<ul class="uk-subnav uk-flex uk-flex-center uk-child-width-1-5" data-uk-grid>
				<li>
					<a href="#" class="uk-icon-link" data-uk-icon="icon: home" title="Home" data-uk-tooltip></a>
				</li>
				<li>
					<a href="#" class="uk-icon-link" data-uk-icon="icon: settings" title="Settings" data-uk-tooltip></a>
				</li>
				<li>
					<a href="#" class="uk-icon-link" data-uk-icon="icon: social"  title="Social" data-uk-tooltip></a>
				</li>
				
				<li>
					<a href="#" class="uk-icon-link" data-uk-tooltip="Sign out" data-uk-icon="icon: sign-out"></a>
				</li>
			</ul>
		</div>
	</aside>
	<!-- /LEFT BAR -->
</template>

<script>
</script>

<style>

</style>