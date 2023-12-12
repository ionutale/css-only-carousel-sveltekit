<script lang="ts">
  import { page } from '$app/stores'
  let isEditMode = $page.url.searchParams.get('editMode') === 'true';
  let currentActiveElement: HTMLElement | null = null;
  console.log(currentActiveElement);

  const toggleEditMode = () => {
    console.log("toggle edit mode");
    window.history.replaceState(null, '', `${window.location.pathname}?editMode=${!isEditMode}`);
    isEditMode = !isEditMode;
  };

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    console.log("clickon", target);
    if (isEditMode && target !== currentActiveElement) {
      target.focus(
        { preventScroll: true }
      );
      currentActiveElement = target;
    }
  };
</script>

<section id="edit">
  <button data-is-edit-mode={isEditMode} on:click={toggleEditMode}>{isEditMode ? 'disable': 'enable'} edit mode</button>
</section>
<section>
  <p contenteditable={isEditMode} on:click={handleClick}>new editorial</p>
</section>

<style>

  section {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1rem;
    margin: 0 auto;
    width: fit-content;
  }

  p:focus {
    outline: 2px solid #be2b2b;
  }

  section#edit {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    gap: 1rem;
    width: 100%;
  }

  button {
    padding: 0.5rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #be2b2b;
    color: white;
  }

  button[data-is-edit-mode="true"] {
    background-color: #2bbe2b;
  }


  
</style>