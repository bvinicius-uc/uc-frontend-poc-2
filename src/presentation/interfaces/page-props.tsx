export interface TenantPageProps {
  params: Promise<{
    tenant: string;
  }>;
  searchParams: Promise<{
    host: string;
  }>;
}
