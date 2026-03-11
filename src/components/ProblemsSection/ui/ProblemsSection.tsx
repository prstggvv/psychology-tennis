'use client';

import cls from './ProblemsSection.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';
import { problemsData } from '../model/problemsData';
import { motion } from 'framer-motion';

interface IProblemsSectionProps {
  className?: string;
}

export const ProblemsSection = ({ className }: IProblemsSectionProps) => {
  return (
    <motion.section
      className={classNames(cls.section, {}, [className ?? ''])}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      aria-label='Секция с основными проблемами, которые решает спортивная психология'
    >
      <div className={classNames(cls.container, {}, [])}>
        <motion.div
          className={classNames(cls.upblock, {}, [])}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <h2 className={classNames(cls.heading, {}, [])}>
            Какие проблемы решит{' '}
            <span className={classNames(cls.span, {}, [])}>
              спортивная психология?
            </span>
          </h2>
          <p className={classNames(cls.description, {}, [])}>
            Многие теннисисты сталкиваются с выгоранием, страхом ошибки и
            потерей концентрации в важных моментах матча. Работа со
            спортивным психологом помогает вернуть удовольствие от игры и
            научиться стабильно показывать свой лучший теннис.
          </p>
        </motion.div>

        <motion.ul
          className={classNames(cls.list, {}, [])}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          {problemsData.map((c, index) => (
            <motion.li
              className={classNames(cls.item, {}, [])}
              key={c.number + index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h3 className={classNames(cls.number, {}, [])}>
                {c.number}
              </h3>
              <p className={classNames(cls.text, {}, [])}>
                {c.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  )
};
