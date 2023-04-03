<header>
	<a class="main" href="/">
		<h1>Wolbodo</h1>
	</a>

	<nav>
		<ul>
			<!-- <li>
				<a href="/events">Events</a>
			</li> -->
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/zaalverhuur">Zaalverhuur</a>
			</li>
		</ul>
		<a class="members" href="/leden">Leden</a>
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

		display: grid;

		grid-template-columns: auto 5rem;
		align-content: baseline;
	}
	nav ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(5rem, auto));
		justify-content: start;

		padding: 0;
		margin: 0;
		list-style: none;
		font-size: 1rem;
	}
	.members {
		background: var(--detail-color);
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
		margin-right: calc(-1rem - 8px);
		text-align: center;
		line-height: 49px;

		text-decoration: none;
	}
	nav li {
		margin: 0.5rem;
	}
	nav li a {
		display: block;
		padding: 0.5rem;
		text-align: center;
		text-decoration: none;
		background: var(--background-color);
	}
	nav a:focus,
	nav a:hover {
		transition: background-color 0.3s ease-out;
		background: var(--action-color);
	}
</style>
