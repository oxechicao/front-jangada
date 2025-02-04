"use client";

interface ClientSideProps {
  children: React.ReactNode;
}

export default function ClientSide(props: ClientSideProps) {
  return <>{props.children}</>;
}
