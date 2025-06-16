import { Course } from '../types';
import { algebra1Data } from './algebra1Data';
import { geometryData } from './geometryData';
import { algebra2Data } from './algebra2Data';
import { precalculusData } from './precalculusData';
import { statisticsData } from './statisticsData';

export const mockCourses: Course[] = [
  algebra1Data,
  geometryData,
  algebra2Data,
  precalculusData,
  statisticsData
];

// Export individual course data for direct access if needed
export {
  algebra1Data,
  geometryData,
  algebra2Data,
  precalculusData,
  statisticsData
};