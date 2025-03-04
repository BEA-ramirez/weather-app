export interface WeatherCardProps {
  property: string;
  icon: string;
  children: React.ReactNode;
}

export interface MobileCardProps {
  property: string;
  unit: string;
  value: number;
}

export interface HourlyForecastProps {
  time: string;
  icon: string;
  condition: string;
}

export interface WeeklyForecastProps {
  maxTemp_c: number;
  minTemp_c: number;
  day: string;
  icon: string;
  condition: string;
  chance: number;
}

export interface TemperatureProps {
  feelsLike_c: number;
  time: string;
}

export interface PageProps {
  activeTab: number;
  setActiveTab: (num: number) => void;
}
