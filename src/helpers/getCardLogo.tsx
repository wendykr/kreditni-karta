import logoVisa from '/logo-visa.svg';
import logoAmerican from '/logo-american-express.svg';
import logoDiners from '/logo-diners-club.svg';
import logoDiscover from '/logo-discover.svg';
import logoMaster from '/logo-mastercard.svg';

export const getCardLogo = (first: string) => {
  if (/^(4)/.test(first)) {
    return <img className="logo" src={logoVisa} alt="Visa" />;
  }
  if (/^(34|37)/.test(first)) {
    return <img className="logo" src={logoAmerican} alt="American Express" />;
  }
  if (/^(36|55)/.test(first)) {
    return <img className="logo" src={logoDiners} alt="Diners Club" />;
  }
  if (/^(65|644|645|646|647|648|649|6011)/.test(first)) {
    return <img className="logo" src={logoDiscover} alt="Discover" />;
  }
  if (/^(51|52|53|54|55|222[1-9]|22[3-9][0-9]|23[0-9]{2}|24[0-9]{2}|25[0-9]{2}|26[0-9]{2}|270[0-9]|271[0-9]|2720)/.test(first)) {
    return <img className="logo" src={logoMaster} alt="MasterCard" />;
  }
  return null;
};