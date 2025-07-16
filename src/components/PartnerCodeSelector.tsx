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
    { name: 'Edhas', code: 'EDHS', firebaseHost: getPartnerFirebaseHost('EDHS') || undefined },
    { name: 'Acme Corp', code: 'ACME' },
    { name: 'Acme Corp 2', code: 'ACMT' },
    { name: 'Acme Corp 3', code: 'ACM3' },
    { name: 'Acme Corp 4', code: 'ACM4' },
    { name: 'Tata Moneyfy', code: 'TCMF' },
    { name: 'Tata Neu', code: 'TNEU' },
    { name: 'Stable Money', code: 'STBM', firebaseHost: getPartnerFirebaseHost('STBM') || undefined },
    { name: 'Onsurity', code: 'ONSR' },
    { name: 'Moneycontrol', code: 'MNCT' },
    { name: 'Ventura Wealth', code: 'VNTR' },
    { name: 'UdChalo', code: 'UDCH' },
    { name: 'Aditya Birla Capital', code: 'ADBC' },
    { name: 'Shivalik SFB (partner)', code: 'SHIV' },
    { name: 'SIB Bank (partner)', code: 'SIBB' },
    { name: 'Cred', code: 'CRED' },
    { name: 'AXIO (Capital Float)', code: 'AXCF' },
    { name: 'Motilal Oswal', code: 'MOTL' },
    { name: 'India Gold', code: 'INDG' },
    { name: 'InCred Money', code: 'INCR' },
    { name: 'Smallcase', code: 'SMLC' },
    { name: 'SalarySe', code: 'SLRS' },
    { name: 'Angel One', code: 'ANGL' },
    { name: 'Super Money', code: 'SPMY' },
    { name: 'Airtel Thanks', code: 'ARTL' },
    { name: 'Freo Money', code: 'FREO' },
    { name: 'Moneyview', code: 'MNVW' },
    { name: 'Zaggle', code: 'ZGGL' },
    { name: '50Fin', code: 'FTFN' },
    { name: 'PhonePe', code: 'PHPE' },
    { name: 'Fibe (EarlySalary)', code: 'FIBE' },
    { name: 'Amazon', code: 'AMZN' },
    { name: 'Snapmint', code: 'SNMT' },
    { name: 'Oolka', code: 'OLKA' },
    { name: 'BharatFD', code: 'BHRF' },
    { name: 'BharatPe', code: 'BHPE' },
    { name: 'Vested Finance', code: 'VSTD' },
    { name: 'Summup', code: 'SMMP' },
    { name: 'PowerUp', code: 'PWRP' },
    { name: 'Wint Wealth', code: 'WNTW' },
    { name: 'Wizmo (FPL.Tech OneCard)', code: 'WZMO' },
    { name: 'Spice Money', code: 'SPCM' },
    { name: 'Vodafone', code: 'VDFN' },
    { name: 'Paisabazaar', code: 'PSBZ' },
    { name: 'altGraaf', code: 'AGRF' },
    { name: 'Jiraaf', code: 'JIRF' },
    { name: 'ET Money', code: 'ETMY' },
    { name: 'Dream 11', code: 'D11M' },
    { name: 'Paytm Money', code: 'PYTM' },
    { name: 'Zerodha', code: 'ZRDH' },
    { name: 'INDmoney', code: 'INDM' },
    { name: 'Pirimid Tech', code: 'PRMD' },
    { name: 'One Percent Club', code: '1PRC' },
    { name: 'True Credits', code: 'TRCR' },
    { name: 'CASHe (FD)', code: 'CSHE' },
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