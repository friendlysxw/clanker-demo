export type Token = {
  id: number;
  created_at: Date;
  tx_hash: string;
  contract_address: string;
  requestor_fid: number;
  name: string;
  symbol: string;
  img_url: string;
  pool_address: string;
  cast_hash: string;
  type: string;
};

export type TopVolumeItem = {
  name: string;
  symbol: string;
  price: string;
  change: string;
  volume: string;
  marketCap: string;
};
