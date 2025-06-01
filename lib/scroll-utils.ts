// Debug utility to find scrollable element
export function findScrollableElement() {
  // Check common candidates
  const candidates = [
    document.getElementById('app-scroll-container'),
    document.getElementById('__next'),
    document.documentElement,
    document.body,
    document.querySelector('.overflow-y-auto'),
    document.querySelector('[class*="overflow-y-auto"]')
  ];

  for (const element of candidates) {
    if (element && element.scrollHeight > element.clientHeight) {
      console.log('Found scrollable element:', element);
      return element;
    }
  }

  // If none found, traverse DOM
  const allElements = document.querySelectorAll('*');
  for (const element of allElements) {
    if (element.scrollHeight > element.clientHeight) {
      const style = window.getComputedStyle(element);
      if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
        console.log('Found scrollable element by traversal:', element);
        return element;
      }
    }
  }

  console.log('No scrollable element found');
  return null;
}

// Force scroll to top
export function forceScrollToTop() {
  const scrollable = findScrollableElement();
  if (scrollable) {
    scrollable.scrollTop = 0;
    console.log('Scrolled to top');
  } else {
    // Fallback - try everything
    document.getElementById('app-scroll-container')?.scrollTo(0, 0);
    document.getElementById('__next')?.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    console.log('Attempted all scroll methods');
  }
}
