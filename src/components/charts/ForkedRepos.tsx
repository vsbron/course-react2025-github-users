import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { type Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";

function ForkedRepos({ repositories }: { repositories: Repository[] }) {
  // Get the calculated data
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  // Chart options
  const chartConfig = {
    repo: {
      label: "Repo",
      color: "#facd12",
    },
  } satisfies ChartConfig;

  // Returned JSX
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Forked Repos</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={mostForkedRepos}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="repo"
            tickLine={true}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis dataKey="count" tickLine={false} tickMargin={10} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-repo)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export default ForkedRepos;
