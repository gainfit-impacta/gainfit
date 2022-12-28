/**
 * @returns yyyy-mm-dd
 */
function getDate() {
  return new Date().toISOString().split("T")[0];
}

export { getDate };
