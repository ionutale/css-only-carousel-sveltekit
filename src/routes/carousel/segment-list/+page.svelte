<script lang="ts">
	const listOfSlides = [
		'https://picsum.photos/id/1000/800',
		'https://picsum.photos/id/1000/800',
		'https://picsum.photos/id/1001/800',
		'https://picsum.photos/id/1002/800',
		'https://picsum.photos/id/1003/800',
		'https://picsum.photos/id/1004/800',
		'https://picsum.photos/id/1005/800',
		'https://picsum.photos/id/1006/800',
		'https://picsum.photos/id/1006/800'
	];
</script>

<main>
	<h1>css only carousel</h1>
	<p>go ahead and disable the javascript</p>
	<code>cmd + shift + p > 'disable javascript'</code>
	<p>and refresh the page</p>

	<noscript>
		<!-- anchor linking to external file -->
		<h2>🎉 javascript is disabled 🎉</h2>
		<h3>now enjoy the carousel</h3>
	</noscript>
	<ul id="segment">
		{#each listOfSlides as slide, i}
			<li><a href="#slide-{i}" class="segmentButton" aria-label="Go to slide {i}">Slide {i}</a></li>
		{/each}
	</ul>
	<section id="gallery">
		<article id="carousel">
			{#each listOfSlides as slide, i}
				<div id="slide-{i}" class="slide">
					<img class="img" src={slide} alt="slide-{i}" />
				</div>
			{/each}
		</article>
	</section>
</main>

<style>
	h1 {
		text-align: center;
		width: 100%;
		height: 100%;
	}

	main {
		max-width: 2000px;
		margin: 0 auto;
		padding: 0;
	}
	section {
		margin: 0 auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		scroll-snap-align: center;
		overflow-x: scroll;
		width: calc(100vw - 2rem);
	}

	section::-webkit-scrollbar {
		display: none;
	}

	article#carousel {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 3.5rem;
		width: fit-content;
	}

	@media screen and (min-width: 768px) {
		section {
			width: 500px;
		}

		article#carousel {
			gap: 6rem;
		}
	}

	div.slide {
		display: block;
		background-color: rgb(137, 145, 228);
		width: 270px;
		height: 270px;
		max-width: 300px;
		position: relative;
		scroll-snap-align: center;
		-webkit-box-align: center;
		aspect-ratio: 1/1;
		box-sizing: border-box;
		margin: 0px auto;
		overflow: hidden;
	}

	div.slide:target .img {
		animation: slideActive 0.8s;
		direction: backwards;
	}

	@keyframes slideActive {
		0% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}

	div > .img {
		display: block;
		position: relative;
		aspect-ratio: 1/1;
		height: auto;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	article#carousel > div:first-child,
	article#carousel > div:last-child {
		visibility: hidden;
	}

	ul#segment li:first-child > a,
	ul#segment li:last-child > a {
		display: none;
	}

	ul#segment {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.1rem;
		margin: 1rem 0;
		flex-wrap: wrap;
	}

	.segmentButton {
		padding: 0.25rem 1.5rem;
		border-radius: 20%;
		background-color: #ccc;
		cursor: pointer;
		text-align: center;
	}

	@media screen and (min-width: 768px) {
		.segmentButton {
			padding: 0.25rem 1.5rem;
		}
	}

	.segmentButton:hover {
		background-color: #aaa;
	}

	.segmentButton:active {
		background-color: #888;
	}
</style>
