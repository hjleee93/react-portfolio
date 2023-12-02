const scrollToRef = (ref: React.RefObject<HTMLElement>) => {  
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
}

export { scrollToRef }