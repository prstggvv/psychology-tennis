import cls from './Footer.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';
import VkSvg from '@/shared/assets/images/icons/footer/vk.svg';
import TelegramSvg from '@/shared/assets/images/icons/footer/telegram.svg';
import WhatsAppSvg from '@/shared/assets/images/icons/footer/whatsup.svg';
import Image from 'next/image';

interface IFooterProps {
  className?: string;
}

export const Footer = ({ className }: IFooterProps) => {
  return (
    <footer className={classNames(cls.footer, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.mainInfo, {}, [])}>
          <h2 className={classNames(cls.heading, {}, [])}>
            Связь со мной
          </h2>
          <nav className={classNames(cls.links, {}, [])}>
            <a className={classNames(cls.link, {}, [])}>
              <Image
                src={VkSvg}
                alt='vk'
                className={classNames(cls.svg, {}, [])}
              />
            </a>
            <a className={classNames(cls.link, {}, [])}>
              <Image
                src={WhatsAppSvg}
                alt='vk'
                className={classNames(cls.svg, {}, [])}
              />
            </a>
            <a className={classNames(cls.link, {}, [])}>
              <Image
                src={TelegramSvg}
                alt='vk'
                className={classNames(cls.svg, {}, [])}
              />
            </a>
          </nav>
        </div>
        <div className={classNames(cls.mainInfo, {}, [])}>
          <h3 className={classNames(cls.heading, {}, [])}>
            Про теннис
          </h3>
          <p className={classNames(cls.heading, {}, [])}>
            Сделал @prstggvv
          </p>
        </div>
      </div>
    </footer>
  )
}