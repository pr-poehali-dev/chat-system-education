import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const isQuietHours = (): boolean => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 20 || hours < 7;
};

const QuietHoursIndicator = () => {
  const [inQuietHours, setInQuietHours] = useState(isQuietHours());

  useEffect(() => {
    // Обновляем статус тихого часа каждую минуту
    const interval = setInterval(() => {
      setInQuietHours(isQuietHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!inQuietHours) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="secondary" className="bg-amber-100 text-amber-800 flex items-center gap-1 ml-2">
            <AlertCircle className="h-3 w-3" />
            <span>Тихий час</span>
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Сейчас действует "тихий час" (20:00-7:00).</p>
          <p>Входящие сообщения будут получены без звуковых уведомлений.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default QuietHoursIndicator;
