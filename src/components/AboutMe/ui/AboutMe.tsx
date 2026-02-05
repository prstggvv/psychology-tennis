import cls from './AboutMe.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';
import Image from 'next/image';

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
    <section className={classNames(cls.section, {}, [className ?? ''])}>
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
        <div className={classNames(cls.mainInfo, {}, [])}>
          <h2 className={classNames(cls.heading, {}, [])}>
            Обо <span className={classNames(cls.span, {}, [])}>мне</span>
          </h2>
          <div className={classNames(cls.main, {}, [])}>
            <p className={classNames(cls.text, {}, [])}>
              Меня зовут Еркеева (Чернышева) Александра и я являюсь не
              только спортивным тренером с опытом в работы в 10 лет,
              но и спортивным психологом
            </p>
          </div>
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
              Записаться
            </p>
          </Button>
        </div>
        <Line />
      </div>
    </section>
  )
}
