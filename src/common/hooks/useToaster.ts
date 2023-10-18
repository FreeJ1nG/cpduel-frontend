import { useCallback, useMemo } from 'react';

import {
  ToasterConfig,
  useToasterContext,
} from '@/common/contexts/toasterContext';

export interface UseToasterFeatures {
  launch: (config: ToasterConfig) => void;
}

export default function useToaster(): UseToasterFeatures {
  const { setConfig } = useToasterContext();

  const launch = useCallback(
    (config: ToasterConfig) => {
      if (setConfig) setConfig(config);
    },
    [setConfig],
  );

  return useMemo(() => ({ launch }), [launch]);
}
