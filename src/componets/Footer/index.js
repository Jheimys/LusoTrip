
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

import './Footer.css'


export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape__icones">
        <a
          href="https://www.facebook.com/jheimys.bassani.3"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a
          href="https://twitter.com/aluraonline?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a
          href="https://instagram.com/jheimysbassani?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p className="rodape__paragrafo">Desenvolvido by James</p>
    </footer>
  );
}