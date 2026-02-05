import Button from '@/shared/ui/Button/Button';
import cls from './ProblemsSection.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';
import { problemsData } from '../model/problemsData';

interface IProblemsSectionProps {
  className?: string;
}

export const ProblemsSection = ({ className }: IProblemsSectionProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.upblock, {}, [])}>
          <h2 className={classNames(cls.heading, {}, [])}>
            Какие проблемы решит{'\u00A0'}
            <span className={classNames(cls.span, {}, [])}>
              спортивная{'\u00A0'}психология?
            </span>
          </h2>
          <Button
            className={classNames(cls.button, {}, [])}
            type='button'
            children={`Получить${'\u00A0'}консультацию`}
          />
        </div>
        <ul className={classNames(cls.list, {}, [])}>
          {problemsData.map((c, i) => {
            return (
              <li className={classNames(cls.item, {}, [])}>
                <h3 className={classNames(cls.number, {}, [])}>
                  {c.number}
                </h3>
                <p className={classNames(cls.text, {}, [])}>
                  {c.text}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
};
