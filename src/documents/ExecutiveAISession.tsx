import { Page } from '../components/Page';
import { GradientText } from '../components/GradientText';
import { GlassCard } from '../components/GlassCard';
import { AmbientOrb } from '../components/AmbientOrb';
import { SectionDivider } from '../components/SectionDivider';

function StatItem({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel: string;
}) {
  return (
    <div
    style={{
      flex: 1,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    }}
    >
      <div
        style={{
          fontFamily: 'var(--font-primary)',
          fontWeight: 700,
          fontSize: '16px',
          color: 'var(--coral-500)',
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-primary)',
          fontWeight: 600,
          fontSize: '10px',
          color: 'var(--cream-50)',
          marginTop: '4px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-secondary)',
          fontWeight: 400,
          fontSize: '8px',
          opacity: 0.7,
          marginTop: '1px',
        }}
      >
        {sublabel}
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  accentColor,
}: {
  title: string;
  description: string;
  accentColor: string;
}) {
  return (
    <GlassCard
      style={{
        padding: '18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flex: 1,
      }}
    >
      <div
        style={{
          width: '36px',
          height: '3px',
          background: accentColor,
          borderRadius: '2px',
        }}
      />
      <h3
        style={{
          fontFamily: 'var(--font-primary)',
          fontWeight: 600,
          fontSize: '15px',
          margin: 0,
          marginTop: '4px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-secondary)',
          fontSize: '10.5px',
          opacity: 0.75,
          lineHeight: 1.55,
          margin: 0,
        }}
      >
        {description}
      </p>
    </GlassCard>
  );
}

function DeliverableItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--coral-500)',
          flexShrink: 0,
          marginTop: '3px',
        }}
      />
      <div>
        <div
          style={{
            fontFamily: 'var(--font-primary)',
            fontWeight: 600,
            fontSize: '12px',
            marginBottom: '3px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: '10px',
            opacity: 0.75,
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}

export function ExecutiveAISession() {
  return (
    <Page
      background="dark"
      dotGrid
      pageBreakAfter={false}
      style={{ padding: '14mm 18mm' }}
    >
      <AmbientOrb color="coral" size="lg" top="-8%" left="-12%" />
      <AmbientOrb color="violet" size="default" bottom="5%" right="-8%" />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          gap: '0',
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 100,
              fontSize: '10px',
              letterSpacing: '0.08em',
              opacity: 0.7,
              textTransform: 'uppercase',
            }}
          >
            A Jem Division
          </span>
          <img
            src="/images/jemx-logo.svg"
            alt="JemX"
            style={{ height: '28px' }}
          />
        </div>

        {/* ── Gradient divider ── */}
        <div
          style={{
            height: '2px',
            background: 'var(--gradient-ai)',
            marginBottom: '18px',
          }}
        />

        {/* ── Hero Section ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '24px',
            marginBottom: '16px',
          }}
        >
          {/* Left: Title */}
          <div style={{ width: '58%' }}>
            <h1
              style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 700,
                fontSize: '44px',
                lineHeight: 1.05,
                margin: 0,
                letterSpacing: 'var(--letter-spacing-tight)',
              }}
            >
              Executive
              <br />
              <GradientText as="span" style={{ fontSize: '44px', fontWeight: 700 }}>
                AI Session
              </GradientText>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '12.5px',
                opacity: 0.75,
                lineHeight: 1.55,
                marginTop: '12px',
                maxWidth: '100%',
              }}
            >
              Your leadership team will leave with a clear understanding of where
              AI creates value in your business — and the confidence to act on it.
            </p>
          </div>

          {/* Right: Stats card */}
          <GlassCard
            style={{
              padding: '18px 22px',
              width: '42%',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '14px',
              }}
            >
              <StatItem value="R50K" label="Investment" sublabel="Excl. VAT" />
              <StatItem value="4 Hrs" label="Duration" sublabel="Focused session" />
              <StatItem value="Up to 10" label="Capacity" sublabel="Leadership team" />
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '12px',
                fontFamily: 'var(--font-secondary)',
                fontSize: '10px',
                opacity: 0.7,
                lineHeight: 1.5,
              }}
            >
              In-person at your offices. A premium engagement with limited
              availability per quarter.
            </div>
          </GlassCard>
        </div>

        {/* ── Problem Statement ── */}
        <GlassCard
          style={{
            padding: '16px 20px',
            marginBottom: '14px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 600,
              fontSize: '12.5px',
              margin: 0,
              marginBottom: '4px',
              lineHeight: 1.5,
            }}
          >
            Most teams know AI matters. Few know what to do about it.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: '11px',
              opacity: 0.75,
              margin: 0,
              marginBottom: '4px',
              lineHeight: 1.5,
            }}
          >
            The result is inaction, wasted spend, or reliance on generic courses
            that don't move the needle.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 600,
              fontSize: '12.5px',
              color: 'var(--coral-500)',
              margin: 0,
            }}
          >
            We get your team to{' '}
            <GradientText as="span" style={{ fontSize: '12.5px', fontWeight: 600 }}>
              the moment it clicks.
            </GradientText>
          </p>
        </GlassCard>

        {/* ── Section Divider ── */}
        <SectionDivider style={{ marginBottom: '14px' }} />

        {/* ── Working Session Heading ── */}
        <div style={{ marginBottom: '14px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 700,
              fontSize: '28px',
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: 'var(--letter-spacing-tight)',
            }}
          >
            A Working Session.{' '}
            <span style={{ color: 'var(--coral-500)' }}>Not a Lecture.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: '11px',
              opacity: 0.7,
              margin: 0,
              marginTop: '6px',
            }}
          >
            A 4-hour, in-person working session for up to 10 members of your
            leadership team.
          </p>
        </div>

        {/* ── Three Feature Cards ── */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '14px',
          }}
        >
          <FeatureCard
            title="See What's Possible"
            description="How we run AI across our own business. Real tools, real workflows — not theory. The working reality of an AI-native company with 150+ agents in production."
            accentColor="var(--coral-500)"
          />
          <FeatureCard
            title="Learn What Works"
            description="How we took an entire team AI-native: the approach, the failures, the breakthroughs. Best practices for change management and getting internal buy-in."
            accentColor="var(--violet-500)"
          />
          <FeatureCard
            title="Tools Tailored to You"
            description="We walk your team through tools and workflows that matter for your specific business context — and show you how to start using them immediately."
            accentColor="var(--coral-500)"
          />
        </div>

        {/* ── Section Divider ── */}
        <SectionDivider style={{ marginBottom: '14px' }} />

        {/* ── What You Walk Away With ── */}
        <div style={{ marginBottom: '14px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 700,
              fontSize: '22px',
              margin: 0,
              marginBottom: '14px',
              letterSpacing: 'var(--letter-spacing-tight)',
            }}
          >
            What you walk away with
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px 32px',
            }}
          >
            <DeliverableItem
              title="AI Executive Playbook"
              description="Tools, best practices, common challenges, and risk mitigation. A resource your team will reference long after the session."
            />
            <DeliverableItem
              title="Prioritised Action Plan"
              description="Where AI creates the most value in your organisation, and what to tackle first."
            />
            <DeliverableItem
              title="Tool Clarity"
              description="Which AI tools matter for your business, what they do, and how to use them — without the vendor noise."
            />
            <DeliverableItem
              title="Confidence to Lead"
              description="The knowledge to make informed AI decisions, cut through vendor noise, and avoid wasted spend."
            />
          </div>
        </div>

        {/* ── Quote + Logos ── */}
        <GlassCard
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '14px',
            marginTop: '36px',
            padding: '20px 24px',
          }}
        >
          {/* Left: Quote */}
          <div style={{ width: '50%' }}>
            <span
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: '32px',
                fontWeight: 700,
                color: 'var(--coral-500)',
                lineHeight: 0.5,
                display: 'block',
                marginBottom: '0px',
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '11.5px',
                fontStyle: 'italic',
                opacity: 0.8,
                margin: 0,
                marginBottom: '4px',
                lineHeight: 1.5,
              }}
            >
              [Placeholder quote — to be provided by Greg Solomon]
            </p>
            <p
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '10px',
                opacity: 0.6,
                margin: 0,
              }}
            >
              — Greg Solomon, Former CEO, McDonald's South Africa
            </p>
          </div>

          {/* Right: Trust Logos */}
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '9px',
                opacity: 0.55,
              }}
            >
              Trusted by leadership teams at
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
              }}
            >
              <img
                src="/images/stallion-logo.png"
                alt="Stallion"
                style={{ height: '30px', opacity: 0.7, filter: 'brightness(0) invert(1)' }}
              />
              <img
                src="/images/phangela-logo.png"
                alt="Phangela"
                style={{ height: '18px', opacity: 0.7, filter: 'brightness(0) invert(1)' }}
              />
              <img
                src="/images/excellerate-logo.png"
                alt="Excellerate"
                style={{ height: '16px', opacity: 0.7, filter: 'brightness(0) invert(1)' }}
              />
            </div>
          </div>
        </GlassCard>

        {/* ── Section Divider ── */}
        <SectionDivider />

        {/* ── Footer CTA ── */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 'auto',
            paddingTop: '12px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 700,
              fontSize: '20px',
              margin: 0,
              marginBottom: '6px',
              letterSpacing: 'var(--letter-spacing-tight)',
            }}
          >
            Secure Your Session
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: '10.5px',
              opacity: 0.7,
              margin: 0,
              marginBottom: '10px',
              lineHeight: 1.5,
            }}
          >
            This is a premium engagement with limited availability per quarter.
            If you're considering it, don't wait.
          </p>
          <div
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: '11px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <a href="mailto:simon@jemhr.com,rob@jemhr.com" style={{ color: 'var(--coral-500)', fontWeight: 500, textDecoration: 'none' }}>
              simon@jemhr.com
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="https://wa.me/27637158666" style={{ color: 'var(--coral-500)', fontWeight: 500, textDecoration: 'none' }}>
              +27 63 715 8666
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="https://jemx.jemhr.com" style={{ color: 'var(--coral-500)', fontWeight: 500, textDecoration: 'none' }}>
              jemx.jemhr.com
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
}
