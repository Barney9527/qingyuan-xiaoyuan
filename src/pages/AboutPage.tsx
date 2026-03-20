export function AboutPage() {
  return (
    <section id="about" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, white 0%, #ecfdf5 100%)' }}>
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
            <span style={{ fontSize: '14px', color: '#047857', fontWeight: 500 }}>关于我们</span>
          </div>
          <h2 style={{ 
            fontSize: 'clamp(28px, 4vw, 48px)', 
            fontWeight: 700, 
            color: '#1c1917', 
            marginBottom: '16px',
            fontFamily: '"Noto Serif SC", serif'
          }}>
            清源小院
          </h2>
          <p style={{ color: '#78716c', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
            新起点教育集团旗下的居住式心理疗愈中心
          </p>
        </div>

        {/* Main Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '48px',
          marginBottom: '96px'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: 600, 
              color: '#1c1917', 
              marginBottom: '24px',
              fontFamily: '"Noto Serif SC", serif'
            }}>
              关于我们
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#57534e', lineHeight: 1.7 }}>
              <p>
                <strong style={{ color: '#059669' }}>清源小院</strong>是新起点教育集团旗下的居住式心理疗愈中心，非纯医疗机构，也非传统意义上的学校。
              </p>
              <p>
                我们依托集团精神科专家、心理学家、教育专家组成的专业团队，融合"<strong style={{ color: '#059669' }}>医疗级危机干预能力</strong>+<strong style={{ color: '#059669' }}>专业心理咨询</strong>+<strong style={{ color: '#059669' }}>赋能课程</strong>"三大核心能力。
              </p>
              <p>
                我们以"<strong style={{ color: '#059669' }}>安全与恢复</strong>"为主，强调"<strong style={{ color: '#059669' }}>优势视角</strong>"，在尊重、信任的关系中，支持孩子恢复心理社会功能，重新找到成长的方向。
              </p>
            </div>
          </div>
          
          <div>
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3', background: 'linear-gradient(135deg, #d1fae5 0%, #f0fdf4 50%, #f5f5f4 100%)' }}>
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '128px', 
                    height: '128px', 
                    margin: '0 auto', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}>
                    <span style={{ color: 'white', fontSize: '48px', fontFamily: '"Noto Serif SC", serif' }}>清</span>
                  </div>
                  <p style={{ marginTop: '24px', color: '#57534e', fontSize: '18px', fontFamily: '"Noto Serif SC", serif' }}>居住式心理疗愈中心</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px',
          marginBottom: '80px'
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '24px', 
            padding: '32px',
            border: '1px solid #d1fae5'
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '16px', 
              background: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <svg style={{ width: '28px', height: '28px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1c1917', marginBottom: '16px' }}>我们的使命</h3>
            <p style={{ color: '#57534e', lineHeight: 1.7 }}>
              给心灵疲惫的孩子一个休息与修复的空间，帮助他们看见彼此、获得成长、找到意义，走向一个幸福的人生。
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '24px', 
            padding: '32px',
            border: '1px solid #ccfbf1'
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '16px', 
              background: 'linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <svg style={{ width: '28px', height: '28px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1c1917', marginBottom: '16px' }}>我们的愿景</h3>
            <p style={{ color: '#57534e', lineHeight: 1.7 }}>
              成为中国青少年抑郁康复与心理成长的领导品牌。
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#1c1917', 
            marginBottom: '32px', 
            textAlign: 'center',
            fontFamily: '"Noto Serif SC", serif'
          }}>
            核心理念
          </h3>
          <div style={{ 
            background: 'linear-gradient(135deg, #ecfdf5 0%, white 50%, #f0fdfa 100%)',
            borderRadius: '24px',
            padding: '48px',
            textAlign: 'center',
            border: '1px solid #d1fae5'
          }}>
            <p style={{ 
              fontSize: 'clamp(24px, 3vw, 32px)', 
              color: '#1c1917', 
              fontWeight: 500,
              fontFamily: '"Noto Serif SC", serif',
              lineHeight: 1.5
            }}>
              澄心明性，思源致远
            </p>
            <p style={{ color: '#57534e', marginTop: '24px', maxWidth: '640px', margin: '24px auto 0', lineHeight: 1.7 }}>
              通过内省与修养，以清明之心抵达自我认知的深度。在追寻未来时不忘文化根脉与初心，以根源性的智慧支撑行稳致远。
            </p>
          </div>
        </div>

        {/* Advantages */}
        <div>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#1c1917', 
            marginBottom: '32px', 
            textAlign: 'center',
            fontFamily: '"Noto Serif SC", serif'
          }}>
            我们的优势
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px'
          }}>
            <div style={{ 
              textAlign: 'center', 
              padding: '32px', 
              borderRadius: '16px', 
              backgroundColor: 'white',
              border: '1px solid #f5f5f4'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 20px',
                borderRadius: '20px', 
                background: 'linear-gradient(135deg, #d1fae5 0%, #f0fdf4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg style={{ width: '40px', height: '40px', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 style={{ fontWeight: 600, color: '#1c1917', marginBottom: '8px' }}>专业的医疗与心理团队</h4>
              <p style={{ color: '#78716c', fontSize: '14px' }}>精神科专家、心理学家、教育专家组成的专业团队</p>
            </div>
            
            <div style={{ 
              textAlign: 'center', 
              padding: '32px', 
              borderRadius: '16px', 
              backgroundColor: 'white',
              border: '1px solid #f5f5f4'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 20px',
                borderRadius: '20px', 
                background: 'linear-gradient(135deg, #ccfbf1 0%, #f0fdf4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg style={{ width: '40px', height: '40px', color: '#0d9488' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 style={{ fontWeight: 600, color: '#1c1917', marginBottom: '8px' }}>全面的成长陪伴体系</h4>
              <p style={{ color: '#78716c', fontSize: '14px' }}>住宿制、日间走读制、专项心理服务多模式支持</p>
            </div>
            
            <div style={{ 
              textAlign: 'center', 
              padding: '32px', 
              borderRadius: '16px', 
              backgroundColor: 'white',
              border: '1px solid #f5f5f4'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 20px',
                borderRadius: '20px', 
                background: 'linear-gradient(135deg, #d1fae5 0%, #f0fdf4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg style={{ width: '40px', height: '40px', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h4 style={{ fontWeight: 600, color: '#1c1917', marginBottom: '8px' }}>个性化的服务方案</h4>
              <p style={{ color: '#78716c', fontSize: '14px' }}>根据每个青少年的具体情况定制专属方案</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
