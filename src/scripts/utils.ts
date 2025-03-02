const scrollToRef = (ref: React.RefObject<HTMLElement>) => {  
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
}

const throttling = (func: () => void, delay: number = 100) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  
  return function() {
    if (timerId) return;
    timerId = setTimeout(() => {
      func();
      timerId = null;
    }, delay);
  };
};

export { scrollToRef, throttling }