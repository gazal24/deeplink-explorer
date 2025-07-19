import React from 'react';
import { PartnerCode } from '../types';
import { getPartnerFirebaseHost } from '../utils/firebaseConfig';

interface PartnerCodeSelectorProps {
  selectedPartner: PartnerCode;
  onPartnerSelect: (partner: PartnerCode) => void;
}

const PartnerCodeSelector: React.FC<PartnerCodeSelectorProps> = ({
  selectedPartner,
  onPartnerSelect
}) => {
  const partnerCodes: PartnerCode[] = [
    { name: 'Edhas', code: 'EDHS', baseUrl: 'https://upswing.access.partner', firebaseHost: getPartnerFirebaseHost('EDHS') || undefined },
    { name: 'Acme Corp', code: 'ACME', baseUrl: 'https://upswing.access.partner' },
    { name: 'Acme Corp 2', code: 'ACMT', baseUrl: 'https://upswing.access.partner' },
    { name: 'Acme Corp 3', code: 'ACM3' },
    { name: 'Acme Corp 4', code: 'ACM4' },
    { name: 'Tata Moneyfy', code: 'TCMF', baseUrl: 'https://upswing.access.partner' },
    { name: 'Tata Neu', code: 'TNEU' },
    { name: 'Stable Money', code: 'STBM', baseUrl: 'https://upswing.access.partner', firebaseHost: getPartnerFirebaseHost('STBM') || undefined },
    { name: 'Onsurity', code: 'ONSR' },
    { name: 'Moneycontrol', code: 'MNCT', baseUrl: 'https://www.moneycontrol.com' },
    { name: 'Ventura Wealth', code: 'VNTR', baseUrl: 'https://vw.ventura1.com/vwdeeplink/vw' },
    { name: 'UdChalo', code: 'UDCH', baseUrl: 'https://app.udchalo.com/app' },
    { name: 'Aditya Birla Capital', code: 'ADBC', baseUrl: 'https://adityabirlacapitaldigital.onelink.me/Ki2q/0iwyi6cy' },
    { name: 'Shivalik SFB (partner)', code: 'SHIV' },
    { name: 'SIB Bank (partner)', code: 'SIBB' },
    { name: 'Cred', code: 'CRED' },
    { name: 'AXIO (Capital Float)', code: 'AXCF', baseUrl: 'https://axio.co/deposits/' },
    { name: 'Motilal Oswal', code: 'MOTL', baseUrl: 'https://upswing.access.partner' },
    { name: 'India Gold', code: 'INDG' },
    { name: 'InCred Money', code: 'INCR', baseUrl: 'https://fd.incredmoney.com/platform/' },
    { name: 'Smallcase', code: 'SMLC', baseUrl: 'smallcase://upswing' },
    { name: 'SalarySe', code: 'SLRS', baseUrl: 'https://salaryse.com' },
    { name: 'Angel One', code: 'ANGL' },
    { name: 'Super Money', code: 'SPMY', baseUrl: 'https://super.money' },
    { name: 'Airtel Thanks', code: 'ARTL', baseUrl: 'myairtel://app/fd' },
    { name: 'Freo Money', code: 'FREO', baseUrl: 'https://freopay.onelink.me/yeJY/5suzafng' },
    { name: 'Moneyview', code: 'MNVW', baseUrl: 'mv://fd/upswing/' },
    { name: 'Zaggle', code: 'ZGGL' },
    { name: '50Fin', code: 'FTFN' },
    { name: 'PhonePe', code: 'PHPE' },
    { name: 'Fibe (EarlySalary)', code: 'FIBE', baseUrl: 'https://fibe.onelink.me/BuuV/cwn7z48q' },
    { name: 'Amazon', code: 'AMZN' },
    { name: 'Snapmint', code: 'SNMT' },
    { name: 'Oolka', code: 'OLKA' },
    { name: 'BharatFD', code: 'BHRF' },
    { name: 'BharatPe', code: 'BHPE' },
    { name: 'Vested Finance', code: 'VSTD', baseUrl: 'vestedapp://VestedYieldTabs/AltFD' },
    { name: 'Summup', code: 'SMMP', baseUrl: 'https://summup.in/app/us/pl' },
    { name: 'PowerUp', code: 'PWRP', baseUrl: 'powerup://powerup.money/upswing' },
    { name: 'Wint Wealth', code: 'WNTW', baseUrl: 'https://www.wintwealth.com/fixed-deposit/redirection' },
    { name: 'Wizmo (FPL.Tech OneCard)', code: 'WZMO', baseUrl: 'https://upswing.access.partner' },
    { name: 'Spice Money', code: 'SPCM' },
    { name: 'Vodafone', code: 'VDFN', baseUrl: 'https://myvi.in/VI_SHOP_FINANCE/' },
    { name: 'Paisabazaar', code: 'PSBZ', baseUrl: 'https://paisabazaarapp.onelink.me' },
    { name: 'altGraaf', code: 'AGRF', baseUrl: 'https://upswing.access.partner' },
    { name: 'Jiraaf', code: 'JIRF', baseUrl: 'https://upswing.access.partner' },
    { name: 'ET Money', code: 'ETMY' },
    { name: 'Dream 11', code: 'D11M', baseUrl: 'https://dream.money' },
    { name: 'Paytm Money', code: 'PYTM' },
    { name: 'Zerodha', code: 'ZRDH' },
    { name: 'INDmoney', code: 'INDM' },
    { name: 'Pirimid Tech', code: 'PRMD' },
    { name: 'One Percent Club', code: '1PRC' },
    { name: 'True Credits', code: 'TRCR' },
    { name: 'CASHe (FD)', code: 'CSHE', baseUrl: 'https://upswing.access.partner' },
    { name: 'CASHe (PL)', code: 'CSH2' }
  ];

  const handlePartnerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = event.target.value;
    const partner = partnerCodes.find(p => p.code === selectedCode);
    if (partner) {
      onPartnerSelect(partner);
    }
  };

  return (
    <div className="parameter-group">
      <label>Partner Code</label>
      
      <select 
        value={selectedPartner.code} 
        onChange={handlePartnerChange}
        className="parameter-select"
      >
        <option value="">Select Partner</option>
        {partnerCodes.map(partner => (
          <option key={partner.code} value={partner.code}>
            {partner.name} ({partner.code})
            {partner.firebaseHost && ` - Firebase: ${partner.firebaseHost}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PartnerCodeSelector;