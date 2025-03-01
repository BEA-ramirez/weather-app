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
