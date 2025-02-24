import { WhatsappLogo } from 'phosphor-react'
import styles from './Home.module.css'
import { Stat } from './Stat'

export function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.background}>
        <div className={styles.content}>
          <h2>BOAS-VINDAS A IMÃ FASHION</h2>
          <p>
            Desejamos que você tenha uma experiência incrível e encantadora na
            nossa loja Online!
          </p>
          <a href="#contato" className={styles.button}>
            Entre em contato
          </a>
        </div>
      </div>

      <div className={styles.stats}>
        <Stat
          tittle={'Frete'}
          paragraph={'Frete Off para compras acima de R$200'}
        />
        <Stat
          tittle={'Parcelamento'}
          paragraph={'Parcelamos em até 6x sem juros'}
        />
        <Stat
          tittle={'Loja Segura'}
          paragraph={'Loja segura para suas compras e dados'}
        />
      </div>
    </section>
  )
}
