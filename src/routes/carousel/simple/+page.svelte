<script lang="ts">

  const randomNumber = () => Math.floor(Math.random() * 1000);

	const generatePictureLinks = () => [
    `https://picsum.photos/id/${randomNumber()}/800`,
    `https://picsum.photos/id/${randomNumber()}/800`,
    `https://picsum.photos/id/${randomNumber()}/800`,
    `https://picsum.photos/id/${randomNumber()}/800`,
    `https://picsum.photos/id/${randomNumber()}/800`,
    `https://picsum.photos/id/${randomNumber()}/800`,
    `https://picsum.photos/id/${randomNumber()}/800`,
    `https://picsum.photos/id/${randomNumber()}/800`,
    `https://picsum.photos/id/${randomNumber()}/800`
  ];

  const listOfSlides = generatePictureLinks();
  const listOfSlides2 = generatePictureLinks();

</script>
<main>
  <h1>css only carousel</h1>
    <p>
      go ahead and disable the javascript 
    </p>
    <code>cmd + shift + p > 'disable javascript'</code>
    <p>and refresh the page</p>

    <noscript>
      <!-- anchor linking to external file -->
      <h2>🎉 javascript is disabled 🎉</h2> 
      <h3>now enjoy the carousel</h3>
    </noscript>
  <section id="gallery">
    <article id="carousel">
      {#each listOfSlides as slide, i}
        <div id="slide-{i}" class="slide">
          <img class="img" src={slide} alt="slide-{i}" />
        </div>
      {/each}
    </article>
  </section>
  <article id="segment">
    {#each listOfSlides as slide, i}
      <a href="#slide-{i}" class="segmentButton"></a>
    {/each}
  </article>
<br>
<br>
<br>
  <section id="gallery">
    <article id="carousel">
      {#each listOfSlides2 as slide, i}
        <div id="slide-2-{i}" class="slide">
          <img class="img" src={slide} alt="slide-{i}" />
        </div>
      {/each}
    </article>
  </section>
  <article id="segment">
    {#each listOfSlides2 as slide, i}
      <a href="#slide-2-{i}" class="segmentButton"></a>
    {/each}
  </article>
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
        }
        
        section {
          margin: 0 auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scroll-snap-align: center;
          scroll-snap-stop: always;
          overflow-x: scroll;
          width: 100vw;
          height: 22rem;
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
          margin-top: 2rem;
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
          border-radius: 3rem;
          box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.51);
        } 

        div.slide:target .img {
          animation: slideActive 0.8s;
          direction: backwards;
        }

        @keyframes slideActive {
          0% {
            transform: scale(1.6);
            border-radius: 3rem;
          }
          100% {
            transform: scale(1.0);
            border-radius: 3rem;
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

        article#segment > a:first-child,
        article#segment > a:last-child {
          display: none;
        }

        article#segment {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.1rem;
          margin: 1rem 0;
        }

        .segmentButton {
          padding: 0.25rem 1.5rem;
          border-radius: 1rem;
          background-color: #ccc;
          cursor: pointer;
          text-align: center;
          height: 1rem;
        }

        @media screen and (min-width: 768px) {
          .segmentButton {
            padding: 0.25rem 1.5rem;
          }
        }

        .segmentButton:hover,
        .segmentButton:target {
          background-color: #4263eb;
        }

        .segmentButton:active {
          background-color: #888;
        }
        
        a {
          display: block;
           background: #4E9CAF;
        }
        
        a:target {
          background-color: blue;
          color: white;
        }
        
        div.demo {
          width: 100px;
          height: 100px;
          background-color: green;
        }
        
        div.demo:target {
          background-color: red;
        }
</style>
