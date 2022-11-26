import { ClientList } from '../../common/types/ClientList';
import { Client } from '../../schema/Client';

export interface ClientServiceInterface {
  saveClient(client: Client): Promise<boolean>;

  getAllClients(): Promise<ClientList>;
}
