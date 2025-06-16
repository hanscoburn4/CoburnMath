import { Calculator, Triangle, FunctionSquare as FunctionIcon, Waves, BarChart3, BookOpen } from 'lucide-react';

export const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    Calculator,
    Triangle,
    Function: FunctionIcon,
    Waves,
    BarChart3,
    BookOpen
  };
  
  return iconMap[iconName] || BookOpen;
};