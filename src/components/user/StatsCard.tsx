import { Card, CardTitle, CardDescription } from "../ui/card";

// Props type
type StatsCardProps = { title: string; count: number };

// The component
function StatsCard({ title, count }: StatsCardProps) {
  // Returned JSX
  return (
    <Card>
      <div className="flex flex-row justify-between items-center px-6">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{count}</CardDescription>
      </div>
    </Card>
  );
}

export default StatsCard;
