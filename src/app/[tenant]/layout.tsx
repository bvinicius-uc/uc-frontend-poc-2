import Link from "next/link";

interface HomeLayoutProps {
  children: React.ReactNode;
  params: Promise<{ tenant: string }>;
}

export default async function HomeLayout({
  children,
  params,
}: HomeLayoutProps) {
  const { tenant } = await params;

  return (
    <div className="flex gap-4">
      <nav className="flex flex-col gap-2 p-4">
        <Link href={`/${tenant}/appearance`}>Appearance</Link>
        <Link href={`/${tenant}/configuration`}>Configuration</Link>
        <Link href={`/${tenant}/content`}>Content</Link>
        <Link href={`/${tenant}/scanning`}>Scanning</Link>
      </nav>
      <div className="flex-1 flex p-4">{children}</div>
    </div>
  );
}
