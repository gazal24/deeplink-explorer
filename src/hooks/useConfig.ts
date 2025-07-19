import { useState, useEffect } from 'react';
import { PartnerCode } from '../types';
import { configService } from '../services/ConfigService';

export interface UseConfigResult {
  partners: PartnerCode[];
  loading: boolean;
  error: string | null;
  reload: () => void;
}

export const useConfig = (): UseConfigResult => {
  const [partners, setPartners] = useState<PartnerCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadConfig = async () => {
    try {
      setLoading(true);
      setError(null);
      const loadedPartners = await configService.loadPartners();
      setPartners(loadedPartners);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load configuration');
      console.error('Failed to load configuration:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConfig();
  }, []);

  const reload = () => {
    configService.invalidateCache();
    loadConfig();
  };

  return {
    partners,
    loading,
    error,
    reload
  };
};