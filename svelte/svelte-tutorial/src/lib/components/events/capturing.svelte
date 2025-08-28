<div
  class="rounded-md bg-sky-900"
  onkeydowncapture={(e) => alert(`<div> ${e.key}`)}
  role="presentation"
>
  <input
    class="p-2"
    placeholder="Type something"
    onkeydowncapture={(e) => alert(`<input> ${e.key}`)}
  />
</div>
