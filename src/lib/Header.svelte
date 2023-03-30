<header>
	<a class="main" href="/">
		<h1>Wolbodo</h1>
	</a>

	<nav>
		<ul>
			<li>
				<a href="/events">Events</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>

			<li class="end">
				<a href="/login">Login</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
	}
	h1 {
		font-family: 'Barrio';
		font-size: 5rem;

		margin: 1rem;
	}
	a.main {
		text-decoration: none;
		background: none;
	}

	nav {
		flex: 1;
		margin: 1rem;
	}
	nav ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(5rem, 10rem));
		align-content: end;

		padding: 0;
		margin: 0;
		list-style: none;
		font-size: 1.5rem;
	}
	li.end {
		align-self: auto;
	}
	nav li {
		margin: 0.5rem;
	}
	nav li a {
		display: block;
		padding: 0.5rem;
		text-align: center;
		text-decoration: none;
	}
</style>
