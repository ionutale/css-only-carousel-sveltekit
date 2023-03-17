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

<h1>css only carousel</h1>
	<p>
		go ahead and disable the javascript 
	</p>
	<code>cmd + shift + p > 'disable javascript'</code>
	<p>and refresh the page</p>

<section id="gallery">
	<article id="container">
		{#each listOfSlides as slide, i}
			<div id="slide-{i}" class="slide">
				<img class="img" src={slide} alt="slide-{i}" />
			</div>
		{/each}
	</article>
	<article id="segment">
		{#each listOfSlides as slide, i}
			<a href="#slide-{i}" class="segmentButton">{i}</a>
		{/each}
	</article>
</section>

<style>
	section {
		width: 50vw;
		height: 300px;
		max-width: 1440px;
		margin: 0 auto;
	}

	article#container {
		height: 300px;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
    scroll-snap-align: center;
		overflow-x: scroll;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 1rem;
	}

	@media screen and (min-width: 768px) {
		article#container {
			gap: 14rem;
		}
	}

	article#container div {
		display: flex;
		justify-content: center;
		position: relative;
		scroll-snap-align: center;
		background-color: white;
	}

	div.slide {
		display: block;
		background-color: white;
		width: 300px;
		height: 300px;
	} 
	
	/*
	div.slide:target {
		border: 2px solid blue;
	} */

	div.slide:target .img {
		transform: scale(1.0);
		transition: all 0.8s 0s;
	}

	div.slide .img {
		transform: scale(1.2);
	}


	div > .img {
		display: block;
		position: relative;
		aspect-ratio: 1/1;
		height: auto;
		object-fit: cover;
	}

	article#container > div:first-child,
	article#container > div:last-child,
	article#segment > a:first-child,
	article#segment > a:last-child {
		visibility: hidden;
	}

	article#segment {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin: 1rem 0;
	}

	.segmentButton {
		display: inline-block;
		padding: 3rem;
		border-radius: 50%;
		background-color: #ccc;
		margin: 0 0.5rem;
		cursor: pointer;
		text-align: center;
		vertical-align: center;
	}

	.segmentButton:hover {
		background-color: #aaa;
	}

	.segmentButton:active {
		background-color: #888;
	}
</style>
