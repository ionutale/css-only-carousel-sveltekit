<nav>
	<li><a href="/">home</a></li>
	<li><a href="/a11y/radio">radio button</a></li>
	<li><a href="/carousel/simple">simple carousel</a></li>
</nav>

<slot />

<style>
	nav {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		position: sticky;
		top: 0;
		background: #418db9;
		color: #fff;
		height: 4rem;
	}

	nav li {
		margin: 0 1rem;
		color: #fff;
		display: flex;
		align-items: center;
	}

	nav li a {
		color: #fff;
		text-decoration: none;
	}

	nav li a:hover {
		color: #fff;
		text-decoration: underline;
	}
</style>
