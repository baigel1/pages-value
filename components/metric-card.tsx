import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
}

export function MetricCard({ title, value }: MetricCardProps) {
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <div className="p-6 space-y-4">
        <h3 className="text-sm text-gray-600 font-medium">{title}</h3>
        <div className="text-4xl font-bold text-blue-900">{value}</div>
        <div className="h-1 bg-blue-600 rounded-full w-2/3"></div>
      </div>
    </Card>
  );
}

