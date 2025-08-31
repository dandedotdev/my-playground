<script lang="ts">
  type Question = {
    id: number;
    text: string;
  };

  let questions = $state<Question[]>([
    {
      id: 1,
      text: `Where did you go to school?`
    },
    {
      id: 2,
      text: `What is your mother's name?`
    },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`
    }
  ]);
  let selected = $state<Question | undefined>();
  let answer = $state('');

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (!selected) return;
    alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
  }
</script>

<h2>Insecurity questions</h2>

<form class="flex flex-col gap-2" onsubmit={handleSubmit}>
  <select bind:value={selected} onchange={() => (answer = '')}>
    {#each questions as question}
      <option value={question}>
        {question.text}
      </option>
    {/each}
  </select>
  <input class="rounded-md bg-sky-900 p-2" bind:value={answer} />
  <button
    class="rounded-md bg-indigo-500 px-4 py-2 text-white disabled:opacity-50 dark:bg-sky-500"
    disabled={!answer}
    type="submit"
  >
    Submit
  </button>
</form>

<p>
  selected question {selected ? selected.id : '[waiting...]'}
</p>
