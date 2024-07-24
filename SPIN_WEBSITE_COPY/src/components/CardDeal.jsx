import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"
const CardDeal = () => (

  <section className="">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Many benefits await <br className="sm:block hidden"/> for a SPIN appointed insurance agent.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We’re Always Adapting and We’re Committed to Our Agency Partners 
       
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]  m" />

    </div>
  </section>

  )


export default CardDeal 