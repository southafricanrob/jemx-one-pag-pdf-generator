import { Page } from '../components/Page';
import { GradientText } from '../components/GradientText';
import { GlassCard } from '../components/GlassCard';
import { PillButton } from '../components/PillButton';
import { AmbientOrb } from '../components/AmbientOrb';
import { SectionDivider } from '../components/SectionDivider';
import { Tag } from '../components/Tag';
import { IconBadge } from '../components/IconBadge';

export function SampleDocument() {
  return (
    <>
      {/* ── Page 1: Cover ── */}
      <Page background="dark" dotGrid>
        <AmbientOrb color="coral" size="lg" top="-10%" left="-15%" />
        <AmbientOrb color="violet" size="default" top="55%" right="-10%" />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          gap: '24px',
        }}>
          <Tag>AI TRAINING PLATFORM</Tag>

          <h1 style={{ fontSize: '52px', lineHeight: 1.1, maxWidth: '500px' }}>
            Accelerate your team with{' '}
            <GradientText>AI-powered learning</GradientText>
          </h1>

          <p style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: '18px',
            opacity: 0.6,
            maxWidth: '420px',
            lineHeight: 1.6,
          }}>
            A comprehensive proposal for enterprise AI training delivery,
            designed to upskill your workforce with hands-on, project-based learning.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <PillButton variant="primary-coral">Get Started</PillButton>
            <PillButton variant="outline-inverse">Learn More</PillButton>
          </div>

          <div style={{
            position: 'absolute',
            bottom: 'var(--page-padding)',
            left: 'var(--page-padding)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.4,
          }}>
            <span style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 100,
              fontSize: '12px',
              letterSpacing: '0.05em',
            }}>
              A Jem Division
            </span>
          </div>
        </div>
      </Page>

      {/* ── Page 2: Services Overview ── */}
      <Page background="dark-mid" dotGrid>
        <AmbientOrb color="violet" size="sm" top="5%" right="5%" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%' }}>
          <div>
            <Tag>OUR APPROACH</Tag>
            <h2 style={{ fontSize: '36px', marginTop: '16px' }}>
              Why <GradientText>JemX</GradientText>?
            </h2>
            <p style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: '15px',
              opacity: 0.6,
              marginTop: '8px',
              maxWidth: '460px',
              lineHeight: 1.6,
            }}>
              We deliver AI training through three integrated phases,
              each designed to build lasting capability.
            </p>
          </div>

          <SectionDivider />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            flex: 1,
          }}>
            <GlassCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <IconBadge>T</IconBadge>
                <Tag>TRAIN</Tag>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Custom Curriculum</h3>
              <p style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '13px',
                opacity: 0.6,
                lineHeight: 1.6,
              }}>
                Tailored AI training paths designed for your specific
                industry vertical and team skill level.
              </p>
            </GlassCard>

            <GlassCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <IconBadge>B</IconBadge>
                <Tag>BUILD</Tag>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Hands-on Projects</h3>
              <p style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '13px',
                opacity: 0.6,
                lineHeight: 1.6,
              }}>
                Real-world project experience with expert mentorship,
                building production-grade AI solutions.
              </p>
            </GlassCard>

            <GlassCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <IconBadge>E</IconBadge>
                <Tag>EMBED</Tag>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Ongoing Support</h3>
              <p style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '13px',
                opacity: 0.6,
                lineHeight: 1.6,
              }}>
                Continuous coaching and support to embed AI capability
                into your team's daily workflow.
              </p>
            </GlassCard>

            <GlassCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <IconBadge>M</IconBadge>
                <Tag>MEASURE</Tag>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Impact Tracking</h3>
              <p style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '13px',
                opacity: 0.6,
                lineHeight: 1.6,
              }}>
                Quantifiable metrics and reporting to demonstrate
                ROI and track skill progression.
              </p>
            </GlassCard>
          </div>
        </div>
      </Page>

      {/* ── Page 3: Closing ── */}
      <Page background="dark" dotGrid pageBreakAfter={false}>
        <AmbientOrb color="coral" size="default" top="30%" left="-20%" />
        <AmbientOrb color="violet" size="sm" bottom="10%" right="-5%" />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          textAlign: 'center',
          gap: '24px',
        }}>
          <Tag>NEXT STEPS</Tag>

          <h2 style={{ fontSize: '40px', maxWidth: '460px', lineHeight: 1.15 }}>
            Ready to <GradientText>transform</GradientText> your team?
          </h2>

          <p style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: '16px',
            opacity: 0.6,
            maxWidth: '380px',
            lineHeight: 1.6,
          }}>
            Let's discuss how JemX can design a bespoke AI training
            programme for your organisation.
          </p>

          <SectionDivider style={{ maxWidth: '200px', margin: '8px auto' }} />

          <div style={{ display: 'flex', gap: '12px' }}>
            <PillButton variant="primary-coral">Book a Call</PillButton>
            <PillButton variant="outline-inverse">Download Brochure</PillButton>
          </div>

          <div style={{
            marginTop: 'auto',
            opacity: 0.3,
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.1em',
          }}>
            jemx.ai
          </div>
        </div>
      </Page>
    </>
  );
}
