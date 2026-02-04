import cls from './Hero.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';
import Image from 'next/image';

import HeroImage from '@/shared/assets/images/hero/mainHero.jpg';
import Button from '@/shared/ui/Button/Button';
import ArrowSvg from '@/shared/assets/images/icons/arrow.svg';

interface IHeroProps {
  className?: string;
}

export const Hero = ({ className }: IHeroProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.imageWrapper, {}, [])}>
          <Image
            src={HeroImage}
            alt='Главное фото'
            className={classNames(cls.image, {}, [])}
          />
        </div>
        <div className={classNames(cls.mainInfo, {}, [])}>
          <h1 className={classNames(cls.title, {}, [])}>
            Еркеева Александра
          </h1>
          <div className={classNames(cls.subBlock, {}, [])}>
            <p className={classNames(cls.subtitle, {}, [])}>
              Теннисный тренер-психолог
            </p>
            <Button
              className={classNames(cls.button, {}, [])}
              type='button'
            >
              <Image
                className={classNames(cls.svg, {}, [])}
                src={ArrowSvg}
                alt='стрелка'
              />
              <p className={classNames(cls.text, {}, [])}>
                Наш зал
              </p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}