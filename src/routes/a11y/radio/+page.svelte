<article>
  <label for="radio-1" class="mzp-u-inline">
    <input type="radio" name="radios" id="radio-1"> Option 1
  </label>
  <label for="radio-2" class="mzp-u-inline">
    <input type="radio" name="radios" id="radio-2"> Option 2
  </label>
  <label for="radio-3" class="mzp-u-inline">
    <input type="radio" name="radios" id="radio-3"> Option 3
  </label>
  <label for="radio-4" class="mzp-u-inline">
    <input type="radio" name="radios" id="radio-4"> Option 4
  </label>
  <label for="radio-5" class="mzp-u-inline">
    <input type="radio" name="radios" id="radio-5"> Option 5
  </label>
</article>

<style>

  article {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0.5rem;
  }

  article label {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;
    align-items: center;
  }

  article label input {
    margin: 0;
  }

</style>