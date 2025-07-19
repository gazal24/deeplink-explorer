import yaml from 'js-yaml';
import { PartnerCode } from '../types';

export interface PartnerDefinition {
  partnerCode: string;
  name: string;
  baseUrl?: string;
}

class ConfigService {
  private partnersCache: PartnerCode[] | null = null;

  async loadPartners(): Promise<PartnerCode[]> {
    if (this.partnersCache) {
      return this.partnersCache;
    }

    try {
      // Load the YAML file
      const response = await fetch('/partner-definitions.yaml');
      if (!response.ok) {
        throw new Error(`Failed to load partner definitions: ${response.status}`);
      }
      
      const yamlText = await response.text();
      console.log('YAML text loaded, length:', yamlText.length);
      const partnerDefs = yaml.load(yamlText) as PartnerDefinition[];
      console.log('Parsed partner definitions:', partnerDefs?.length || 0, 'entries');
      
      if (!Array.isArray(partnerDefs)) {
        console.error('Partner definitions is not an array:', typeof partnerDefs);
        throw new Error('Invalid partner definitions format');
      }

      // Transform to PartnerCode format and validate
      this.partnersCache = partnerDefs.map(def => {
        if (!def.partnerCode || !def.name) {
          throw new Error(`Invalid partner definition: ${JSON.stringify(def)}`);
        }
        
        return {
          code: def.partnerCode,
          name: def.name,
          baseUrl: def.baseUrl
        };
      });

      // Add baseUrls from infrastructure config for partners that have them
      this.addInfrastructureBaseUrls();

      return this.partnersCache;
    } catch (error) {
      console.error('Error loading partner definitions:', error);
      console.error('Falling back to 3 partners due to YAML parsing failure');
      // Return fallback partners if loading fails
      return this.getFallbackPartners();
    }
  }

  private addInfrastructureBaseUrls(): void {
    if (!this.partnersCache) return;

    // Map of partner codes to their infrastructure baseUrls
    const infraBaseUrls: { [key: string]: string } = {
      'EDHS': 'https://upswing.access.partner',
      'ACME': 'https://upswing.access.partner',
      'ACMT': 'https://upswing.access.partner',
      'TCMF': 'https://upswing.access.partner',
      'MNCT': 'https://www.moneycontrol.com',
      'VNTR': 'https://vw.ventura1.com/vwdeeplink/vw',
      'UDCH': 'https://app.udchalo.com/app',
      'AXCF': 'https://axio.co/deposits/',
      'D11M': 'https://dream.money',
      'INCR': 'https://fd.incredmoney.com/platform/',
      'ADBC': 'https://adityabirlacapitaldigital.onelink.me/Ki2q/0iwyi6cy',
      'MOTL': 'https://upswing.access.partner',
      'SLRS': 'https://salaryse.com',
      'SMLC': 'smallcase://upswing',
      'FREO': 'https://freopay.onelink.me/yeJY/5suzafng',
      'SPMY': 'https://super.money',
      'ARTL': 'myairtel://app/fd',
      'FIBE': 'https://fibe.onelink.me/BuuV/cwn7z48q',
      'MNVW': 'mv://fd/upswing/',
      'VSTD': 'vestedapp://VestedYieldTabs/AltFD',
      'SMMP': 'https://summup.in/app/us/pl',
      'PWRP': 'powerup://powerup.money/upswing',
      'WNTW': 'https://www.wintwealth.com/fixed-deposit/redirection',
      'WZMO': 'https://upswing.access.partner',
      'VDFN': 'https://myvi.in/VI_SHOP_FINANCE/',
      'PSBZ': 'https://paisabazaarapp.onelink.me',
      'AGRF': 'https://upswing.access.partner',
      'JIRF': 'https://upswing.access.partner',
      'CSHE': 'https://upswing.access.partner',
      'FTFN': 'vestedapp://VestedYieldTabs/AltFD',
      'STBM': 'https://upswing.access.partner'
    };

    // Update partners with infrastructure baseUrls
    this.partnersCache = this.partnersCache.map(partner => ({
      ...partner,
      baseUrl: infraBaseUrls[partner.code] || partner.baseUrl
    }));
  }

  private getFallbackPartners(): PartnerCode[] {
    return [
      { name: 'Super Money', code: 'SPMY', baseUrl: 'https://super.money' },
      { name: 'Moneycontrol', code: 'MNCT', baseUrl: 'https://www.moneycontrol.com' },
      { name: 'Stable Money', code: 'STBM', baseUrl: 'https://upswing.access.partner' }
    ];
  }

  invalidateCache(): void {
    this.partnersCache = null;
  }
}

export const configService = new ConfigService();