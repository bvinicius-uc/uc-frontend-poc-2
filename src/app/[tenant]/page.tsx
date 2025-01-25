import { TenantPageProps } from "@/presentation/interfaces/page-props";

export default async function IndexController(props: TenantPageProps) {
  const params = await props.params;
  const { tenant } = params;

  return <h1>Hello {tenant}!</h1>;
}
