import { useRouter } from "vue-router";

export function useNavigation() {
  const router = useRouter();

  const goToProducts = () => {
    router.push({ name: "products" });
  };

  return { goToProducts };
}
