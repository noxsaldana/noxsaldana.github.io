import { Link } from 'react-router-dom'
import styles from './ArticlePage.module.css'

export default function HumaneCoexistence() {
  return (
    <main className={styles.page}>
      <div className={styles.pageHero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>
            <Link to="/learning">Learning Center</Link>
            <span>›</span>
            Part III
          </p>
          <p className="section-eyebrow">Part III of III</p>
          <h1 className="section-title">
            Living With Wildlife: <span>A Humane Approach</span>
          </h1>
          <div className="divider" />
        </div>
      </div>

      <div className={styles.articleBody}>
        <p className={styles.intro}>
          When wildlife and humans come into conflict, the instinct is often to remove or eliminate
          the "problem" animal. But decades of research show that lethal and relocation-based
          control methods almost always fail — and that humane coexistence strategies are more
          effective, more ethical, and more sustainable.
        </p>

        {/* Section 1 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            The Hidden Danger of Rodenticides
          </h2>
          <p className={styles.sectionBody}>
            Anticoagulant rodenticides — the active ingredient in most rat and mouse poisons sold
            at hardware stores — are among the most ecologically destructive substances routinely
            used in American communities. <strong>They do not stay where they are placed.</strong>
          </p>

          <p className={styles.sectionBody}>
            A rodent that ingests poison does not die immediately. It continues moving for several
            days — becoming slow, disoriented, and easy prey. Predators and scavengers that eat
            these poisoned animals absorb the toxins themselves. Because predators eat many
            poisoned animals, toxins <strong>bioaccumulate</strong> — building up in concentration
            at each level of the food chain.
          </p>

          <div className={styles.statGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>42%</div>
              <div className={styles.statLabel}>
                of raptors died from secondary poisoning after consuming brodifacoum-poisoned prey
                in EPA laboratory experiments
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>70%</div>
              <div className={styles.statLabel}>
                of northern spotted owls (federally threatened) tested positive for rat poison
                exposure
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>
                of common ravens tested showed rodenticide exposure; 95% of turkey vultures
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>77%</div>
              <div className={styles.statLabel}>
                of non-game mammals — including mountain lions, bobcats, coyotes, raccoons, and
                foxes — tested positive for anticoagulant rodenticide exposure
              </div>
            </div>
          </div>

          <p className={styles.sectionBody}>
            Even when rodenticides don't kill outright, they cause serious harm: immune system
            dysfunction, decreased reproductive success, and complex organ damage documented in
            free-ranging bobcats, coyotes, and other predators.
          </p>

          <div className={styles.callout}>
            <p>
              Anticoagulant rodenticides have been detected in geckos, shellfish, ants, cockroaches,
              and beetles — demonstrating how thoroughly these toxins infiltrate entire ecosystems.
              In 2024, <strong>Flaco</strong> — the beloved Eurasian eagle-owl who escaped from the
              Central Park Zoo — died with rat poison detected in his system.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Lethal Control Methods Fail</h2>
          <p className={styles.sectionBody}>
            Removing or killing a "problem" animal is understandable — but the science is
            consistent: lethal and relocation-based control methods almost always fail to solve the
            underlying problem.
          </p>

          <div className={styles.statGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>97%</div>
              <div className={styles.statLabel}>
                of relocated gray squirrels died or disappeared within 88 days of release
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>82%</div>
              <div className={styles.statLabel}>
                mortality documented in a Wisconsin study of translocated white-tailed deer
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>20 days</div>
              <div className={styles.statLabel}>
                average time for western rattlesnakes to return to their original capture site after
                relocation
              </div>
            </div>
          </div>

          <p className={styles.sectionBody}>
            When an animal is removed from an area, another animal typically moves in to fill the
            vacancy. Without addressing the <strong>root cause</strong> — the food source, the
            entry point, the attractant — the conflict simply continues with new animals. This is
            why lethal control without behavior change is fundamentally ineffective.
          </p>

          <p className={styles.sectionBody}>
            Removing or killing a parent animal in spring or summer leaves dependent young to
            starve or emerge disoriented, escalating the conflict rather than resolving it.
            Relocated animals also risk spreading diseases to wildlife already living in relocation
            sites.
          </p>
        </div>

        {/* Section 3 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Proven Humane Strategies by Species</h2>

          <div className={styles.speciesGrid}>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Coyotes</div>
              <p className={styles.speciesBody}>
                The most effective strategy is <strong>hazing</strong> — teaching coyotes to
                associate humans with discomfort. Techniques include yelling and waving arms,
                throwing sticks or pinecones near (not at) the animal, or using an air horn. The
                more consistently hazing is applied across a neighborhood, the more effective it
                becomes. Remove attractants: secure trash cans, never leave pet food outside, pick
                up fallen fruit. Keep pets indoors at night.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Raccoons</div>
              <p className={styles.speciesBody}>
                The most effective long-term strategy is <strong>exclusion</strong> — physically
                preventing access — combined with removing food attractants. Seal all entry points
                with heavy-gauge wire mesh or metal flashing; close off attic vents, chimneys, and
                crawl spaces with no gaps larger than 0.5 inches. Secure trash cans; remove bird
                feeders at night. Use natural repellents (hot pepper, garlic, peppermint oil) and
                motion-activated deterrents.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Deer</div>
              <p className={styles.speciesBody}>
                Choose plants rated "rarely damaged" or "seldom severely damaged" from Rutgers
                Cooperative Extension's deer resistance ratings. Fencing must be a minimum of{' '}
                <strong>7–8 feet high</strong> with no more than 6"×6" gaps, extending to the
                ground. Use cylindrical wire guards around young trees. Place thorny shrubs at
                garden perimeters.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Birds — Window Collisions</div>
              <p className={styles.speciesBody}>
                Window collisions are the <strong>second leading cause of bird death</strong> in
                the US, killing an estimated 1 billion birds annually. Effective prevention:
                CollidEscape film (99% effective), Feather Friendly DIY tape, or UV decals placed
                with no more than 4"×2" gaps. Place feeders either within 2 feet of a window or
                more than 30 feet away. Turn off unnecessary lights at night, especially during
                spring and fall migration.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Snakes &amp; Reptiles</div>
              <p className={styles.speciesBody}>
                Fear of snakes results in the unnecessary killing of ecologically valuable, typically
                harmless animals. Snakes control rodent populations and maintain ecosystem balance.
                Correct identification dramatically reduces fear; in areas with venomous species,
                leave identification to professionals. Capture and release using snake hooks or bags
                is the most humane removal method.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>Opossums, Foxes &amp; Skunks</div>
              <p className={styles.speciesBody}>
                These animals provide significant ecological services — opossums scavenge decaying
                matter; skunks forage for grubs providing natural pest control. Block potential
                entry points with heavy wire mesh; keep garbage and compost bins securely covered;
                never leave pet food outside overnight. Use motion-activated lights or sprinklers
                as deterrents.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Wildlife-Proofing Your Home</h2>
          <p className={styles.sectionBody}>
            The most effective and humane approach to preventing wildlife conflict starts{' '}
            <strong>before</strong> animals enter a home:
          </p>

          <ul className={styles.list}>
            <li>Install animal-proof mesh over vents, eaves, and roofline gaps</li>
            <li>Apply chew-resistant materials on vulnerable structural points</li>
            <li>Install chimney caps</li>
            <li>
              Use <strong>one-way exclusion doors</strong> — devices that allow animals already
              inside to exit but prevent re-entry. Particularly effective for bats, squirrels, and
              other wildlife.
            </li>
            <li>
              Remove food attractants: secure trash, don't leave pet food outside, pick up fallen
              fruit, secure compost
            </li>
            <li>Trim tree branches that provide roof access</li>
            <li>Remove wood piles and yard clutter that provide denning sites</li>
          </ul>

          <div className={styles.callout}>
            <p>
              <strong>Seasonal tip:</strong> Fall and early winter are the highest-risk seasons for
              wildlife entering homes. Inspecting and sealing before animals begin seeking winter
              shelter is the most efficient prevention strategy.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Wildlife Rehabilitation: How You Can Help</h2>
          <p className={styles.sectionBody}>
            Wildlife rehabilitation centers care for injured, orphaned, and sick wild animals with
            the goal of returning them to their natural habitats. They are often the first point of
            contact for community members who encounter wildlife in distress.
          </p>

          <div className={styles.callout}>
            <p>
              Most rehabilitation facilities are <strong>non-profit organizations that receive no
              local, state, or federal funding</strong>. They are entirely dependent on public
              donations to operate. The procedures required to rehabilitate wild animals are
              expensive, and consistent community financial support is essential.
            </p>
          </div>

          <ul className={styles.list}>
            <li>Make monetary donations to local wildlife rehabilitation centers</li>
            <li>Volunteer time and skills</li>
            <li>Donate supplies and equipment</li>
            <li>
              Refer community members to local rehabilitators rather than attempting self-rescue of
              injured wildlife
            </li>
          </ul>

          <p className={styles.sectionBody}>
            Find local rehabilitation:{' '}
            <a
              href="https://www.humaneworld.org/en/resources/find-wildlife-rescue-and"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-teal-dark)', textDecoration: 'underline' }}
            >
              Humane Society — Find Wildlife Rescue by State
            </a>{' '}
            or the{' '}
            <a
              href="https://www.nwrawildlife.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-teal-dark)', textDecoration: 'underline' }}
            >
              National Wildlife Rehabilitators Association
            </a>
            .
          </p>
        </div>

        {/* Section 6 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Leading Organizations</h2>

          <div className={styles.speciesGrid}>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>
                <a
                  href="https://projectcoyote.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-teal-dark)' }}
                >
                  Project Coyote
                </a>
              </div>
              <p className={styles.speciesBody}>
                A national coalition of scientists and educators promoting coexistence between
                people and wildlife. Their Coyote Friendly Communities Program assists approximately
                70 cities and agencies with individualized coexistence plans.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>
                <a
                  href="https://www.humaneworld.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-teal-dark)' }}
                >
                  Humane World for Animals
                </a>
              </div>
              <p className={styles.speciesBody}>
                One of the largest animal protection organizations in the US. Provides advocacy,
                investigation, legislation, and public education on wildlife issues, including
                extensive resources on urban wildlife coexistence.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>
                <a
                  href="https://urbanraptor.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-teal-dark)' }}
                >
                  Urban Raptor Conservancy
                </a>
              </div>
              <p className={styles.speciesBody}>
                Leading research and education on raptor populations in urban environments,
                including major ongoing research on rodenticide impacts on urban raptors.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>
                <a
                  href="https://raptorsarethesolution.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-teal-dark)' }}
                >
                  Raptors Are the Solution
                </a>
              </div>
              <p className={styles.speciesBody}>
                Focused specifically on building public awareness about rodenticide harms and
                promoting natural pest control through raptor-friendly practices.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>
                <a
                  href="https://defenders.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-teal-dark)' }}
                >
                  Defenders of Wildlife
                </a>
              </div>
              <p className={styles.speciesBody}>
                Works on conservation and coexistence policy, including advocacy for wildlife
                corridor protection and opposition to lethal predator control.
              </p>
            </div>
            <div className={styles.speciesCard}>
              <div className={styles.speciesName}>
                <a
                  href="https://www.nwrawildlife.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-teal-dark)' }}
                >
                  National Wildlife Rehabilitators Association
                </a>
              </div>
              <p className={styles.speciesBody}>
                Founded in 1982. Provides training, certification, and professional development for
                wildlife rehabilitators nationwide. Instrumental in establishing wildlife
                rehabilitation as a recognized profession.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Policy Progress</h2>
          <p className={styles.sectionBody}>
            Cities and states are increasingly adopting coexistence frameworks over lethal
            management. The most effective frameworks recognize nonhuman belonging in urban spaces,
            use lethal management as a last resort only, and prioritize mutual accommodation between
            humans and wildlife.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>New York City (2024):</strong> Adopted an Urban Wildlife Action Plan
              protecting migratory bird flight paths. The WildlifeNYC initiative provides
              comprehensive public education for residents encountering wildlife.
            </li>
            <li>
              <strong>Chicago:</strong> Developed a comprehensive urban wildlife management plan
              incorporating coexistence principles, including AI-based coyote population tracking
              for data-driven management.
            </li>
            <li>
              <strong>Massachusetts:</strong> Introduced legislation requiring non-lead ammunition
              for hunting — a direct response to lead poisoning in raptors from scavenged carcasses.
            </li>
            <li>
              <strong>Washington:</strong> Enacted the Humane Cosmetics Act (effective 2025), the
              12th state to prohibit the sale of cosmetics newly tested on animals.
            </li>
            <li>
              <strong>Oregon:</strong> New law criminalizing the creation and distribution of animal
              abuse content; maximum penalty of 5 years and $125,000 fine.
            </li>
          </ul>
        </div>

        {/* Sources */}
        <div className={styles.sources}>
          <p className={styles.sourcesTitle}>Sources</p>
          <ul className={styles.sourcesList}>
            <li>
              PMC —{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6395208/"
                target="_blank"
                rel="noopener noreferrer"
              >
                A Review: Poisoning by Anticoagulant Rodenticides in Non-Target Animals
              </a>
            </li>
            <li>
              UC Davis School of Veterinary Medicine —{' '}
              <a
                href="https://healthtopics.vetmed.ucdavis.edu/health-topics/raptors-and-rodenticides"
                target="_blank"
                rel="noopener noreferrer"
              >
                Raptors and Rodenticides
              </a>
            </li>
            <li>
              Science AAAS —{' '}
              <a
                href="https://www.science.org/content/article/really-scary-rat-poisons-wreaking-havoc-raptors-wildlife"
                target="_blank"
                rel="noopener noreferrer"
              >
                How Rat Poisons Are Wreaking Havoc on Raptors and Wildlife
              </a>
            </li>
            <li>
              Journal of Wildlife Management 2025 —{' '}
              <a
                href="https://wildlife.onlinelibrary.wiley.com/doi/10.1002/jwmg.22696"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coyote Exposure to Rodenticides in California
              </a>
            </li>
            <li>
              USDA APHIS —{' '}
              <a
                href="https://www.aphis.usda.gov/sites/default/files/Wildlife-Translocation-WDM-Technical-Series.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wildlife Translocation Technical Series
              </a>
            </li>
            <li>
              City Wildlife —{' '}
              <a
                href="https://citywildlife.org/trapping-and-re-locating-ineffective-and-inhumane/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trapping and Re-Locating: Ineffective and Inhumane
              </a>
            </li>
            <li>
              Animal Help Now —{' '}
              <a
                href="https://ahnow.org/blog/2021/10/31/despite-good-intentions-trapping-and-relocating-wildlife-is-often-a-death-sentence/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trapping and Relocating Wildlife Is Often a Death Sentence
              </a>
            </li>
            <li>
              Project Coyote —{' '}
              <a
                href="https://projectcoyote.org/wp-content/uploads/2025/01/Model-Coyote-Coexistence-Plan.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Model Coyote Coexistence Plan 2025
              </a>
            </li>
            <li>
              Wildlife Center of Virginia —{' '}
              <a
                href="https://www.wildlifecenter.org/windows-safe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Keeping Your Windows Safe for Birds
              </a>
            </li>
            <li>
              Frontiers in Conservation Science —{' '}
              <a
                href="https://www.frontiersin.org/journals/conservation-science/articles/10.3389/fcosc.2022.1016514/full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Human Tolerance of Snakes in the Southeastern US
              </a>
            </li>
            <li>
              Think Wild —{' '}
              <a
                href="https://www.thinkwildco.org/humane-wildlife-exclusion/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Humane Wildlife Exclusion Services
              </a>
            </li>
            <li>
              Wildlife Rescue League —{' '}
              <a
                href="https://www.wildliferescueleague.org/rehabilitation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wildlife Rehabilitation
              </a>
            </li>
            <li>
              Humane World for Animals —{' '}
              <a
                href="https://www.humaneworld.org/en/blog/good-news-to-start-2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                Good News to Start 2025: State Laws Now in Place
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
          </ul>
        </div>

        {/* Article navigation */}
        <div className={styles.articleNav}>
          <Link to="/learning/urban-wildlife" className="btn-secondary">
            ← Part II: Urban Wildlife
          </Link>
          <Link to="/learning" className="btn-primary">
            Back to Learning Center
          </Link>
        </div>
      </div>
    </main>
  )
}
