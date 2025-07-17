import { IconPrajuritDashboard } from "@/components/icons/dashboard/prajurit";
import DashboardCard from "../_components/dashboard-card";
import { IconPenilaiDashboard } from "@/components/icons/dashboard/penilai";
import { IconPrajuritBelumDinilai } from "@/components/icons/dashboard/prajurit-belum-dinilai";
import { IconRerataPrajurit } from "@/components/icons/dashboard/rerata-prajurit";
import { IconPrajuritTelahDinilai } from "@/components/icons/dashboard/prajurit-telah-dinilai";

export default function DashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <DashboardCard
          title="Total Prajurit"
          value="20"
          icon={<IconPrajuritDashboard />}
        />

        <DashboardCard
          title="Jumlah Penilai"
          value="10"
          icon={<IconPenilaiDashboard />}
        />

        <DashboardCard
          title="Prajurit Telah Dinilai"
          value="20"
          icon={<IconPrajuritTelahDinilai />}
        />

        <DashboardCard
          title="Prajurit Belum Dinilai"
          value="10"
          icon={<IconPrajuritBelumDinilai />}
        />

        <DashboardCard
          title="Nilai Rerata Prajurit"
          value="80"
          icon={<IconRerataPrajurit />}
        />
      </div>
    </div>
  );
}
