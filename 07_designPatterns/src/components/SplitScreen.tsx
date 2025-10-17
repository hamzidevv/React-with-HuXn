import type { ReactNode } from "react";

interface SplitScreenProps {
  children: [ReactNode, ReactNode];
  leftWidthProp: number;
  rightWidthProp: number;
}

const SplitScreen = ({
  children,
  leftWidthProp,
  rightWidthProp,
}: SplitScreenProps) => {
  const [left, right] = children;
  const leftWidth = `${leftWidthProp}rem`;
  const rightWidth = `${rightWidthProp}rem`;

  return (
    <section className="flex w-screen">
      <div style={{ width: leftWidth }}>{left}</div>
      <div style={{ width: rightWidth }}>{right}</div>
    </section>
  );
};

export default SplitScreen;
