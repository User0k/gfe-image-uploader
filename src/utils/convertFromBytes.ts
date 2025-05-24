export function convertFromBytes(size: number) {
  const sizeInKbs = +(size / 1024).toFixed(2);
  if (sizeInKbs < 1024) return sizeInKbs + " KB";

  return (size / 1024 / 1024).toFixed(2) + " MB";
}
