import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import type { Repository } from "@/types";
import { calculatePopularLanguages } from "@/utils";

function UsedLanguages({ repositories }: { repositories: Repository[] }) {
  // Get the calculated data
  const popularLanguages = calculatePopularLanguages(repositories);

  // Chart options
  const chartConfig = {
    language: {
      label: "Language",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  // Returned JSX
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Used Languages
      </h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={popularLanguages}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="language" tickLine={true} tickMargin={10} />
          <YAxis dataKey="count" tickLine={false} tickMargin={10} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-language)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export default UsedLanguages;
