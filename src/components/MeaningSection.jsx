import { motion } from 'framer-motion'
import './MeaningSection.css'

const letters = [
  { l: 'ه', text: 'هدوءك اللي بيطمّني، وحنيتك اللي بتحتويني' },
  { l: 'ا', text: 'أمان قلبي، وأحلى حاجة ربنا رزقني بيها' },
  { l: 'ج', text: 'جمال روحك قبل شكلك، وجمال أخلاقك قبل كل حاجة' },
  { l: 'ر', text: 'رحمة وطيبة قلب.. وربنا يعوّضك بكل خير' },
]

export default function MeaningSection() {
  return (
    <section className="meaning-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">معنى اسمك</span>
        <h2 className="section-title">هاجر.. اسم ليه حكاية</h2>
        <p className="section-subtitle">
          هاجر من الهجرة، وهو اسم السيدة هاجر أم سيدنا إسماعيل عليه السلام،
          مثال الصبر والتوكل على ربنا، اللي ربنا عوّضها بزمزم وبالخير الكتير ♥
        </p>
        <p className="meaning-letters-intro">
          وكل حرف في اسمك ليه معنى عندي..
        </p>
      </motion.div>

      <div className="meaning-grid">
        {letters.map((item, i) => (
          <motion.div
            key={i}
            className="meaning-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="meaning-letter">{item.l}</span>
            <span className="meaning-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
