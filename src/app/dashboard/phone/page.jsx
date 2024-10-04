import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./dashboard.moduls.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  ChartNoAxesColumn,
  SendHorizontal,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex h-[100vh] justify-center items-center align-middle">
        <ModeToggle>Toggle</ModeToggle>
        <p>Ronit</p>
      </div>
      <div className="menu_dock_container">
        <Card className="menu_dock">
          <TooltipProvider>
            
            <Tooltip className="Tooltip">
              <TooltipTrigger className="menu_dock_item bg-primary text-primary-foreground">
                  <LayoutDashboard />
              </TooltipTrigger>
              <TooltipContent>
                <p>Dashboard</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip className="Tooltip">
              <TooltipTrigger className="menu_dock_item bg-primary text-primary-foreground">
                  <BriefcaseBusiness />
              </TooltipTrigger>
              <TooltipContent>
                <p>Projects</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip className="Tooltip">
              <TooltipTrigger className="menu_dock_item bg-primary text-primary-foreground">
                  <ChartNoAxesColumn />
              </TooltipTrigger>
              <TooltipContent>
                <p>Analysis</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip className="Tooltip">
              <TooltipTrigger className="menu_dock_item bg-primary text-primary-foreground">
                  <SendHorizontal />
              </TooltipTrigger>
              <TooltipContent>
                <p>Messages</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Card>
      </div>
    </>
  );
}
