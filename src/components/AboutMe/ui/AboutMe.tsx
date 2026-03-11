 'use client';

import cls from './AboutMe.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';
import Image from 'next/image';
import { motion } from 'framer-motion';

import AboutMeImage from '@/shared/assets/images/hero/mainHero.jpg';
import { aboutMeData } from '../model/aboutMeData';
import Button from '@/shared/ui/Button/Button';
import ArrowSvg from '@/shared/assets/images/icons/arrow.svg';
import Circle from '@/shared/ui/Circle/Circle';
import Line from '@/shared/ui/Line/Line';

interface IAboutMeProps {
  className?: string;
}

export const AboutMe = ({ className }: IAboutMeProps) => {
  return (
    <motion.section
      className={classNames(cls.section, {}, [className ?? ''])}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      aria-label='Блок обо мне: Еркеева Александра'
    >
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.imageWrapper, {}, [])}>
          <Image
            src={AboutMeImage}
            alt='Картинка'
            className={classNames(cls.image, {}, [])}
          />
          <Circle
            className={classNames(cls.circle, {}, [])}
          />
        </div>
        <h2 className={classNames(cls.headingMobile, {}, [])}>
          Обо мне
        </h2>
        <motion.div
          className={classNames(cls.mainInfo, {}, [])}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <h2 className={classNames(cls.heading, {}, [])}>
            Обо <span className={classNames(cls.span, {}, [])}>мне</span>
          </h2>
          <div className={classNames(cls.main, {}, [])}>
            <p className={classNames(cls.text, {}, [])}>
              Меня зовут Еркеева (Чернышева) Александра — спортивный тренер и
              психолог с опытом работы более 10 лет. Помогаю теннисистам
              любого уровня обрести уверенность, устойчивость к стрессу и
              научиться получать удовольствие от каждой игры.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Button
              className={classNames(cls.button, {}, [])}
              type='button'
            >
              <Image
                className={classNames(cls.svg, {}, [])}
                src={ArrowSvg}
                alt='стрелка'
              />
              <p className={classNames(cls.textButton, {}, [])}>
                Записаться на консультацию
              </p>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
