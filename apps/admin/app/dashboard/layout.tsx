import { AppLayout } from "@iam/ui"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppLayout>{children}</AppLayout>
}
