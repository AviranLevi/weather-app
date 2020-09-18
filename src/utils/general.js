export const converter = (min, max) => {
  if (max === undefined) {
    return `${((min * 9) / 5 + 32).toFixed(2)}\xB0F`;
  } else {
    return `${((min * 9) / 5 + 32).toFixed(2)}\xB0F - ${((max * 9) / 5 + 32).toFixed(2)}\xB0F `;
  }
};

export const getLocalStorage = () => JSON.parse(localStorage.getItem('favorites')) || [];
