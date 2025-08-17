"use client";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollStore } from "@/store/useScrollStore";
import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const activeSection = useScrollStore((state) => state.activeSection);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Mugiwara", href: "#mugiwara" },
    { name: "The Crew", href: "#crew" },
    { name: "Wanted List", href: "#bounties" },
    { name: "Story Log", href: "#story" },
  ];

  const sectionIds = navigation.map((item) => item.href.replace("#", ""));
  useActiveSection(sectionIds);

  // nav item decoration
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [underlinePos, setUnderlinePos] = useState({
    bottom: 0,
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const activeEl = navRefs.current[activeSection];

    if (activeEl) {
      const rect = activeEl.getBoundingClientRect();
      const parentRect =
        activeEl.parentElement?.parentElement?.getBoundingClientRect();

      if (parentRect) {
        setUnderlinePos({
          bottom: rect.bottom - parentRect.bottom,
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  }, [activeSection]);

  return (
    <Disclosure
      as="nav"
      className="bg-custom-white-sail/50 fixed w-screen py-2 px-4 lg:px-10 backdrop-blur-3xl z-50"
    >
      {({ open }) => (
        <>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image
              src="/img/icon.png"
              alt="Mugiwara Jolly Roger"
              width={56}
              height={56}
              draggable={false}
              unoptimized
              priority
            />

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center relative">
              <ul className="flex space-x-3">
                {navigation.map(({ name, href }) => {
                  const sectionId = href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={name}>
                      <a
                        href={href}
                        ref={(el) => {
                          navRefs.current[sectionId] = el;
                        }}
                        className={`${
                          isActive
                            ? "text-custom-pirate-red"
                            : "text-custom-white-sail"
                        } inline-block px-4 py-2 text-lg font-bold hover:text-custom-pirate-red transition-colors duration-200`}
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* underline decoration */}
              <div
                className="absolute w-24 h-1 bottom-0 rounded bg-custom-pirate-red transition-all duration-100"
                style={{
                  transform: `translateX(${underlinePos.left}px)`,
                  width: `${underlinePos.width}px`,
                }}
              ></div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Disclosure.Button
                className="p-2 text-custom-white-sail hover:text-custom-pirate-red transition-colors"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <Disclosure.Panel className="lg:hidden mt-3 relative">
            <ul className="flex flex-col space-y-2">
              {navigation.map(({ name, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <li key={name}>
                    <a
                      href={href}
                      className={`${
                        isActive
                          ? "text-custom-pirate-red"
                          : "text-custom-white-sail"
                      } block px-4 py-2 text-lg font-bold hover:text-custom-pirate-red transition-colors duration-200`}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
