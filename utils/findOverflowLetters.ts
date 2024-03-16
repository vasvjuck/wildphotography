// todo
export const findOverflowLetters = (baseBlock: any, text: any) => {
  const { top, bottom, right, left } = baseBlock.getBoundingClientRect();

  const overflowLetters = [...text.children].filter(letter => {
    const { left: letterLeft, right: letterRight, top: letterTop, bottom: letterBottom } = letter.getBoundingClientRect();
    const isOverflowing = letterLeft < left || letterRight > right || letterTop < top || letterBottom > bottom;
    if (isOverflowing) {
      letter.style.WebkitTextFillColor = 'transparent';
      letter.style.WebkitTextStrokeWidth = '1px';
      letter.style.WebkitTextStrokeColor = '#fff';
    }
  });
  return overflowLetters;
};
