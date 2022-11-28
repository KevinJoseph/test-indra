import { Planet } from '../../schema/Planet';

export interface PlanetServiceInterface {
  getPlanetById(id: number): Promise<Planet>;
}
