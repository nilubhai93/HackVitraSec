export function showToast(operation, id) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  // Set the text content of the toast based on the operation
  if (operation === "add") {
    toast.textContent = `Product added.`;
  } else {
    toast.textContent = `Product deleted.`;
  }

  document.body.appendChild(toast);

  // Automatically remove the toast after a few seconds
  setTimeout(() => {
    toast.remove();
  }, 2000);
}
