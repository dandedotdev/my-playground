export function trapFocus(node: HTMLElement) {
  const previousActiveElement = document.activeElement as HTMLElement | null;

  $effect(() => {
    focusable()[0]?.focus();
    node.addEventListener('keydown', handleKeydown);
    return () => {
      node.removeEventListener('keydown', handleKeydown);
      if (!previousActiveElement) return;
      previousActiveElement.focus();
    };  
  });

  function focusable(): HTMLElement[] {
    return Array.from(
      node.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    );
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key !== 'Tab') return;
    const currentActiveElement = document.activeElement;
    const elements = focusable();
    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];
    if (event.shiftKey && currentActiveElement === firstElement) {
      lastElement.focus();
      event.preventDefault();
    }
    if (!event.shiftKey && currentActiveElement === lastElement) {
      firstElement.focus();
      event.preventDefault();
    }
  }
}
