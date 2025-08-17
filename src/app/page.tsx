import { Bounties } from "@/components/Home-Components/Bounties";
import { Crews } from "@/components/Home-Components/Crews";
import { Hero } from "@/components/Home-Components/Hero";
import { Mugiwara } from "@/components/Home-Components/Mugiwara";
import { Stories } from "@/components/Home-Components/Story";

export default function Home() {
  return (
    <>
      <Hero />

      <Mugiwara />

      <Crews />

      <Bounties />

      <Stories />
    </>
  );
}
