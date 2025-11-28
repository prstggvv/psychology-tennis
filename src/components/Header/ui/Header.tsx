import cls from './Header.module.css';
import Image from 'next/image';
import { classNames } from '@/shared/lib/classNames/classNames';
import logoSvg from '@/shared/assets/images/icons/Logo.svg';

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
        <nav className={classNames(cls.nav, {}, [])}>
          <a
            className={classNames(cls.link, {}, [])}
            href='#'
          >
            Главная
          </a>
          <a
            className={classNames(cls.link, {}, [])}
            href='#'
          >
            Помидор
          </a>
          <a
            className={classNames(cls.link, {}, [])}
            href='#'
          >
            Статистика
          </a>
        </nav>
      </div>
    </header>
  )
}