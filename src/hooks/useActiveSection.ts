import { useScrollStore } from "@/store/useScrollStore";
import { useEffect } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const setActiveSection = useScrollStore((state) => state.setActiveSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offsetMargin = 100;

      let currentSectionId = "";

      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (!section) continue;

        const sectionTop = section.offsetTop - offsetMargin;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSectionId = sectionIds[i];
          break; // kalau sudah ketemu, keluar dari loop
        }
      }

      // Panggil setter setelah loop selesai
      if (currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // jalankan sekali di awal

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, setActiveSection]);
};
