import { TenantPageProps } from "@/presentation/interfaces/page-props";
import HomeView from "@/presentation/views/HomeView";

export default async function TenantController(props: TenantPageProps) {
  const params = await props.params;

  const { tenant } = params;

  return <HomeView tenant={tenant} />;
}
