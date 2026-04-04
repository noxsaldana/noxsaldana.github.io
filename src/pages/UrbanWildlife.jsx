import { Link } from 'react-router-dom'
import styles from './ArticlePage.module.css'

export default function UrbanWildlife() {
  return (
    <main className={styles.page}>
      <div className={styles.pageHero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>
            <Link to="/learning">Learning Center</Link>
            <span>›</span>
            Part II
          </p>
          <p className="section-eyebrow">Part II of III</p>
          <h1 className="section-title">
            Urban Wildlife: <span>Adapting</span> to a Changed World
          </h1>
          <div className="divider" />
        </div>
      </div>

      <div className={styles.articleBody}>
        <p className={styles.intro}>
          Nearly <strong>80% of the North American population</strong> now lives in urban areas —
          and many wildlife species have followed. Rather than retreating from development, dozens
          of species have colonized cities with remarkable success. Understanding how and why is
          essential to building effective coexistence strategies.
        </p>

        {/* Section 1 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Major Urban Species and Population Trends</h2>

          <div className={styles.speciesGrid}>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Raccoons</div>
              <p className={styles.speciesBody}>
                Among the most successful urban adapters on Earth. City population densities can
                reach over <strong>100 individuals per km²</strong> — up to 20 times higher than
                rural populations. Urban raccoons consume approximately 40% human-derived food.
                Research found urban raccoons have <strong>larger brain sizes</strong> relative to
                body size than their rural counterparts, suggesting genuine cognitive adaptation.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Coyotes</div>
              <p className={styles.speciesBody}>
                Now the <strong>top carnivores in most metropolitan areas</strong> across North
                America. They survive at higher rates in cities than in rural areas, where hunting
                and trapping are primary causes of mortality. They've adapted by becoming more
                nocturnal and using green spaces, golf courses, and cemeteries as travel corridors.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Red Foxes</div>
              <p className={styles.speciesBody}>
                Thrive in low-density residential suburbs. Urban home ranges (25–40 hectares) are
                far smaller than rural equivalents (80–90 hectares), reflecting concentrated food
                resources. A 2024 study found urban foxes shift to nighttime foraging to avoid
                humans.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Virginia Opossums</div>
              <p className={styles.speciesBody}>
                Population densities <strong>5–8 times greater</strong> in cities than rural areas,
                supported by diverse food sources including pet food, compost, and rodents. Despite
                their appearance, opossums are ecologically valuable scavengers.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Peregrine Falcons</div>
              <p className={styles.speciesBody}>
                A remarkable conservation success story. Nearly wiped out by DDT pesticides, these
                birds have rebounded dramatically — with cities playing a crucial role. Urban
                skyscrapers mimic the cliff faces they naturally nest on, and urban pigeon
                populations provide abundant prey.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Corvids (Crows, Ravens, Jays)</div>
              <p className={styles.speciesBody}>
                At least 30 corvid species occur regularly in urban environments.{' '}
                <strong>85% of studies document population increases</strong>; 64% report higher
                breeding success in cities. American crows recognize and remember individual human
                faces for years and pass this knowledge to offspring.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>White-tailed Deer</div>
              <p className={styles.speciesBody}>
                Reach extraordinarily high densities in suburbs — far exceeding natural carrying
                capacity. Their success is a double-edged sword: overabundance causes significant
                damage to plant communities and increases vehicle collision risk.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Reptiles &amp; Amphibians</div>
              <p className={styles.speciesBody}>
                The <strong>hidden losers</strong> of urbanization. Urban communities are 10–20%
                less species-rich than surrounding areas. Amphibians suffer most — they depend on
                specialized breeding habitats that development systematically destroys. Their
                decline is largely invisible to the public.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How Animals Adapt: Synurbization</h2>
          <p className={styles.sectionBody}>
            The process by which animals adjust to urban life is known as{' '}
            <strong>"synurbization"</strong> — encompassing behavioral, physiological, and
            ecological changes that allow species to thrive in human-dominated landscapes.
          </p>

          <p className={styles.sectionBody}>
            <strong>Behavioral changes</strong> include major diet shifts (urban wildlife consume
            substantially more human-derived food — an estimated 30% of calories in developed
            nations), temporal shifts toward nocturnal activity to avoid humans, reduced fear
            responses with shorter flight initiation distances, and smaller home ranges due to
            concentrated resources.
          </p>

          <p className={styles.sectionBody}>
            <strong>Cognitive and physiological changes</strong> are equally striking. Species with
            larger brains relative to body mass are significantly more successful at colonizing
            urban environments. Urban crows demonstrate superior memory and problem-solving compared
            to rural populations. However, higher-density living can increase parasite loads and
            disease transmission rates.
          </p>

          <div className={styles.callout}>
            <p>
              University of Wyoming research found urban raccoons have measurably{' '}
              <strong>larger relative brain sizes</strong> than rural raccoons — a documented
              evolutionary response to the complex demands of urban life.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Cities Have Become Wildlife Habitats</h2>
          <p className={styles.sectionBody}>
            Wildlife doesn't come to cities out of preference — many species come because they have
            nowhere else to go. But once in cities, several factors encourage them to stay:
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Reliable food:</strong> Garbage, pet food, compost, and deliberate human
              feeding create consistent nutrition unavailable in depleted natural habitats.
            </li>
            <li>
              <strong>Reduced predation:</strong> Natural predators are largely absent in cities.
              Combined with reduced hunting and trapping, urban survival rates for many
              mesopredators are higher than in rural areas.
            </li>
            <li>
              <strong>Shelter:</strong> Attics, crawlspaces, building ledges, storm drains, and
              landscaped green spaces provide adequate denning and nesting sites.
            </li>
            <li>
              <strong>Climate advantage:</strong> The urban heat island effect makes cities warmer
              than surrounding areas — improving winter survival for many species.
            </li>
            <li>
              <strong>Social learning:</strong> Young animals learn urban survival skills from
              their parents. Once established, intergenerational knowledge makes it self-reinforcing.
            </li>
          </ul>

          <p className={styles.sectionBody}>
            This trend will accelerate. America's metropolitan population is projected to grow 29%
            between 2000 and 2025, with future urban expansion consuming an additional{' '}
            <strong>11–33 million hectares</strong> of natural habitat by 2100.
          </p>
        </div>

        {/* Section 4 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Human-Wildlife Conflicts in the US</h2>

          <div className={styles.statGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>34%</div>
              <div className={styles.statLabel}>
                of suburban residents report some form of wildlife conflict
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>17%</div>
              <div className={styles.statLabel}>
                of those with conflicts consider it worth spending money to solve — suggesting
                prevention and education are far more effective than reactive management
              </div>
            </div>
          </div>

          <p className={styles.sectionBody}>
            Common conflict types include property damage (garbage, gardens, structural damage),
            pet predation by coyotes and foxes, disease transmission concerns, vehicle collisions
            with deer, raccoon and squirrel entry into homes, and bird-window collisions.
          </p>

          <div className={styles.callout}>
            <p>
              <strong>Important context:</strong> The public dramatically overestimates the risk of
              attack from urban carnivores. Coyote attacks on humans are rare; bear attacks in
              suburban settings are even rarer. Fear responses disproportionate to actual risk drive
              demand for lethal "solutions" that are both cruel and ineffective.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Public Perception Challenges</h2>
          <p className={styles.sectionBody}>
            Understanding public attitudes toward urban wildlife is essential to designing effective
            education programs. <strong>Fear is the dominant response</strong> to most wildlife
            encounters — especially with carnivores, snakes, and large mammals. This fear is often
            disconnected from actual risk and amplified by media sensationalism.
          </p>

          <p className={styles.sectionBody}>
            Key factors that shape tolerance include species identity (raptors and deer are
            generally viewed positively; raccoons, coyotes, and snakes negatively), prior
            experience, knowledge of species behavior, and how people attribute blame for conflicts.
          </p>

          <div className={styles.callout}>
            <p>
              Surveys consistently show that the public <strong>prefers nonlethal management</strong>{' '}
              methods and supports investment in wildlife education programs. This preference is a
              crucial foundation for community education work.
            </p>
          </div>
        </div>

        {/* Sources */}
        <div className={styles.sources}>
          <p className={styles.sourcesTitle}>Sources</p>
          <ul className={styles.sourcesList}>
            <li>
              Urban Wildlife Working Group —{' '}
              <a
                href="http://urbanwildlifegroup.org/urban-wildlife-information"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urban Wildlife Basics
              </a>
            </li>
            <li>
              Frontiers in Ecology and Evolution —{' '}
              <a
                href="https://www.frontiersin.org/journals/ecology-and-evolution/articles/10.3389/fevo.2023.1130075/full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urban Raccoon Adaptations
              </a>
            </li>
            <li>
              Cornell Lab of Ornithology —{' '}
              <a
                href="https://www.allaboutbirds.org/guide/Peregrine_Falcon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Peregrine Falcon Recovery
              </a>
            </li>
            <li>
              Metro Wilds —{' '}
              <a
                href="https://metrowilds.com/deer-in-urban-areas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deer in Urban Areas: Coexistence Challenges
              </a>
            </li>
            <li>
              Conservation Biology —{' '}
              <a
                href="https://conbio.onlinelibrary.wiley.com/doi/full/10.1111/csp2.13074"
                target="_blank"
                rel="noopener noreferrer"
              >
                Engaging Urban Residents in Mitigating Human-Wildlife Conflicts
              </a>
            </li>
            <li>
              PMC —{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7819564/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Evolutionary Consequences of Human-Wildlife Conflict in Cities
              </a>
            </li>
            <li>
              PMC —{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7693677/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Human-Wildlife Coexistence in Urban Wildlife Management
              </a>
            </li>
            <li>
              Nature Scitable —{' '}
              <a
                href="https://www.nature.com/scitable/knowledge/library/the-characteristics-causes-and-consequences-of-sprawling-103014747/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Characteristics, Causes and Consequences of Sprawling Development
              </a>
            </li>
          </ul>
        </div>

        {/* Article navigation */}
        <div className={styles.articleNav}>
          <Link to="/learning/habitat-loss" className="btn-secondary">
            ← Part I: Habitat Loss
          </Link>
          <Link to="/learning/humane-coexistence" className="btn-primary">
            Next: Humane Coexistence →
          </Link>
        </div>
      </div>
    </main>
  )
}
