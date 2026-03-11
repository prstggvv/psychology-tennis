import { quesData } from '../model/quesData';
import cls from './QuesSection.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';
import ArrowSvg from '@/shared/assets/images/icons/arrow.svg';
import Image from 'next/image';
import Line from '@/shared/ui/Line/Line';

interface IQuesSectionProps {
  className?: string;
}

export const QuesSection = ({ className }: IQuesSectionProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <h2 className={classNames(cls.heading, {}, [])}>
          Часто задаваемые{'\u00A0'}
          <span className={classNames(cls.span, {}, [])}>
            вопросы
          </span>
        </h2>
        <ul className={classNames(cls.list, {}, [])}>
          {quesData.map((c, i) => {
            return (
              <li
                className={classNames(cls.item, {}, [])}
                key={i}
              >
                <div className={classNames(cls.info, {}, [])}>
                  <h3 className={classNames(cls.number, {}, [])}>
                    {c.number}
                  </h3>
                  <p className={classNames(cls.ques, {}, [])}>
                    {c.ques}
                  </p>
                </div>
                <Image
                  className={classNames(cls.svg, {}, [])}
                  src={ArrowSvg}
                  alt='стрелка'
                />
              </li>
            )
          })}
        </ul>
        <Line />
      </div>
    </section>
  )
}