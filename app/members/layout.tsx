import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Board & Members | Nagarjuna ICT Club",
  description:
    "Meet the executive committee tenures and passionate student members driving innovation at Nagarjuna ICT Club.",
};

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
