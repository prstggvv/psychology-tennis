import './styles/index.css';
import { classNames } from "@/shared/lib/classNames/classNames";
import { Header } from "@/components/Header";
import { Hero } from '@/components/Hero';
import { AboutMe } from '@/components/AboutMe';
import { ProblemsSection } from '@/components/ProblemsSection';
import { QuesSection } from '@/components/QuesSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header />
        <Hero />
        <AboutMe />
        <ProblemsSection />
        <QuesSection />
        <Footer />
      </div>
    </div>
  );
}
