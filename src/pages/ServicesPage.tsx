export function ServicesPage() {
  const services = [
    {
      title: '住宿制服务',
      description: '为需要长期居住式疗愈的青少年提供全天候的专业陪伴与支持，在安全的环境中循序渐进地恢复心理功能。',
      features: ['24小时专业陪护', '个性化心理辅导', '团体成长课程', '家庭关系修复'],
      color: '#059669',
    },
    {
      title: '日间走读制',
      description: '为需要兼顾学业或家庭生活的青少年提供日间专业心理服务，晚上可回家与家人团聚。',
      features: ['灵活时间安排', '专业心理咨询', '学业规划指导', '家长工作坊'],
      color: '#0d9488',
    },
    {
      title: '专项心理服务',
      description: '针对特定心理问题提供专业的干预方案，包括危机干预、创伤治疗、学业压力管理等。',
      features: ['危机评估与干预', '创伤后应激处理', '考试焦虑缓解', '人际关系指导'],
      color: '#78716c',
    },
  ];

  const targetGroups = [
    { 
      number: '01',
      title: '年龄范围', 
      description: '12-18岁青少年',
    },
    { 
      number: '02',
      title: '招收对象', 
      description: '因厌学、焦虑、抑郁导致休学或无法正常就学的青少年',
    },
    { 
      number: '03',
      title: '服务目标', 
      description: '帮助青少年恢复心理社会功能，重新找到成长方向',
    },
  ];

  const processSteps = [
    { title: '预约咨询', description: '初步了解孩子情况' },
    { title: '专业评估', description: '全面心理测评' },
    { title: '制定方案', description: '个性化服务计划' },
    { title: '开始服务', description: '专业团队介入' },
    { title: '持续跟进', description: '定期评估调整' },
  ];

  return (
    <section id="services" style={{ padding: '96px 24px', backgroundColor: '#fafaf9' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '9999px',
            marginBottom: '16px'
          }}>
            <span style={{ fontSize: '14px', color: '#047857', fontWeight: 500 }}>服务项目</span>
          </div>
          <h2 style={{ 
            fontSize: 'clamp(28px, 4vw, 48px)', 
            fontWeight: 700, 
            color: '#1c1917', 
            marginBottom: '16px',
            fontFamily: '"Noto Serif SC", serif'
          }}>
            三大服务模式
          </h2>
          <p style={{ color: '#78716c', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
            清源小院构建起住宿制、日间走读制、专项心理服务三大服务模式，
            满足不同青少年及家庭的多样化需求。
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px',
          marginBottom: '80px'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid #f5f5f4',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: service.color
              }}>
                <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index === 0 ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  ) : index === 1 ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  )}
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1c1917', marginBottom: '16px' }}>
                {service.title}
              </h3>
              <p style={{ color: '#57534e', marginBottom: '24px', lineHeight: 1.7 }}>
                {service.description}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#57534e' }}>
                    <svg style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Target Group */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '24px', 
          padding: '32px',
          border: '1px solid #f5f5f4',
          marginBottom: '80px'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#1c1917', 
            marginBottom: '32px', 
            textAlign: 'center',
            fontFamily: '"Noto Serif SC", serif'
          }}>
            招收对象
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '32px'
          }}>
            {targetGroups.map((group, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '16px', 
                  backgroundColor: '#d1fae5',
                  color: '#059669',
                  marginBottom: '16px'
                }}>
                  <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div style={{ fontSize: '48px', fontWeight: 700, color: '#d1fae5', marginBottom: '8px' }}>{group.number}</div>
                <h4 style={{ fontWeight: 600, color: '#1c1917', marginBottom: '8px' }}>{group.title}</h4>
                <p style={{ color: '#78716c', fontSize: '14px' }}>{group.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div style={{ marginBottom: '64px' }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#1c1917', 
            marginBottom: '32px', 
            textAlign: 'center',
            fontFamily: '"Noto Serif SC", serif'
          }}>
            服务流程
          </h3>
          
          {/* Process Steps - responsive */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px'
          }}>
            {processSteps.map((process, index) => (
              <div 
                key={index}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px',
                  backgroundColor: 'white',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  border: '1px solid #f5f5f4',
                  minWidth: '200px'
                }}
              >
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#d1fae5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: '#059669', fontWeight: 600 }}>{index + 1}</span>
                </div>
                <div>
                  <div style={{ fontWeight: 500, color: '#1c1917', marginBottom: '4px' }}>{process.title}</div>
                  <div style={{ fontSize: '14px', color: '#78716c' }}>{process.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)',
              color: 'white',
              borderRadius: '9999px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
          >
            预约免费评估
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
