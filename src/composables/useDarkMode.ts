import { onMounted, ref, watchEffect } from "vue";

const saved = localStorage.getItem("dark-mode");
export const dark = ref<boolean>(
  saved === "true" ||
    (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
);
export function darkMode() {
  dark.value = !dark.value;
}

export function useDarkMode() {
  onMounted(() => {
    document.documentElement.classList.toggle("dark", dark.value);
  });

  watchEffect(() => {
    document.documentElement.classList.toggle("dark", dark.value);
    localStorage.setItem("dark-mode", dark.value.toString());
  });
  return { dark, darkMode };
}
