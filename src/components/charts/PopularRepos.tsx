import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { type Repository } from "@/types";
import { calculateMostStarredRepos } from "@/utils";

function PopularRepos({ repositories }: { repositories: Repository[] }) {
  // Get the calculated data
  const popularRepos = calculateMostStarredRepos(repositories);

  // Chart options
  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#e11c47",
    },
  } satisfies ChartConfig;

  // Returned JSX
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Popular Repos</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={popularRepos}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="repo" tickLine={true} tickMargin={10} />
          <YAxis dataKey="stars" tickLine={false} tickMargin={10} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="stars" fill="var(--color-repo)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export default PopularRepos;
