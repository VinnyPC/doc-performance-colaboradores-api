import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Facilidade no Acompanhamento de Desempenho",
    Svg: require("@site/static/img/icons8-performance-100.svg").default,
    description: (
      <>
        Os colaboradores podem visualizar suas avaliações e médias finais de
        forma centralizada, permitindo um acompanhamento claro de sua evolução
        profissional.
      </>
    ),
  },
  {
    title: "Feedback Transparente",
    Svg: require("@site/static/img/icons8-comments-96.svg").default,
    description: (
      <>
        A API fornece avaliações detalhadas por comportamento e desafio,
        ajudando o colaborador a entender seus pontos fortes e áreas de melhoria
        com base em dados reais.
      </>
    ),
  },
  {
    title: "Crescimento Profissional Orientado a Dados",
    Svg: require("@site/static/img/icons8-positive-dynamic-96.svg").default,
    description: (
      <>
        Com as médias e notas finais consolidadas, o usuário tem insights
        precisos sobre seu desempenho, o que favorece planos de desenvolvimento
        personalizados e metas mais objetivas.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
