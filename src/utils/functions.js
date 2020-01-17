export function truncate(input) {
  if (input.length > 150)
    return input.substring(0, 150) + '...';
  else
    return input;
};