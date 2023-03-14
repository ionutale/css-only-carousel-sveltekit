<script lang="ts">
  const listOfSlides = [
    "https://picsum.photos/id/1000/800",
    "https://picsum.photos/id/1000/800",
    "https://picsum.photos/id/1001/800",
    "https://picsum.photos/id/1002/800",
    "https://picsum.photos/id/1003/800",
    "https://picsum.photos/id/1004/800",
    "https://picsum.photos/id/1005/800",
    "https://picsum.photos/id/1006/800",
    "https://picsum.photos/id/1006/800",
  ]

 // scroll the slide number into the middle of the container
 const scrollTo = (e) => {
    const slideNumber = e.target.dataset.slide
    const slide = document.getElementById(`slide-${slideNumber}`)
    const container = document.getElementById('container')
    const containerWidth = container.offsetWidth
    const slideWidth = slide.offsetWidth
    const slideOffset = slide.offsetLeft
    const scrollPosition = slideOffset - (containerWidth / 2) + (slideWidth / 2)
    console.log("scrollToPosition", scrollPosition)
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
    // add a hash to the url so the slide can be linked to
    window.location.hash = `slide-${slideNumber}`
  }
</script>

<h1>css only carousel</h1>

<section id="gallery">
  <article id="container">
     {#each listOfSlides as slide, i }
      <div id="slide-{i}" class="slide">
      {i}
        <img class="img" src={slide} alt="slide-{i}" />
      </div>
    {/each}
  </article>
  <article id="segment">
     {#each listOfSlides as slide, i }
      <button data-slide={i} class="segmentButton" on:click={scrollTo}>{i}</button>
    {/each}
  </article>
</section>

<style>
	section {
		width: 98vw;
		height: 300px;
		max-width: 1440px;
		margin: 0 auto;
	}

	article#container {
		height: 300px;
		scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
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
		background-color: red;
	}

  div.slide:target {
    border: 2px solid blue;
  }

	div > .img {
		display: block;
		position: relative;
		aspect-ratio: 1/1;
		height: auto;
		object-fit: cover;
	}

	article#container > div:first-child,
	article#container > div:last-child {
		visibility: hidden;
	}

  .segmentButton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 0.5rem;
    cursor: pointer;
  }

  .segmentButton:hover {
    background-color: #aaa;
  }

  .segmentButton:active {
    background-color: #888;
  }

</style>
