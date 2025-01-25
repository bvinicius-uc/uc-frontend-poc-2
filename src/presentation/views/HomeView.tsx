"use client";
import { useAppInit } from "../hooks/useAppInit";

export interface HomeViewProps {
  tenant: string;
}

export default function HomeView({ tenant }: HomeViewProps) {
  useAppInit(tenant);

  return <h1>Hello {tenant}</h1>;
}
