import cls from './Header.module.css';
import Image from 'next/image';
import { classNames } from '@/shared/lib/classNames/classNames';
import logoSvg from '@/shared/assets/images/icons/Logo.svg';
import PhoneSvg from '@/shared/assets/images/icons/phone.svg';

interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.logoWrapper, {}, [])}>
          <Image
            src={logoSvg}
            alt='logo'
            width={188}
            height={21}
            className={classNames(cls.logoIcon, {}, [])}
          />
        </div>
        <div className={classNames(cls.numberBlock)}>
          <Image
            src={PhoneSvg}
            alt='phone'
            width={40}
            height={40}
            className={classNames(cls.svg, {}, [])}
          />
          <div className={classNames(cls.text, {}, [])}>
            <p className={classNames(cls.number, {}, [])}>
              +7 (777) 707-37-97
            </p>
            <p className={classNames(cls.subtext, {}, [])}>
              Написать нам в Telegram
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}